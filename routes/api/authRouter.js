const express = require('express')

const router = express.Router()

const { ctrlWrapper } = require('../../helpers')

const { validateBody } = require('../../middlewares')

const { schemas } = require('../../models/userModel')

const ctrl = require('../../controllers/auth')

const { authenticate } = require('../../middlewares')

router.post('/register', validateBody(schemas.registerSchema),
    ctrlWrapper(ctrl.register))

router.post('/login', validateBody(schemas.loginSchema),
    ctrlWrapper(ctrl.login))

router.patch('/logout', ctrlWrapper(ctrl.logout))

router.get('/current', authenticate, ctrl.userCheck)


module.exports = router