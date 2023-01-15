const multer = require("multer") // multer извлекает файл из указанного поля тела запроса и сохраняет в папку
const path = require("path")

const tempDir = path.join(__dirname, "../", "tmp")

const multerConfig = multer.diskStorage({
    destination: tempDir,
    filename: (req, file, cb) => { // filename - це поле потрібно писати, акщо ми змінюємо ім'я файла. В цьому випадку воно для прикладу і можна було його не писати
        cb(null, file.originalname) // якщо немає помилок, то першим аргументом в цей колбек пердаємо null, а другим ім'я
    }
})

const upload = multer({ 
    storage: multerConfig,
})

module.exports = { upload }