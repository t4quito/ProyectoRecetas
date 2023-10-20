const userModel = require("../model/user");

exports.get = async(req, res) => {
    user = await userModel.findById(req.params.id)
    console.log(user)
    res.send('usuario encontrado')
}

exports.getAll = async(req, res) => {
    users = await userModel.find()
    console.log(users)
    res.send('usuarios encontrados')
}

exports.create = async (req, res) => {
    const username = req.params.username
    const password = req.params.password
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