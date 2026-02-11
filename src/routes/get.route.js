const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');
const auth = require('../middleware/auth');

router.get('/data', auth, async (req, res) => {
    const data = await Weather.find().populate('stationId', 'stationName');
    res.send(data);
});


router.get('/data/:stationId', auth, async (req, res) => {
    const data = await Weather.find({ stationId: req.params.stationId });
    res.send(data);
});

module.exports = router;