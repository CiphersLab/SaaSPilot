import { Html, Head, Body, Container, Text, Img, Button } from '@react-email/components';

interface ResetPasswordEmailProps {    
    name:string,
    baseURL:string,
    resetLink:string
}

const ResetPasswordTemplate = ({
    name,
    baseURL,
    resetLink
  }: ResetPasswordEmailProps) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        {/* Logo */}
        <Img src={`${baseURL}/logo.png`} alt="Your SaaS Logo" width="200" height="auto" />
        <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Reset Your Password</Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Hi {name},
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          We received a request to reset your password. If you did not make this request, you can ignore this message.
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          To reset your password, click the button below:
        </Text>
        <Button
          href={`${resetLink}`}
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '12px 20px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px',
          }}
        >
          Reset Password
        </Button>
        <Text style={{ fontSize: '14px', marginTop: '20px', color: '#888' }}>
          If you have any questions or need help, feel free to contact us at support@yourapp.com.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ResetPasswordTemplate;
