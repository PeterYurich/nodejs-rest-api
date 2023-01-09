const mongoose = require('mongoose')
const request = require('supertest') // пакет, що може робити запит
require("dotenv").config

mongoose.set('strictQuery', false)

const { User } = require('../../models')

const app = require('../../app')

const { DB_TEST_HOST, PORT } = process.env

describe("test register", () => {
    let server
    beforeAll(() => server = app.listen(PORT)) //what's happening?

    afterAll(() => server.close())

    beforeEach(async () => {
        mongoose.connect(process.env.DB_HOST);
    });
    afterEach(async () => {
        mongoose.disconnect();
    });

    /*
    oтвет должен иметь статус-код 200
    в ответе должен возвращаться токен
    в ответе должен возвращаться объект user с 2 полями email и subscription, имеющие тип данных String
    */

    test("test status-code", async () => {
        const newUser = {
            name: "TestName",
            email: "test@gmail.com",
            password: "321321",
        };

        const user = await User.create(newUser);

        const userToLogIn = {
            email: "test@gmail.com",
            password: "321321",
        }

        // await request(app).post("/api/users/register").send(newUser)
        const response = await request(app).post("/api/users/login").send(userToLogIn)

        const resUser = {
            email: "test@gmail.com",
            subscription: "starter",
        }
        expect(response.statusCode).toBe(200)
        expect(response.body.token).toByTruthy()
        expect(response.body.user).toBe(resUser)
    })
})