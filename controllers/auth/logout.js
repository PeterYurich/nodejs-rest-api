const { HttpError } = require('../../helpers')
const jwt = require("jsonwebtoken")
const { User } = require('../../models')
const { SECRET_KEY } = process.env

const logout = async (req, res, next) => {
    const { authorization } = req.headers
    const [bearer, token] = authorization.split(" ")

    if (bearer !== "Bearer") {
        next(HttpError(401))
    }

    try {
        const { id } = jwt.verify(token, SECRET_KEY)
        console.log('asdf')
        const logedOutUser = await User.findByIdAndUpdate(
            { _id: id }, { token: null }, { new: true })
        console.log(logedOutUser)
    }
    catch { HttpError(401) }

    res.status(204)

}

module.exports = { logout }