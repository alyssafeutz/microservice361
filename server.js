const http = require('http')
const fs = require('fs')
const port = 8000

const num = (Math.floor(Math.random() * 5).toString());
const meme = `bakingMemes/${num}.jpg`

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
    fs.readFile(meme, function (err, data) {
        if (err) { console.error(err) }
        else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function (err) {
    if (err) { console.error(err) }
    else {
        console.log('Server is listening on port ', port)
    }
})