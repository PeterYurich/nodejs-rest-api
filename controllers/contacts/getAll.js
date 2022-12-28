const { Contact } = require("../../models/contactModel")

const getAll = async (req, res, next) => {
 
  const {_id: owner} = req.user
  const result = await Contact.find({owner})
  
  res.json(result)
}

module.exports = getAll