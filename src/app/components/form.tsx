'use client';
import { EmailData } from '@/app/types';
import SendEmail from '@/utils/email';
import { zodResolver } from '@hookform/resolvers/zod';
import mixpanel from 'mixpanel-browser';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

mixpanel.init('bbbc07c83f8fe3711eb32fd5243041aa', {
  persistence: 'localStorage',
  track_pageview: true,
});

const options: { value: string; label: string }[] = [
  {
    label: 'Adtech Provider',
    value: 'hs_persona_1',
  },
  {
    label: 'Programmer',
    value: 'hs_persona_2',
  },
  {
    label: 'Distributor',
    value: 'hs_persona_3',
  },
  {
    label: 'Reseller',
    value: 'hs_persona_4',
  },
  {
    label: 'Other',
    value: 'hs_persona_5',
  },
];

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
const thanks: Array<string> = [
  "I'll follow up as soon as I finish writing this query.",
  "I'm going to grab a snack and then I'll be in touch.",
  "Message received, I'll be in touch soon. Sit tight.",
  "There they are! I've been wondering when you were going to reach out!",
  "I'll be in touch as soon as I get back from grabbing a coffee.",
];

export const FormValues = z.object({
  firstName: z.string().min(1, { message: 'First name is a required field' }),
  lastName: z.string().min(1, { message: 'Last name is a required field' }),
  companyName: z.optional(z.string()),
  hs_persona: z.enum(
    [
      'hs_persona_1',
      'hs_persona_2',
      'hs_persona_3',
      'hs_persona_4',
      'hs_persona_5',
    ],
    { errorMap: (issues, ctx) => ({ message: 'This is a required field' }) }
  ),
  email: z
    .string()
    .min(1, { message: 'Email is a required field' })
    .email({ message: 'Email format is invalid' }),
  message: z.optional(z.string()),
});

type FormValueTypes = z.infer<typeof FormValues>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitSuccessful },
  } = useForm<FormValueTypes>({
    resolver: zodResolver(FormValues),
  });
  const onSubmit: SubmitHandler<FormValueTypes> = (data) => {
    const emailConfig: EmailData = {
      recipient: {
        firstName: data.firstName,
        email: data.email,
      },
      sender: {
        name: 'John Hodge',
        email: 'no_reply@johnhodge.com',
      },
      previewText: `Hey ${data.firstName} I got your message and will follow up shortly.`,
      subject: `Thanks for reaching out, ${data.firstName}!`,
    };
    SendEmail(emailConfig);

    mixpanel.identify(data.email);
    mixpanel.track('contact_form_submission', {
      distinct_id: data.email,
      $email: data.email,
      $name: `${data.firstName} ${data.lastName}`,
      $first_name: data.firstName,
      $last_name: data.lastName,
      message: data.message,
    });
    mixpanel.people.set({
      $email: data.email,
      $name: `${data.firstName} ${data.lastName}`,
      $first_name: data.firstName,
      $last_name: data.lastName,
      $created: new Date().toISOString(),
      hs_persona: data.hs_persona,
    });
  };

  return (
    <div className={'col-span-8'}>
      {isSubmitSuccessful ? (
        <>
          <h4 className='text-xl font-extrabold lg:text-2xl xl:text-3xl'>
            Thank’s for reaching out!
          </h4>
          <p>{thanks[getRandomIntInclusive(0, 4)]}</p>
        </>
      ) : (
        <form
          id='contact'
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-stretch gap-4 text-xl py-6'>
          <fieldset className='flex flex-col'>
            <input
              placeholder='First name'
              className={`bg-gray-0 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.firstName
                  ? 'border-red-400 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('firstName')}
            />
            <p className='text-red-700' role='alert'>
              {errors.firstName?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <input
              placeholder='Last name'
              className={`bg-gray-0 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.lastName
                  ? 'border-red-400 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('lastName')}
            />
            <p className='text-red-700' role='alert'>
              {errors.lastName?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <input
              placeholder='Company name'
              className={`bg-gray-0 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.companyName
                  ? 'border-red-400 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('companyName')}
            />
            <p className='text-red-700' role='alert'>
              {errors.companyName?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <input
              placeholder='Email'
              className={`bg-gray-0 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.email
                  ? 'border-red-400 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='email'
              {...register('email')}
            />
            <p className='text-red-700' role='alert'>
              {errors.email?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <select
              className={`bg-gray-0 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.hs_persona
                  ? 'border-red-400 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              defaultValue={'hs_persona_0'}
              {...register('hs_persona')}>
              <option key={'hs_persona_0'} value='hs_persona_0' disabled>
                Which option describes you?
              </option>
              {options.map((option: { value: string; label: string }) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className='text-red-700' role='alert'>
              {errors.hs_persona?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className={'flex flex-col'}>
            <textarea
              placeholder='Message'
              className='bg-gray-0 form-input text-xl px-9 py-6 rounded-3xl border-2 border-primary-400 text-primary-700'
            />
          </fieldset>

          <input
            type='submit'
            className={`max-w-fit text-center font-bold text-xl px-9 py-6 rounded-3xl bg-gradient-to-b border-2 border-secondary-400 from-secondary-100 to-secondary-50 text-secondary-700 cursor-pointer hover:scale-105 ease-in-out duration-150 ${
              isLoading ? 'disabled:opacity-75' : ''
            }`}
          />
        </form>
      )}
    </div>
  );
}
