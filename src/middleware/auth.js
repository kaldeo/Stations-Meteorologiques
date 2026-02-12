const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
        return res.status(401).send({ message: 'Token manquant' });
    }

    try {
        const decoded = jwt.verify(token, 'VOTRE_CLE_SECRETE');
        req.user = decoded;
        return next();
    } catch (e) {
        return res.status(401).send({ message: 'Token invalide' });
    }
};

module.exports = auth;
