const express = require('express')

const router = express.Router()

const { ctrlWrapper } = require('../../helpers')

const { validateBody, authenticate, upload } = require('../../middlewares')

const { schemas } = require('../../models/userModel')

const ctrl = require('../../controllers/auth')


router.post('/register', validateBody(schemas.registerSchema),
    ctrlWrapper(ctrl.register))

router.post('/login', validateBody(schemas.loginSchema),
    ctrlWrapper(ctrl.login))

router.patch('/logout', authenticate, ctrlWrapper(ctrl.logout))

router.get('/current', authenticate, ctrlWrapper(ctrl.userCheck))

router.patch("/avatars", authenticate,
    upload.single("avatar"), 
    ctrlWrapper(ctrl.updateAvatar))

module.exports = router