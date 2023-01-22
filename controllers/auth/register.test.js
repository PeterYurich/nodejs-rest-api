const mongoose = require('mongoose')
const request = require('supertest') // пакет, що може робити запит
require("dotenv").config

const { User } = require('../../models')

mongoose.set('strictQuery', false)

const app = require('../../app')

const { DB_TEST_HOST, PORT } = process.env

describe("test auth", () => {
    let server
    let _id = null
    let logedUser = null

    beforeAll(() => {
        server = app.listen(PORT)
        mongoose.connect(DB_TEST_HOST);
    })

    afterAll(async () => {
        // await User.findByIdAndDelete(_id);
        mongoose.disconnect();
        server.close()
    }
    )

    // beforeEach(async () => {
    //     mongoose.connect(DB_HOST);
    // });

    // afterEach(async () => {
    //     mongoose.disconnect();
    // });

    test("status-register is correct", async () => {
        const newUser = {
            name: "TestName",
            email: "test@gmail.com",
            password: "321321",
        };

        const resRegister = await request(app).post("/api/users/register").send(newUser)

        expect(resRegister.statusCode).toBe(200)
    })

    test("status-login is correct", async () => {

        const userToLogin = {
            email: "test@gmail.com",
            password: "321321",
        }

        logedUser = await request(app).post("/api/users/login").send(userToLogin)

        expect(logedUser.statusCode).toBe(200)
    })

    test("token returns", async () => {
        expect(logedUser.body.token).toBeTruthy()
    })

    test("expected login-response returns ", async () => {
        const resUser = {
            email: "test@gmail.com",
            subscription: "starter",
        }

        expect(logedUser.body.user).toStrictEqual(resUser)

        const user = await User.findOne({ email: "test@gmail.com" })
        _id = user._id

        await User.findByIdAndDelete(_id);
    })
})