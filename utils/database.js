const mongoose = require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/ProyectoRecetasDB")
.then(() => console.log('Database connected'))
.catch(err => console.log(err))

module.exports = mongoose