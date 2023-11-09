const express = require("express");
const app = express();
const router = require('../routes/user.routes.js')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/login', (req, res) => {
    res.sendFile('C:\\Users\\Bryan Uriel\\Documents\\Node\\ProyectoRecetas\\views\\login.html')
})

app.get('/login/newUser', (req, res) => {
    res.sendFile('C:\\Users\\Bryan Uriel\\Documents\\Node\\ProyectoRecetas\\views\\newUser.html')
})


app.use(router)

app.listen(3000);
console.log("server runring on 3000");