const nodemailer = require("nodemailer");

export async function POST(request) {
  const username = process.env.NEXT_PUBLIC_USERNAME;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_MYEMAIL;

  const res = await request.json();
  const name = res.name;
  const email = res.email;
  const mobileNumber = res.mobileNumber;
  const inquiryType = res.inquiryType;
  const message = res.message;

  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587, // You can try other ports if 587 doesn't work
    secure: false, // true for 465, false for other ports
    auth: {
      user: username,
      pass: password
    }
  });

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: username,
  //     pass: password
  //   }
  // });

  try {
    const mail = await transporter.sendMail({
      from: myEmail,
      to: myEmail,
      subject: ` ${inquiryType}`,
      html: `
        <p>Name: ${name} </p>
        <p>Email: ${email} </p>
        <p>Mobile Number: ${mobileNumber} </p>
        <p>Inquiry Type: ${inquiryType} </p>
        <p>Message: ${message} </p>
        `
    });

    return Response.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    Response.json({ status: 500, message: "COULD NOT SEND MESSAGE" });
  }
}
