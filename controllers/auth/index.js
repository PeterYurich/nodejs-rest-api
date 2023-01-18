const { register } = require('./register');
const { login } = require('./login')
const { logout } = require('./logout')
const { userCheck } = require('./userCheck')
const { updateAvatar } = require('./updateAvatar')
const { verify } = require('./verify')
const { resendVerifyEmail } = require('./resendVerifyEmail')

module.exports = {
    register,
    login,
    logout,
    userCheck,
    updateAvatar,
    verify,
    resendVerifyEmail,
}