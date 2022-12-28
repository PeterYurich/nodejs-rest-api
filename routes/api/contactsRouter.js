const express = require('express')

const ctrl = require("../../controllers/contacts/index.js")

const router = express.Router()

const { ctrlWrapper } = require('../../helpers')

const { validateBody, isValidId, authenticate } = require('../../middlewares')

const { schemas } = require('../../models/contactModel')


router.get('/', authenticate, ctrlWrapper(ctrl.getAll))
router.get('/:contactId', authenticate, isValidId, ctrlWrapper(ctrl.getById))
router.post('/', authenticate, validateBody(schemas.addContactSchema),
    ctrlWrapper(ctrl.add))
router.put('/:contactId', authenticate, isValidId,
    validateBody(schemas.addContactSchema),
    ctrlWrapper(ctrl.updateById))
router.patch('/:contactId/favorite', authenticate,
    validateBody(schemas.updateFieldFavoriteSchema),
    ctrlWrapper(ctrl.updateFavorite))
router.delete('/:contactId', authenticate,
    ctrlWrapper(ctrl.deleteById))
router.get('/')
module.exports = router