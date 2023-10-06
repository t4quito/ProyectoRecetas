const mongoose = require('../utils/database') 

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const userModel = mongoose.model('Users', userSchema)

const userRecipesModel = new mongoose.Schema({
    username: String,
    recipe: [String]
})

const userRecipes = new mongoose.model('userRecipes', userRecipesModel)

module.exports = userRecipes 
module.exports = userModel