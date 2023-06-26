'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import errorMap from 'zod/lib/locales/en';

type OptionData = {
  value: string;
  label: string;
};

const personas: OptionData[] = [
  { label: 'Adtech Provider', value: 'hs_persona_1' },
  { label: 'Programmer', value: 'hs_persona_2' },
  { label: 'Distributor', value: 'hs_persona_3' },
  { label: 'Reseller', value: 'hs_persona_4' },
  { label: 'Other', value: 'hs_persona_5' },
];

const audience_type: OptionData[] = [
  { label: 'Product management', value: 'product_management' },
  { label: 'Adtech vendors', value: 'adtect_vendor' },
  { label: 'Major TV programmer executives', value: 'programmer_executive' },
  { label: 'Tech savvy vMVPD executives', value: 'vmvpd_executive' },
  { label: 'Publisher AdOps/technical SMEs', value: 'publisher_technical_sme' },
  { label: 'Account managers/AEs', value: 'account_manager' },
  { label: 'Other', value: 'other' },
];

const speech_type: OptionData[] = [
  { label: 'Keynote', value: 'keynote' },
  { label: 'Break-out/workshop', value: 'breakout' },
  { label: 'Panel discussion', value: 'panel_discussion' },
  { label: 'Expert interview', value: 'expert_interview' },
  { label: 'Other', value: 'other' },
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
  firstname: z.string().min(1, { message: 'First name is a required field.' }),
  lastname: z.string().min(1, { message: 'Last name is a required field.' }),
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
  event_name: z.string().min(1, { message: 'Event name is a required field.' }),
  event_date: z.coerce
    .date()
    .min(new Date(), { message: 'Please pick a date in the future' }),
  event_audience: z.enum(
    [
      'product_management',
      'adtect_vendor',
      'programmer_executive',
      'vmvpd_executive',
      'publisher_technical_sme',
      'account_manager',
      'other',
    ],
    { errorMap: (issues, ctx) => ({ message: 'This is a required field' }) }
  ),
  speech_type: z.enum(
    ['breakout', 'panel_discussion', 'keynote', 'expert_interview', 'other'],
    {
      errorMap: (issues, ctx) => ({
        message: 'Speech type is a required field',
      }),
    }
  ),
  speech_duration: z.coerce
    .number({
      // required_error: 'Speech duration is a required field.',
      // invalid_type_error: 'Speech duration is a required field.',
    })
    .min(30, { message: 'Please enter a value that is least 30 minutes' })
    .int({ message: 'Please enter a whole number of minutes' }),
  event_context: z.optional(z.string()),
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
            <label
              htmlFor='firstname'
              className={`text-xl pt-4 pb-2 ${
                errors.firstname
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              First name
            </label>
            <input
              placeholder='John'
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.firstname
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('firstname')}
            />
            <p className='text-red-600' role='alert'>
              {errors.firstname?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='lastname'
              className={`text-xl pt-4 pb-2 ${
                errors.lastname
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Last name
            </label>
            <input
              placeholder='Hodge'
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.lastname
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('lastname')}
            />
            <p className='text-red-700' role='alert'>
              {errors.lastname?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='companyName'
              className={`text-xl pt-4 pb-2 ${
                errors.companyName
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Company name
            </label>
            <input
              placeholder='Acme Inc'
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
            <label
              htmlFor='email'
              className={`text-xl pt-4 pb-2 ${
                errors.email
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Company email
            </label>
            <input
              placeholder='john@johnhodge.com'
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
            <label
              htmlFor='hs_persona'
              className={`text-xl pt-4 pb-2 ${
                errors.hs_persona
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Which option best describes you?
            </label>
            <select
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.hs_persona
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              defaultValue={'hs_persona_0'}
              {...register('hs_persona')}>
              <option key={'hs_persona_0'} value='hs_persona_0' disabled>
                Select
              </option>
              {personas.map((option: OptionData) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className='text-red-700' role='alert'>
              {errors.hs_persona?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='event_name'
              className={`text-xl pt-4 pb-2 ${
                errors.event_name
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Event name
            </label>
            <input
              placeholder='Event name'
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.event_name
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='text'
              {...register('event_name')}
            />
            <p className='text-red-700' role='alert'>
              {errors.event_name?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='event_date'
              className={`text-xl pt-4 pb-2 ${
                errors.event_date
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Event date
            </label>
            <input
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.event_date
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='date'
              {...register('event_date')}
            />
            <p className='text-red-700' role='alert'>
              {errors.event_date?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='event_audience'
              className={`text-xl pt-4 pb-2 ${
                errors.event_audience
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Which option best describes the audience of this speech?
            </label>
            <select
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.event_audience
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              defaultValue={'event_audience_0'}
              {...register('event_audience')}>
              <option key={'event_audience'} value='event_audience_0' disabled>
                Select
              </option>
              {audience_type.map((option: OptionData) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className='text-red-700' role='alert'>
              {errors.event_audience?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='speech_type'
              className={`text-xl pt-4 pb-2 ${
                errors.speech_type
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              Which option best describes the type of speech being requested?
            </label>
            <select
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.hs_persona
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              defaultValue={'speech_type_0'}
              {...register('speech_type')}>
              <option key={'speech_type'} value='speech_type_0' disabled>
                Select
              </option>
              {speech_type.map((option: OptionData) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className='text-red-700' role='alert'>
              {errors.speech_type?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='speech_duration'
              className={`text-xl pt-4 pb-2 ${
                errors.speech_duration
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              What is the expected speech duration (in minutes)?
            </label>
            <input
              placeholder='90'
              className={`bg-white-50 form-input text-xl px-9 py-6 rounded-3xl border-2 ${
                errors.speech_duration
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              type='number'
              {...register('speech_duration')}
            />
            <p className='text-red-700' role='alert'>
              {errors.speech_duration?.message?.toString()}
            </p>
          </fieldset>

          <fieldset className='flex flex-col'>
            <label
              htmlFor='event_context'
              className={`text-xl pt-4 pb-2 ${
                errors.event_context
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}>
              What other important information would you like to share?
            </label>
            <textarea
              placeholder='This event is huge with programmers and resellers.'
              className={`bg-white-50 form-input text-xl px-9 py-6 h-40 rounded-3xl border-2 ${
                errors.event_context
                  ? 'border-red-600 text-red-700'
                  : 'border-primary-400 text-primary-700'
              }`}
              {...register('event_context')}
            />
            <p className='text-red-700' role='alert'>
              {errors.event_context?.message?.toString()}
            </p>
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
