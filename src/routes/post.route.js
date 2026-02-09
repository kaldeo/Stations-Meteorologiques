const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Weather = require('../models/Weather');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: "Utilisateur créé" });
    } catch (e) { res.status(400).send(e); }
});


router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user && user.password === req.body.password) {
        const token = jwt.sign({ id: user._id }, 'VOTRE_CLE_SECRETE');
        res.send({ token });
    } else {
        res.status(401).send("Identifiants incorrects");
    }
});

router.post('/data', auth, async (req, res) => {
    try {
        const data = new Weather({ ...req.body, stationId: req.user.id });
        await data.save();
        res.status(201).send(data);
    } catch (e) { res.status(400).send(e); }
});

module.exports = router;