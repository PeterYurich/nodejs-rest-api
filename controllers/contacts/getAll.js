const { Contact } = require("../../models/contactModel")

const getAll = async (req, res, next) => {

  console.log(req.query)
  const { page = 1, limit = 2 } = req.query
  const { _id: owner } = req.user
  const skip = (page - 1) * limit
  const result = await Contact.find({ owner }, "-createdAt -updatedAt", {skip, limit})
          .populate("owner", "id email")
  res.json(result)
}

module.exports = getAll