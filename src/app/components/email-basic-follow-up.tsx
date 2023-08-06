import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import { EmailData } from '@/app/types';

export function Email(props: EmailData) {
  const date: string = new Date().toISOString();
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : `http://192.168.0.19:8800`;

  const main = {
    backgroundColor: '#ffffff',
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };

  const container = {
    margin: '0 auto',
    padding: '20px 0',
    width: '98%',
    maxWidth: '580px',
  };

  const heading = {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#000000',
  };

  const paragraph = {
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#334155',
  };

  const link = {
    ...paragraph,
    color: '#047857',
    display: 'block',
  };

  const button = {
    backgroundColor: '#047857',
    borderRadius: '8px',
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
    width: 'fit-content',
  };

  const logo = {
    width: 'auto',
    maxHeight: '50px',
    margin: 'auto',
  };

  const hr = {
    borderColor: '#cbd5e1',
    margin: '20px 0',
  };

  const full = {
    width: '100%',
  };

  const footer = {
    color: '#64748b',
    fontSize: '14px',
    marginBottom: '10px',
  };

  return (
    <Html>
      <Head />
      <Preview>{props.previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
                style={logo}
                src='https://www.johnhodge.com/img/email_fallback.png'
                height={50}
                width={50}
                alt='John Hodge'
                srcSet={'https://www.johnhodge.com/img/outlined_icon.svg'}
              />
            </Section>

            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>
                  Thanks for reaching out, {props.recipient.firstName}!
                </Text>
                <Text style={paragraph}>
                  I’ve received your message and will be in touch shortly to set
                  up some time to chat.
                </Text>
                <Text style={paragraph}>
                  Alternatively, you’re welcome to grab time on my calendar
                  using the button below.
                </Text>

                <Button
                  pY={16}
                  pX={32}
                  style={button}
                  href='https://meetings.hubspot.com/john378'>
                  Book time with me!
                </Button>
              </Row>
            </Section>

            <Section>
              <Row style={full}>
                <Hr style={hr} />
                <Link href={baseUrl} style={link}>
                  Website
                </Link>
                <Link href={`${baseUrl}/resources/case-studies`} style={link}>
                  Case Studies
                </Link>
                <Link href={`${baseUrl}/resources/docs`} style={link}>
                  Docs
                </Link>
              </Row>
            </Section>

            <Section>
              <Row style={full}>
                <Hr style={hr} />
                <Text style={footer}>Event timestamp: {date}</Text>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}
