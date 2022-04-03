const express = require('express')

const app = express()

const server = app.listen(8081, () => {
    console.log(`http://localhost:8081`)
})