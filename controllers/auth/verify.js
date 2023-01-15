const { User } = require("../../models")

const { HttpError } = require("../../helpers")

const verify = async (req, res) => {
    const { verificationCode } = req.params
    const user = await User.findOne({ verificationCode })

    if (!user) {
        throw HttpError(404, "User not found")
    }

    if (user.verify) {
        res.json({ message: "Verification has already been passed"})
        throw HttpError(400, "Verification has already been passed")
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verificationCode: null })
    
    res.status(200).json({
        message: "Email verified"
    })
}

module.exports = { verify }