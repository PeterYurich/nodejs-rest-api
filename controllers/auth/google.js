const jwt = require("jsonwebtoken")

const {User} = require("../../models")

const { SECRET_KEY } = process.env

const google = async (req, res) => {
    


    res.redirect(`http://localhost:3000`)
}