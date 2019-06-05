const app  = require('express')()
const http = require('http').createServer(app)
const io   = require('socket.io')(http)

// switcher router em /.
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html')
})

// cada conecção recebe novo ID.
io.on('connection', (socket)=> {
    console.log('Nova conecção', socket.id +'.');
    socket.on('msg', (msg) => {
       console.log(msg)
       // envia msg para todos os clientes.
       socket.broadcast.emit('msg', msg)
       // adicionando usuario a um grupo.
       socket.join('grupoDev')
    })
})

// envia mensagem para grupoDev, Intervalo 
let counter   = 0
let intervalo = 1000
setInterval(() => {
    //io.to('grupoDev').emit('msg', counter++)
}, intervalo)

// sobe um servidor na porta 3000
http.listen(3000, function() {
    console.log('Ouvindo a porta 3000')
})