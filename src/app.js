
const express = require('express');
const morgan = require('morgan');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para registrar solicitudes
app.use(morgan('dev'));

// Importar rutas
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

// Usar rutas
app.use('/products', productsRoutes); //ruta a base de datos
app.use('/users', usersRoutes);

// Exporta la aplicación para que sea utilizada en index.js
module.exports = app;

