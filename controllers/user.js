
const userModel = require("../model/user");


exports.create = async (req, res) => {
    const newuser = await userModel.create({
        username: "Bryan",
        password: "123",
        recipe: [{
            nombre: 'Pizza Express Margherita',
            foto: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
            descripcion: ' Preheat the oven to 230°C' 
        }]
    })
    await newuser.save()
   
}


exports.update = async(req, res) => {
  await userModel.findByIdAndUpdate(req.params.id, req.body)
  res.send('usuario actualizado')
}

exports.deleteOne = async (req,res) => {
    await userModel.deleteOne(req.params.body)
    res.send("usuario eliminado")
} 

