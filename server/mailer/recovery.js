const nodemailer = require("nodemailer")

async function recovery(mail, code) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'krystal26@ethereal.email', 
      pass: 'G9rnGtfkyDkeG1V5Kq', 
    },
  })

  const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <krystal26@ethereal.email>', 
      to: mail, 
      subject: "KRYSTAL", 
      text: "Код підтвердження: ", 
      html: "<b>" + code + "</b>", 
  })

  console.log("Message sent: %s", info.messageId);
}

module.exports = recovery
