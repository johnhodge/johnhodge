import { FormValueTypes } from '@/app/components/form';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';

export function Email(props: FormValueTypes) {
  const date: string = new Date().toISOString();
  return (
    <Html lang={'en'}>
      <p>Thanks for reaching out {props.firstName}</p>
      <p>I&apos;ll be in touch shortly</p>
      <Hr />
      <p>Email processed: {date}</p>
    </Html>
  );
}
