const { Schema, model } = require("mongoose")
const Joi = require("joi")

const { handleMongooseError } = require('../helpers');

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

const userSchema = new Schema({
    name: {
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    avatarURL: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false
    },
    verificationCode: {
        type: String,
    },
    token: {
        type: String,
        default: null,
    },

}, { versionKey: false, timestamps: true })

userSchema.post("save", handleMongooseError) //if smth is not unique

const registerSchema = Joi.object({
    name: Joi.string(),
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().pattern(emailRegexp).required(),
    subscription: Joi.string(),
})

const emailSchema = Joi.object({
    email: Joi.string()
})

const schemas = {
    registerSchema,
    loginSchema,
    emailSchema
}

const User = model("user", userSchema)

module.exports = {
    User,
    schemas,
}