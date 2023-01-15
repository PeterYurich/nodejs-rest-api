const { User } = require('../../models')

const { HttpError, sendEmail } = require('../../helpers')

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
        throw HttpError(404)
    }

    if (user.verify) {
        res.json({ message: "Verification has already been passed"})
        throw HttpError(400, "Verification has already been passed")
    }

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a href="http://localhost:3000/api/users/verify/${user.verificationCode}">Click to verify</a>`
    }

    await sendEmail(verifyEmail)

    res.json({
        message: "Verify email resend"
    })
}

module.exports = { resendVerifyEmail }