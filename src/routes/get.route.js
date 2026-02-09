const express = require('express');
const router = express.Router();
const Weather = require('../models/Weather');

router.get('/data', async (req, res) => {
    const data = await Weather.find().populate('stationId', 'stationName');
    res.send(data);
});

router.get('/data/:stationId', async (req, res) => {
    const data = await Weather.find({ stationId: req.params.stationId });
    res.send(data);
});

module.exports = router;