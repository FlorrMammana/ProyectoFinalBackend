const express = require('express')
const res = require('express/lib/response')
const http = require('http')
const app = express()
const server1 = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server1)


app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(express.static('./src/public'))
server1.listen(8080, () => {
    console.log(`http://localhost:8080`)
})

app.get('/api/productos/:id?', (req, res) => {
    let ver = data.find(producto => producto.id === id);
    res.json(ver);
  });