const socketIO = require("socket.io");

var data = {
    io : null,
    socket : null
}

function setupSocket(server) {
    data.io = socketIO(server);

    data.io.on("connection", (socket) => {
        
        data.socket = socket;
        

        socket.on("disconnect", () => {
            data.io = null
            data.socket = null
        })
    })
}

function notifyOrderDelivery() {
    data.socket.emit("Order_Delivered", true)
}

module.exports = {
    setupSocket,
    notifyOrderDelivery
}