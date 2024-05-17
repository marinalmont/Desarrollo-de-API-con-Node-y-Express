const express = require('express');
const conexionBD = require('./database');
const errorHandler = require('./middleware/errorHandler');
const topTracksRouter = require('./routes/topTracks');
const songsRouter = require('./routes/songs');

const app = express();
const port = 3000;

conexionBD();

app.use(express.json());

app.use(errorHandler);

app.use(topTracksRouter);
app.use(songsRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
