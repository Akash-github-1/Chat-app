import { resendClient, sender } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "../email/emailTemplate.js"

export const sendWelcomeEmail =async (email , name , clientURL) => {
    const {data, error}= await resendClient.emails.send({
        from: `${sender.name} <${sender.email}>`,
        to:email,
        subject:"Welcome to Chatfiy!",
        html: createWelcomeEmailTemplate(name,clientURL)
    });

    if(error){
        console.error("Error sending welome email:",error);
        throw new Error("Failed to send welcome Email");
    }

    console.log("Welcome Email send successfully",data);
};