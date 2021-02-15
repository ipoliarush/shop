const nodemailer = require("nodemailer")

async function confirm(mail, code) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'robin.olson20@ethereal.email', 
      pass: 'DeD2U7eCygA6YVnVgw', 
    },
  })

  const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <robin.olson20@ethereal.email>', 
      to: mail, 
      subject: "KRYSTAL", 
      text: "Код підтвердження: ", 
      html: "<b>" + code + "</b>", 
  })

  console.log("Message sent: %s", info.messageId);
}

module.exports = confirm
