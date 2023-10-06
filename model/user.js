const mongoose = require('../utils/database') 


//Schema para crear un usuario nuevo
const userSchema = new mongoose.Schema({
    idUser: Number,
    username: String,
    password: String,
    recipe: [{
        nombre: String,
        foto: String,
        descripcion: String
    }]
})

const userModel = mongoose.model('users', userSchema, 'users')

module.exports = userModel