const express = require('express')

const router = express.Router()

const { ctrlWrapper } = require('../../helpers')

const { validateBody, authenticate, upload } = require('../../middlewares')

const { schemas } = require('../../models/userModel')

const ctrl = require('../../controllers/auth')

// const passport = require("../../middlewares")

// router.get("/google", passport.authenticate("google", {
//     scope: ["email", 'profile']
// }))
// router.get("/google/callback", passport.authenticate("google", {session: false}), ctrlWrapper(ctrl.google))

router.post('/signup', validateBody(schemas.registerSchema),
    ctrlWrapper(ctrl.register))

router.get("/verify/:verificationCode", ctrlWrapper(ctrl.verify))

router.post("/verify", validateBody(schemas.emailSchema), ctrlWrapper(ctrl.resendVerifyEmail))

router.post('/login', validateBody(schemas.loginSchema),
    ctrlWrapper(ctrl.login))

router.patch('/logout', authenticate, ctrlWrapper(ctrl.logout))

router.get('/current', authenticate, ctrlWrapper(ctrl.userCheck))

router.patch("/avatars", authenticate,
    upload.single("avatar"),
    // upload.array("avatar", 8) - якщо треба кілька файлів, то avatar - це поле, з якого беремо файли і "8" - це їх максимальна кількість
    // upload.fields([{name: "cover", maxCount: 1}, {name: "avatar", maxCount: 1}]) - якщо треба забрати файли з декількох полів, то в масиві об'єки з назвою полів та макс. кількістю файлів
    ctrlWrapper(ctrl.updateAvatar))

module.exports = router