const userCheck = async (req, res, next) => {

    const { name, email, subscription } = req.user
    res.status(201).json({ name, email, subscription })
}

module.exports = { userCheck }