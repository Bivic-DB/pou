require('dotenv').config()

const express = require('express');
const app = express();
const connection = require('./database');
const bodyParser = require('body-parser');

const cors = require ("cors");

app.use(express.json());
app.use(cors());


//app.route('/PERSONA/:CORREO')
//  .get(function(req, res, next) {
//    connection.query(
//      "SELECT * FROM `PERSONA` WHERE CORREO=?", req.params.CORREO,
//      function(error, results, fields) {
//        if (error) throw error;
//        res.json(results);
//      }
//    );
//  });

app.post('/Formulario'), (req,res) => {

    const Name = req.body.Name
    const LastName = req.body.LastName
    const SecLastName = req.body.SecLastName
    const Email = req.body.Email
    const Password = req.body.Password
    const Rol = req.body.Rol

    connection.query(
        "INSERT INTO PERSONA (CORREO, NOMBRE, APELLIDO, 2APELLIDO, CONTRASENA, ROL) VALUES (?,?,?,?,?,?)", 
        [Name, LastName, SecLastName, Email, Password, Rol], 
        (err, result) =>{
            console.log(err);
        }
    );
};

app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3001);
app.listen(3001);