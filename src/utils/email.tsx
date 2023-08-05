'use server';
import { Email } from '@/app/components/email-basic-follow-up';
import { EmailData, SendEmailSettings } from '@/app/types';
import { render } from '@react-email/render';
import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.PUBLIC_SENDGRID_API_KEY ?? '');
export default async function SendEmail(props: EmailData) {
  const emailHtml = render(<Email {...props} />, {
    pretty: true,
  });

  const options: SendEmailSettings = {
    from: `${props.sender.name} <${props.sender.email}>`,
    to: props.recipient.email,
    subject: props.subject,
    html: emailHtml,
  };
  await sendgrid.send(options);
}
