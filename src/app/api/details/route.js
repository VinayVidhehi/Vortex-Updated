const nodemailer = require("nodemailer");

// src/app/api/data/route.js
const SENDER_IDS = {
    ownerId: process.env["SENDER_MAIL_ID"],
    developerId: process.env["DEVELOPER_MAIL_ID"],
};

export async function POST(req) {
    try {
        const body = await req.json();
        await sendEmailToTeam(body);
        await sendEmailToRecepient(body.email);
        return Response.json({
            message: `Received: ${body.name} and mails sent`,
        });
    } catch (error) {
        console.error("Email sending failed:", error);
        return Response.json(
            { error: "Email sending failed", error },
            { status: 500 },
        );
    }
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env["SENDER_MAIL_ID"],
        pass: process.env["SENDER_MAIL_SECRET_KEY"],
    },
});

const mailOptionsToUser = (email) => {
    return {
        from: process.env.SENDER_MAIL_ID,
        to: email,
        subject: "Thank You for Contacting Vortex Media Management",
        text: `Hi,

Thank you for reaching out to us! Our dedicated team will get in touch with you within 24 hours.

If you need any assistance in the meantime, feel free to call us.

Best regards,
Adharsh Rangappa
Vortex Media Management`,
    };
};

//set mail id and otp to send the email to
const mailOptionsToTeam = (details, email) => {
    return {
        from: process.env.SENDER_MAIL_ID,
        to: email,
        subject: "Registration Record for Vortex Media Management",
        text: `Details are as follows: \n name: ${details.name} \n phone: ${details.phone} \n email: ${details.email} \n website: ${details?.website} \n query: ${details?.query}`,
    };
};

// Send email with response
async function sendEmailToTeam(details) {
    try {
        for (let index = 0; index < 2; index++) {
            const recipient =
                index % 2 === 0 ? SENDER_IDS.ownerId : SENDER_IDS.developerId;
            await transporter.sendMail(mailOptionsToTeam(details, recipient));
        }
    } catch (error) {
        console.error("Error sending team email:", error);
        throw new Error("Email to team failed");
    }
}

async function sendEmailToRecepient(email) {
    try {
        await transporter.sendMail(mailOptionsToUser(email));
    } catch (error) {
        console.error("Error sending user email:", error);
        throw new Error("Email to recipient failed");
    }
}
