const express = require("express");
const app = express();
const router = require('../routes/user.routes.js')

app.use(express.json())

app.use(router)

app.listen(3000);
console.log("server runring on 3000");
