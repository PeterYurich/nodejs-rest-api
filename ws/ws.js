const ws = new require("ws")

const wsServer = new ws.wsServer({ port: 5000 })

const socketList = []

wsServer.on("connection", (socket) => {
    socketList.push(socket)
    // console.log('new front connection')
    setTimeout(() => {
        socket.send("Welcome to server")
    }, 3000)

    socketList.forEach(item => {

    })
})