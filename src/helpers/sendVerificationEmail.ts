import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
        try {
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: email,
                subject: 'Truly Talk | Verification Code',
                react: VerificationEmail({ username , otp:verifyCode }),
              });
              return {success:true , message:"verification code is send successfully."}
        } catch (emailError) {
            console.error("error Sending Verification on email",emailError)
            return {success:false,message:"failed to send verification email"}
        }
}