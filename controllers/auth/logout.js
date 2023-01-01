const { HttpError } = require('../../helpers')
const { User } = require('../../models')

const logout = async (req, res, next) => {

    const { _id } = req.user
    try {
        await User.findByIdAndUpdate(
            { _id }, { token: null }, { new: true })
    }
    catch { HttpError(401) }

    res.status(204).json({ message: "Logout success" })

}

module.exports = { logout }