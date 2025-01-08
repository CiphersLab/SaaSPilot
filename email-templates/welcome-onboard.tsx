import { Html, Head, Body, Container, Text, Img, Button } from '@react-email/components';

interface WelcomeOnboardEmailProps {    
    name:string,
    baseURL:string
}

const WelcomeOnboardTemplate = ({
    name,
    baseURL
  }: WelcomeOnboardEmailProps) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <Container style={{ textAlign: 'center', padding: '20px' }}>
        {/* Logo */}
        <Img src={`${baseURL}/logo.png`} alt="Your SaaS Logo" width="200" height="auto" />
        <Text style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>Welcome to [Your SaaS Name]!</Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Hi { name },
        </Text>
        <Text style={{ fontSize: '16px', lineHeight: '1.5', color: '#555' }}>
          Thanks for signing up! We&apos;re thrilled to have you on board. You can now start exploring the amazing features of [Your SaaS Name].
        </Text>
        <Button 
          href={`${baseURL}/dashboard`}
          style={{
            backgroundColor: '#007BFF',
            color: '#fff',
            padding: '12px 20px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        >
          Go to Dashboard
        </Button>
        <Text style={{ fontSize: '14px', marginTop: '20px', color: '#888' }}>
          If you have any questions or need help, feel free to contact us at support@yourapp.com.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeOnboardTemplate;
