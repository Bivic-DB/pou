
// Comexiones con express y base de datos.
const express = require('express');
const app = express();
const connection = require('./database');
const bodyParser = require('body-parser');

// Paquete para encriptación de contraseñas
const bcrypt = require('bcrypt');
const { response } = require('express');
const saltRounds = 10

app.use(express.json());
// liberia que permite conectar la api
var cors = require('cors')

app.use(cors()) //

app.get('/status', (req, res) => res.send('Working!'));

// Métodos para CRUD de Usuarios
// Registro de Usuarios
app.post('/Registro', (req, res) => {
    // Crear variables y pedirlas del frontend
    const Name = req.body.Name
    const LastName = req.body.LastName
    const SecLastName = req.body.SecLastName
    const Email = req.body.Email
    const Password = req.body.Password
    const Rol = req.body.Rol

    // encriptación de contraseña
    bcrypt.hash(Password, saltRounds, (err, hash) => {

        if(err){
            console.log(err)
        }

        // Conexión a base de datos para insertar un nuevo usuario
        connection.query('INSERT INTO persona (CORREO, NOMBRE, APELLIDO, APELLIDODOS, CONTRASENA, ROL) VALUES (?, ?, ?, ?, ?, ?)',
            [Email, Name, LastName, SecLastName, hash, Rol], (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.send("¡Completado!")
                }
            }
        );
    });
})

// Mostrar los usuarios
app.get('/ListaUsuarios', (req, res) => {

    connection.query('SELECT * FROM persona', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});

// Modificar usuarios
app.get('/UsuarioModificar', (req, res) => {

    const Password = req.body.Password
    const Email = req.body.Email

    connection.query('SELECT * FROM persona WHERE CORREO = ?',
        [Email], (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send("Seleccionado")
            }
        }
    );
});

app.put('/ModificarUsuario', (req, res) => {
    const id = req.body.id
    connection.query("UPDATE persona SET")
})

// Eliminar usuarios
app.delete('/UsuariosEliminar/:id', (req,res) =>{

    const id = req.params.id;
    
    connection.query("DELETE FROM persona WHERE CORREO = ?", id, (err, result) =>{
        if(err){
            console.log(err);
        } else{
            res.send(result);
        }
    });

})

// Login de Usuario
app.post('/Login', (req, res) => {

    const Password = req.body.Password
    const Email = req.body.Email

    connection.query(
        "SELECT * FROM persona WHERE CORREO=?",
        Email,
        (err, result) => {

            if (err) {
                res.send({ err: err })
            }

            if (result.length > 0) {
                console.log(result[0])
            bcrypt.compare(Password, result[0].CONTRASENA, (err,response) =>{
                if(response){
                    res.send(result);
                }
                else {
                res.send({ message: "Correo o contraseña incorrectos." })
                }
            });
            } else{
                res.send({message: "Usuario inexistente"})
            }
        }
    )

})


// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3001);
app.listen(3001);