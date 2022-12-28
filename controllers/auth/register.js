const { User } = require('../../models/userModel')
const { HttpError } = require('../../helpers')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (user) {
        throw HttpError(409, "Email in use")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({ ...req.body, password: hashedPassword })

    res.status(200).json({
        name: newUser.name,
        email: newUser.email,
    })
}

module.exports = { register }