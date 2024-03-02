import nodemailer from 'nodemailer'

export async function sendEmail(message, user) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'syedfarrukh228185@gmail.com',
      pass: 'teeb vzdw hreb limi',
    },
  });

  const mailOptions = {
    from: 'syedfarrukh228185@gmail.com',
    to: user.email,
    subject: message.subject,
    text: message.text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
