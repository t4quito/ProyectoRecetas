const mongoose = require('../utils/database') 


//Schema para crear un usuario nuevo
const userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
    recipe: [{
        nombre: {type:String},
        foto: {type:String},
        descripcion: {type:String}
    }]
})

const userModel = mongoose.model('users', userSchema, 'users')

module.exports = userModel