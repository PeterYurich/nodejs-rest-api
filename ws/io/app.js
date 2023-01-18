const { Server } = require("socket.io")
const { createServer } = require("http")
const { createSocket } = require("dgram")

const httpServer = createServer()

const wsServer = new Server(httpServer, {
    cors: {
        origin: "*"
    }
})

wsServer.on("connetion", (socket) => {
    socket.on("chat-message", message => {
        create.broadcast.emit()
    })
})

httpServer.listen(4000)