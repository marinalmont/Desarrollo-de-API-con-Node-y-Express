const express = require('express');
const conexionBD = require('./database');
const errorHandler = require('./middleware/errorHandler');
const topTracksRouter = require('./routes/topTracks');
const songsRouter = require('./routes/songs');

const app = express();
const port = 3000;

// Conexión a la base de datos
conexionBD();

// Middleware para manejar el cuerpo de las solicitudes en formato JSON
app.use(express.json());

// Rutas
app.use(topTracksRouter);
app.use(songsRouter);

// Middleware para manejar errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
