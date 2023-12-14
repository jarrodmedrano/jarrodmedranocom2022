import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const msg = {
    to: "jarrod@jarrodmedrano.com", // Change to your recipient
    from: "jarrod@jarrodmedrano.com", // Change to your verified sender
    subject: "Contact from jarrodmedrano.com",
    html: `Message from ${req.body.email}: ${req.body.message}`,
  };

  try {
    const sended = await sgMail.send(msg);
    console.log("sended: ", sended);
    res.status(200).json({ message: "Hello from Next.js!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error" });
  }
}
