const express = require('express')
const app = express()



app.get('/', (req, res) => {
    res.send('<h1>Welcome to express</h1>')
})

app.get('/contact', (req, res) => {
    res.send('<h1>Cntact us</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>About us</h1>')
})



app.listen(8200, () => {
    console.log("Server Connected");
})