const { HttpError } = require('../../helpers')
const jwt = require("jsonwebtoken")
const { User } = require('../../models')
const { SECRET_KEY } = process.env

const logout = async (req, res, next) => {
    const { authorization = "" } = req.headers
    const [bearer, token] = authorization.split(" ")

    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        await User.findByIdAndUpdate(
            { _id: id }, { token: null }, { new: true })
    }
    catch { HttpError(401) }

    res.status(204)

}

module.exports = { logout }