import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({ name, email, message }) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "info@slashclick.com",
            },
          ],
          subject: "Contact from slashclick.com",
        },
      ],
      from: {
        email: "info@slashclick.com",
        name: name,
      },
      content: [
        {
          type: "text/html",
          value: `Message from ${email}: ${message}`,
        },
      ],
    }),
  });
};

export { sendEmail };
