const user = require("../model/user")
const mongoose = require('../utils/database')

const NewUser = () => {
    try{
        const newuser = new user({
            idUser: 1,
            username:"Bryan",
            password: "123",
            recipe: [{
                nombre: "taco de asada",
                foto: "foto.com",
                descripcion: "taco con 20gr de asada"
            }]
        })
        newuser.save()
        .then(() => console.log("User created"))
        .catch((err) => console.log(err))
        .finally(() => mongoose.disconnect())
    }catch(err){
        console.log(err)
    }
}


NewUser()