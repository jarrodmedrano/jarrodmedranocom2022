import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: "jarrod@jarrodmedrano.com", // Change to your recipient
  from: "jarrod@jarrodmedrano.com", // Change to your verified sender
  subject: "Contact from jarrodmedrano.com",
  html: `Message from ${email}: ${message}`,
};
sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });

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
              email: "jarrod@jarrodmedrano.com",
            },
          ],
          subject: "Contact from jarrodmedrano.com",
        },
      ],
      from: {
        email: "jarrod@jarrodmedrano.com",
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
