const { User } = require("../../models")

const { HttpError } = require("../../helpers")

const verify = async (req, res) => {
    const { verificationCode } = req.params
    const user = await User.findOne({ verificationCode })

    if (!user || user.verify) {
        throw HttpError(404)
    }

    await User.findByIdAndUpdate(user._id, { verify: true })
    
    res.status(200).json({
        message: "Email verified"
    })
}

module.exports = { verify }