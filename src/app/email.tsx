'use server';
import { Email } from '@/app/components/email-builder';
import { FormValueTypes } from '@/app/components/form';
import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.PUBLIC_SENDGRID_API_KEY ?? '');
export default async function SendEmail(props: FormValueTypes) {
  const emailHtml = render(<Email {...props} />);

  const options = {
    from: 'John Hodge <info@johnhodge.com>',
    to: props.email,
    subject: `Thanks for reaching out ${props.firstName}`,
    html: emailHtml,
  };
  console.log('Function triggered:', new Date());
  sendgrid.send(options);
}
