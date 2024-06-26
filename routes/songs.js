const express = require('express');
const Song = require('./models/Song');

const router = express.Router();


router.post('/songs', async (req, res, next) => {
    try {
        const { name, artists } = req.body;
        const newSong = new Song({ name, artists });
        await newSong.save();
        res.status(201).json(newSong);
    } catch (error) {
        next(error);
    }
});


router.get('/songs', async (req, res, next) => {
    try {
        const songs = await Song.find();
        res.status(200).json(songs);
    } catch (error) {
        next(error);
    }
});


router.put('/songs/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, artists } = req.body;
        const updatedSong = await Song.findByIdAndUpdate(id, { name, artists }, { new: true });
        res.status(200).json(updatedSong);
    } catch (error) {
        next(error);
    }
});


router.delete('/songs/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        await Song.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

module.exports = router;
