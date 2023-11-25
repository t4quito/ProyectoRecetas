const express = require("express");
const app = express();
const userModel = require("../model/user");
const router = require('../routes/user.routes.js')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('../public'))


app.get('/login', async (req, res) => {
    res.sendFile('C:\\Users\\Bryan Uriel\\Documents\\Node\\ProyectoRecetas\\public\\views\\login.html')
    const username = req.body.username
    const password = req.body.password
    const user = await userModel.find({username: username, password: password})
    console.log(username)
    console.log(user)
    if(user){
        res.sendFile('C:\\Users\\Bryan Uriel\\Documents\\Node\\ProyectoRecetas\\public\\views\\principal.html')
        console.log('logeado')
    }   
    
})



app.get('/login/newUser', (req, res) => {
    res.sendFile('C:\\Users\\Bryan Uriel\\Documents\\Node\\ProyectoRecetas\\public\\views\\newUser.html')
})



app.use(router)

app.listen(3000);
console.log("server runring on 3000");