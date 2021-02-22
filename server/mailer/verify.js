const 
  nodemailer = require("nodemailer")

async function verify(email, token) {
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
      from: '"Fred Foo 👻" <robin.olson20@ethereal.email>', 
      to: email, 
      subject: "KRYSTAL", 
      text: "Підтвердження реєстрації", 
      html: `Підтвердження реєстрації: <a href='http://localhost:3030/users/${token}'>Підтвердити ел. пошту</a>`, 
  })
}

module.exports = verify
