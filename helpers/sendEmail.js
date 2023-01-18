const sgMail = require("@sendgrid/mail")
require("dotenv").config()

const { SENDGRID_API_KEY } = process.env

sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmail = async (data) => {
    await sgMail.send({ ...data, from: "petroyurych@meta.ua" })
    return true
}

module.exports = { sendEmail }