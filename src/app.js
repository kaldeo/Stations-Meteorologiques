const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/meteoDB')
    .then(() => console.log("Connecté à MongoDB"))
    .catch(err => console.error("Erreur de connexion", err));

// Import des routes
app.use('/', require('./routes/post.route'));
app.use('/', require('./routes/get.route'));

const PORT = 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));