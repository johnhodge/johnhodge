'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import errorMap from 'zod/lib/locales/en';

type OptionData = {
  value: string;
  label: string;
};

const options: OptionData[] = [
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

const FormValues = z.object({
  firstName: z.string().min(1, { message: 'First name is a required field.' }),
  lastName: z.string().min(1, { message: 'Last name is a required field.' }),
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
    .min(1, { message: 'Email is a required field.' })
    .email({ message: 'Email format is invalid.' }),
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
  const onSubmit: SubmitHandler<FormValueTypes> = (data) =>
    // Custom submission handling here.
    // We're currently not using this since these form subs go directly
    // into HS, but if that was to change, custom logic would live here.
    null;

  return (
    <div className={'col-span-8'}>
      {isSubmitSuccessful ? (
        <>
          <h4 className='text-xl font-extrabold lg:text-2xl xl:text-3xl'>
            That&apos;s for reaching out!
          </h4>
          <p>{thanks[getRandomIntInclusive(0, 4)]}</p>
        </>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col justify-stretch gap-4 text-xl py-6'>
          <fieldset className='flex flex-col'>
            <input
              placeholder='First name'
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.firstName
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('firstName')}
            />
            <p className='text-red-600' role='alert'>
              {errors.firstName?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <input
              placeholder='Last name'
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.lastName
                  ? 'border-red-600 text-red-700'
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
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.companyName
                  ? 'border-red-600 text-red-700'
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
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.email
                  ? 'border-red-600 text-red-700'
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
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.hs_persona
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              defaultValue={'hs_persona_0'}
              {...register('hs_persona')}>
              <option key={'hs_persona_0'} value='hs_persona_0' disabled>
                Which of these best describes you?
              </option>
              {options.map((option: OptionData) => (
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
              className='bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 border-primary-400 text-primary-700'
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
