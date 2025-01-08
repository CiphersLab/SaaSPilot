import { Resend } from "resend";
import ConfirmEmailTemplate from '@/email-templates/confirm-email';
import TwoFATemplate from "@/email-templates/2fa-code";
import ResetPasswordTemplate from "@/email-templates/reset-password";
import WelcomeOnboardTemplate from "@/email-templates/welcome-onboard";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL;

export const sendPasswordResetEmail = async (email: string, token: string, name:string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    // html: `<p>Click <a href="${resetLink}">here</a> to reset password.</p>`,
    react: ResetPasswordTemplate({
      name:name,
      baseURL: domain ?? "",
      resetLink:resetLink})
    

  });
};

export const sendVerificationEmail = async (email: string, token: string, name: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Confirm your email",
    // html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`,
    react: ConfirmEmailTemplate({
      name:name,
      baseURL: domain ?? "",
      confirmLink:confirmLink})
    });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string, name: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "2FA Code",
    react: TwoFATemplate({ 
      name:name,
      baseURL: domain ?? "",
      code:token      
    }),     
  });
};


export const sendWelcomeOnbaordEmail = async (email: string, name: string) => {
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Welcome To SaaS",
    react: WelcomeOnboardTemplate({ 
      name:name,
      baseURL: domain ?? ""       
    }),     
  });
};
