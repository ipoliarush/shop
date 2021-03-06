const 
  nodemailer = require("nodemailer")

async function recovery(email, code) {
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
      user: 'robin.olson20@ethereal.email', 
      pass: 'DeD2U7eCygA6YVnVgw', 
    },
  })

  await transporter.sendMail({
      from: '<ipol@ipol.ua>', 
      to: email, 
      subject: "IPOL", 
      text: "Код підтвердження: ", 
      html: "Код підтвердження: <b>" + code + "</b>", 
  })
}

module.exports = recovery
