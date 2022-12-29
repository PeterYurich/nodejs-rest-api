const { register } = require('./register');
const { login } = require('./login')
const { logout } = require('./logout')
const {userCheck} = require('./userCheck')

module.exports = {
    register, login, logout, userCheck
}