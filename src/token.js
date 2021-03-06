const jwt = require('jsonwebtoken');
const config = require('./config');

// Generate an Access Token for the given User ID
function generateAccessToken(userId) {
    const expiresIn = '7d';
    const audience = 'public';
    const issuer = 'issuer';
    const secret = 'secret';

    const token = jwt.sign({}, secret, {
        expiresIn: expiresIn,
        audience: audience,
        issuer: issuer,
        subject: userId.toString()
    });

    return token;
}

module.exports = {
    generateAccessToken: generateAccessToken
}
