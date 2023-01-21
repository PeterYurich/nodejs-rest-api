const { Contact } = require("../../models/contactModel")

const getAll = async (req, res, next) => {

  console.log(req.query)
  const { page = 1, limit = 10, favorite } = req.query
  const { _id: CurrentUserId } = req.user
  const skip = (page - 1) * limit

  const query = { owner: CurrentUserId };
  // if (typeof favorite !== "undefined") {
  //   query.favorite = favorite
  // }

  query.favorite = favorite || { $in: [true, false] } 
  // $in: [1, 2, ...] - один из массива. Это такой сложный запрос от Мангуса

  const result = await Contact.find(query, "-createdAt -updatedAt", { skip, limit })
    .populate("owner", "name email")
  // 15 строка - в коллекции user (указано в модели контактов) ищет юзера с айдишником как у 
  // найденых контактов owner и возвращает из него поля второго оргумента, т.е. name и mail
  res.json(result)
}

module.exports = getAll