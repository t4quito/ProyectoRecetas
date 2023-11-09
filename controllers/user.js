const userModel = require("../model/user");

exports.get = async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user =await userModel.find({username: username, password: password})
    if(user){
        console.log('logeado')
    }
}

exports.create = async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const user = new userModel({
        username: username,
        password: password
    })
    await user.save()
    res.send('usuario creado')
}


exports.update = async(req, res) => {
  await userModel.findByIdAndUpdate(req.params.id, req.body)
  res.send('usuario actualizado')
}

exports.delete = async (req,res) => {
    await userModel.deleteOne(req.params.body)
    res.send("usuario eliminado")
} 
