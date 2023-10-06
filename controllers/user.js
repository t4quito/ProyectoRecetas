const userRecipes = require('../model/user')
const mongoose = require('../utils/database')


function newUser() {
    try{
        const newuser = new userRecipes({
            username: 'manolo',
            recipe: ['mealexample', 'fotomeal', 'descripcionmeal']
        })
        newuser.save()
        .then(() => console.log('created sucessfully'))
        .catch((err) => console.log(err))
        .finally(() => mongoose.disconnect())
    }catch(err){
        console.log(err)
    }
}

newUser()
