const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

// Base de datos
dbConnection();

// Directorio publico
app.use(express.static('public'));

// console.log(process.env);

// user mongo DB = mean_user
// pass mongo DB = 9JxjFV5RqyDkqmjt

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/hospitales', require('./routes/hospitales'));
app.use('/api/medicos', require('./routes/medicos'));
app.use('/api/todo', require('./routes/busquedas'));
app.use('/api/login', require('./routes/auth'));
app.use('/api/upload', require('./routes/uploads'));

// Lo ultimo
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.htnl'));
});

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});