const express = require('express')
const app = express()
const port = 6000

app.get('/', (req, res) => {
   res.send('respuesta de raiz')
})

app.get('/contacto', (req, res) => {
    res.send('respuesta de contacto de raiz')
 })

app-listen(port, () =>{
console.log('servidor escuchando', port)
})