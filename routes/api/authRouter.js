const express = require('express')

const router = express.Router()

const { ctrlWrapper } = require('../../helpers')

const { validateBody, isValidId } = require('../../middlewares')

const { schemas } = require('../../models/userModel')

const ctrl = require('../../controllers/auth')


router.post('/register', validateBody(schemas.registerSchema),
    ctrlWrapper(ctrl.register))

router.post('/login', validateBody(schemas.loginSchema), 
ctrlWrapper(ctrl.login))
    
module.exports = router