
const express = require('express');
const app = express();
const connection = require('./database');
const bodyParser = require('body-parser');
const cors = require("cors");

app.use(express.json());
// liberia que permite conectar la api
app.use(cors());

app.get('/status', (req, res) => res.send('Working!'));

// Registro de Usuarios
app.post('/Registro', (req, res) => {
    const Name = req.body.Name
    const LastName = req.body.LastName
    const SecLastName = req.body.SecLastName
    const Email = req.body.Email
    const Password = req.body.Password
    const Rol = req.body.Rol

    connection.query('INSERT INTO persona (CORREO, NOMBRE, APELLIDO, APELLIDODOS, CONTRASENA, ROL) VALUES (?, ?, ?, ?, ?, ?)',
        [Email, Name, LastName, SecLastName, Password, Rol], (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("Registrado")
            }
        }
    );
});

app.get('/ListaUsuarios', (req, res) => {

    connection.query('SELECT * FROM persona', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

app.get('/UsuarioModificar', (req, res) => {
    
    const Password = req.body.Password
    const Email = req.body.Email

    connection.query('SELECT * FROM persona WHERE CORREO = ?', 
    [Email], (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("Seleccionado")
        }
    }
    );
});

app.put('/ModificarUsuario', (req, res) => {
    const id = req.body.id
    connection.query("UPDATE persona SET")
})

// Login de Usuario
app.post('/Login', (req, res) =>{

    const Password = req.body.Password
    const Email = req.body.Email

    connection.query(
        "SELECT * FROM persona WHERE CORREO=? AND CONTRASENA=?",
        [Email, Password],
        (err, result) => {

            if(err) {
                res.send({err: err})
            }

            if(result.length > 0){
                res.send(result);
            } else{
                res.send({ message: "Correo o contraseña incorrectos."})
            }
        }
    )

})

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3001);
app.listen(3001);