const { User } = require('../../models/userModel')
const { HttpError, sendEmail } = require('../../helpers')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')
const { v4: uuidv4 } = require('uuid');

const register = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const avatarURL = gravatar.url(email)
    const verificationCode = uuidv4()

    const newUser = await User.create({ ...req.body, password: hashedPassword, avatarURL, verificationCode })

    const verifyEmail = {
        to: email,
        subject: "Verify you email",
        html: `<a href="http://localhost:4000/api/users/verify/${verificationCode}">Click to verify email</a>`
    }


    await sendEmail(verifyEmail)

    res.status(200).json({
        user: {
            email: newUser.email,
            // subscription: newUser.subscription,
            verificationCode,
        }
    })
}

module.exports = { register }