const mongoose = require('mongoose');

// Definición del esquema de canciones
const songSchema = new mongoose.Schema({
    name: String,
    artists: [String]
});
const Song = mongoose.model('Song', songSchema);

module.exports = Song;
