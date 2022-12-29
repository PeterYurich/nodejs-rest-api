const userCheck = async (req, res, next) => {

    const { email, subscription } = req.user
    res.status(201).json({ email, subscription })
}

module.exports = { userCheck }