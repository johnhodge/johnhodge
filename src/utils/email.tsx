'use server';
import { Email } from '@/app/components/email-basic-follow-up';
import { FormValueTypes } from '@/app/components/form';
import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.PUBLIC_SENDGRID_API_KEY ?? '');
export default async function SendEmail(props: FormValueTypes) {
  const emailHtml = render(<Email {...props} />, {
    pretty: true,
  });

  const options = {
    from: 'John Hodge <info@johnhodge.com>',
    to: props.email,
    subject: `Thanks for reaching out, ${props.firstName}!`,
    html: emailHtml,
  };
  await sendgrid.send(options);
}