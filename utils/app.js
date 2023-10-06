const cors = require('cors')
const express = require('express')

const app = express()
app.use(cors())

const consumirApi = async () => {
    const api = await fetch('api.json')
    const data = await api.json()
    console.log(data)
}

consumirApi()