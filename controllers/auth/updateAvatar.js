const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp')

const { User } = require("../../models");

const avatarDir = path.join(__dirname, '../../', "public", "avatars");

const updateAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;

    const avatar = await Jimp.read(tempUpload)
    avatar.resize(250, 250)

    const { _id } = req.user
console.log("avaID", _id)
    const fileName = `${_id}_${originalname}`
    const resultUpload = path.join(avatarDir, fileName);
    await fs.rename(tempUpload, resultUpload)
    const avatarURL = path.join("avatars", fileName)
    await User.findByIdAndUpdate(_id, { avatarURL })

    res.json({
        avatarURL
    })
};

module.exports = { updateAvatar }