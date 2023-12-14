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

const sendEmail = async ({ name, email, message }) => {
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

export { sendEmail };
