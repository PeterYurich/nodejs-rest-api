const { Schema, model } = require("mongoose")
const Joi = require("joi")

const { handleMongooseError } = require('../helpers')

const addContactSchema = Joi.object({
    name: Joi.string().required(),
    phone: Joi.string().required(),
    // email: Joi.string().email(),
    // favorite: Joi.boolean(),
})

const updateFieldFavoriteSchema = Joi.object({
    favorite: Joi.boolean().required()
})

const contactSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        unique: true,
        required: [true, 'Set name for contact'],
    },
    phone: {
        type: String,
    },
    // email: {
    //     type: String,
    //     unique: true,
    // },
    // favorite: {
    //     type: Boolean,
    //     default: false,
    // },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
},
    {
        versionKey: false,
        timestamps: true
    }
)

contactSchema.post("save", handleMongooseError)

contactSchema.requiredPaths()

const Contact = model("contact", contactSchema)

const schemas = {
    addContactSchema,
    updateFieldFavoriteSchema
}

module.exports = {
    Contact, schemas
}