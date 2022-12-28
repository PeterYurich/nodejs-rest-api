const { User } = require('../../models/userModel')
const { HttpError } = require('../../helpers')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET_KEY } = process.env

const login = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
        throw HttpError(401, "Email or password invalid")
    }

    const isParolMatched = await bcrypt.compare(password, user.password)
    if (!isParolMatched) {
        throw HttpError(401, "Email or password invalid")
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" })

    res.json({ token })
}

module.exports = { login }