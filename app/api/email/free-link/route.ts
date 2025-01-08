import FreeLinkEmail from "@/email-templates/free-link";
import PaidLinkEmail from "@/email-templates/paid-link";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);


export async function GET(request: NextRequest) {
    const sendEmail = true;
    const userEmail = request.nextUrl.searchParams.get("userEmail") ?? ""
    const userFName = request.nextUrl.searchParams.get("userFName") ?? ""
    const userLName = request.nextUrl.searchParams.get("userLName") ?? ""     
    console.log(userEmail, userFName, userLName)

    let contact = await resend.contacts.create({
        email: userEmail ,
        firstName: userFName,
        lastName: userLName,
        unsubscribed: false,
        audienceId: 'a1158080-8c5d-4ca8-9d6c-b3a44f58bde4',
    });

    console.log('---',contact)
    let emailrep =  await resend.emails.send({
        from: "onboarding@resend.dev",
        to: userEmail,
        subject: "Your Free SaaS Pilot Starter Kit Awaits! 🚀",
        // subject: "Welcome to SaaS Pilot Premium! 🚀",                
        // react: FreeLinkEmail({ firstName: "Bu", lastName: "Bu" }),
        react: PaidLinkEmail({ firstName: "Bu", lastName: "Bu" }),        

    });
    console.log('---',emailrep)

    return NextResponse.json({
        message: sendEmail ? "Email sent successfully" : "Sending email failed"
    }, { status: sendEmail ? 200 : 400 })
}