import { Html, Head, Body, Container, Text, Img } from '@react-email/components';

interface TwoFAEmailProps {    
  name:string,
  baseURL:string,
  code:string
}

const TwoFATemplate = ({
  name,
  baseURL,
  code
}: TwoFAEmailProps) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        {/* Logo */}
        <Img src={`${baseURL}/logo.png`} alt="Your SaaS Logo" width="200" height="auto" />
        <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Your 2FA Code</Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Hi {name},
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          We received a request to log in to your [Your SaaS Name] account. For your security, please use the code below to complete your login:
        </Text>
        <Text style={{ fontSize: '24px', fontWeight: 'bold', color: '#007BFF' }}>
          {code}
        </Text>
        <Text style={{ fontSize: '14px', marginTop: '20px', color: '#888' }}>
          If you did not request this code, please ignore this email.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TwoFATemplate;
