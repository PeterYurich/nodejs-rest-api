const ws = new require("ws")

const wsServer = new ws.Server({ port: 5000 })
console.log('qweqwe')
const socketList = []

wsServer.on("connection", (socket) => {
    socketList.push(socket)
    // console.log('new front connected')
    setTimeout(() => {
        socket.send("Welcome to server")
    }, 3000)

    socketList.forEach(item => {

    })
})