const express = require("express");
const app = express();
const mainRutas = require("./routers/main");

app.listen(3000, ()=>{
    console.log("Servidor Funcionando en el puerto 3000");
})

app.use(express.static("public"));

app.use("/", mainRutas);