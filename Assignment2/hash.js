// Assignment2/hash.js
// ['md5', 'sha256', 'sha512', 'sha1', 'ripemd160', 'blake2b', 'blake2s']
const crypto= require('crypto');
const password= 'password';
const hash=crypto.createHash('sha256').update('password').digest('hex');
const hash1=crypto.createHash('md5').update('password').digest('hex');
const hash2=crypto.createHash('BLAKE2b512').update('password').digest('hex');
console.log(`The hash of the password "${password}" is: ${hash}`);
console.log(`The hash of the password "${password}" is: ${hash1}`);
console.log(`The hash of the password "${password}" is: ${hash2}`);




//HMAC 
const key='secretkey';
const hmac=crypto.createHmac('sha256',key).update('password').digest('hex');
console.log(`The HMAC of the password "${password}" is: ${hmac}`);