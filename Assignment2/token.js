//token code
const crypto = require('crypto');
const token = crypto.randomBytes(16).toString('hex'); // Generate a random token
console.log(`Generated token: ${token}`);