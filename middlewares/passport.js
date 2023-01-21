// const { Strategy } = require("passport-google-oauth2")
// const passport = require("passport")
// const bcrypt = require("bcrypt")

// const { User } = require("../models")

// const GOOGLE_CLIENT = ""
// const GOOGLE_CLIENT_ID = ""
// const { BASE_URL } = process.env

// const googleParams = {
//     clientID: '',
//     passReqCallback: true,

// }

// const googleCallback = async (req, accessToken, refreshToken, profile, done) => {
//     try {
//         const { email, displayName } = profile
//         const user = await User.findOne({email})

//         if(user) {
//             done(null, user)
//         }

//         const password = "asdf321321"
//         const hashedPassword = await bcrypt.hash(passport, 10)
//         const newUser = await User.create({email, name: displayName})
//         done(null, newUser)
//     }
//     catch (error) {
//         done(error)
//     }
// }

// const googleStrategy = new Strategy(googleParams, googleCallback)

// passport.use("google", googleStrategy)

// module.exports = passport