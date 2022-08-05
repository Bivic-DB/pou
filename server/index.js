const express = require("express");
const app = express()
const mysql = require('mysql');

const db = mysql.createPool({
    host: "Local",
    user: "root",
    password: "password",
    database: "base_bivic"
})


app.get("/", (req,res)=>{

    const sqlInsert = "INSERT INTO persona (CORREO,NOMBRE,APELLIDO,2APELLIDO,CONTRASENA,ROL) VALUES ('cedescompay','cedes','don','bosco','1234','administrador');"
    db.query(sqlInsert, (error, result)=> {
        res.send("hello pedro");
    });
});

app.listen(3001, () =>{
    console.log("running on port 3001");
});