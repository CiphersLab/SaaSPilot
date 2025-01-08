import { Html, Head, Body, Container, Text, Img, Button } from '@react-email/components';

interface ConfirmEmailEmailProps {    
    name:string,
    baseURL:string,
    confirmLink:string
}

const ConfirmEmailTemplate = ({
    name,
    baseURL,
    confirmLink
  }: ConfirmEmailEmailProps) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        {/* Logo */}
        <Img src={`${baseURL}/logo.png`} alt="Your SaaS Logo" width="200" height="auto" />
        <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Confirm Your Email Address</Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Hi {name},
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Thank you for signing up with [Your SaaS Name]! To complete your registration, please confirm your email address.
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Click the button below to verify your email:
        </Text>
        <Button
          href={`${confirmLink}`}
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '12px 20px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        >
          Confirm Email
        </Button>
        <Text style={{ fontSize: '14px', marginTop: '20px', color: '#888' }}>
          If you didn&apos;t sign up for [Your SaaS Name], you can ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ConfirmEmailTemplate;
