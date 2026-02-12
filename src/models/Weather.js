const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    stationId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    temperature: Number,
    humidity: Number,
    pressure: Number,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', weatherSchema);