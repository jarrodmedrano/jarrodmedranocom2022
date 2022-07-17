import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const response = await sendgrid.send({
      to: "jarrod@jarrodmedrano.com", // Your email where you'll receive emails
      from: "jarrod@jarrodmedrano.com", // your website email address here
      subject: `Contact Submission from ${req.body.email}`,
      html: JSON.stringify({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }),
    });
    console.log("response", response);
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  console.log("res", res);

  return res.status(200).json({ error: "" });
}

export default sendEmail;
