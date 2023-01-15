const { Contact } = require("../../models/contactModel")

const add = async (req, res, next) => {

    const { _id: owner } = req.user
    // const owner = req.user._id   // это одно и то же
    const result = await Contact.create({ ...req.body, owner })
    // const result = await Contact.save(req.body)
    res.status(201).json(result)

}

module.exports = add