const nodemailer = require("nodemailer")
require("dotenv").config()

const { META_PASSWORD } = process.env

const nodemailerConfig = {
    host: "smtp.meta.ua", //адреса поштового серверу
    port: 465, // 25, 2525 - ці порти вимагають шифрування
    secure: true, // шифрування true. тому що порт 465. він шифрує сам
    auth: {
        user: "petroyurych@meta.ua",
        pass: META_PASSWORD,
    }

}

const transport = nodemailer.createTransport(nodemailerConfig)

const email = {
    to: "peteryurich@gmail.com",
    from: "petroyurych@meta.ua",
    subject: "Theme",
    html: "<p>Lorem ipsum</p>"
}

transport.sendMail(email)
    .then(() => console.log("Email sent"))
    .catch(err => console.log(err.message))