const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/top-tracks', async (req, res, next) => {
    try {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
                'Authorization': 'Bearer BQCsBZva4DCUHUjc6bnKSsnQvYfjk_4Lkx8fZqOP05QrYL60lYEZ5Z580lw1C3yi25jEy4EZc79vlTwc2JI5HXjHVGlyoyAhTF3KyZuCF2kR-Wd1lCxanZVwLnGu_8RdfXmQlUWv6HlhYOuiwwD_7fE87U_YT3vx0g3guaXB3sM30O5FLIwgkvZCVXmuogs20OfNoNMLLx3_mHMRE_ZXMyMuPf3l5kU-MeLVsRGMJMjuwsag0aHSVif0C3vGX0UVtfnkW23i1mA',
                'Content-Type': 'application/json'
            }
        });
        const tracks = response.data.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name)
        }));
        res.status(200).json(tracks);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
