const crypto=require('crypto');
const algorithms='aes-256-cbc';
const key=crypto.randomBytes(32); // 256 bits
const iv=crypto.randomBytes(16); // 128 bits
const cipher=crypto.createCipheriv(algorithms,key,iv);
const text='Hello, World!';
let encrypted=cipher.update(text,'utf8','hex');
encrypted+=cipher.final('hex');
console.log(`Encrypted text: ${encrypted}`);


//decrypt code
const decipher=crypto.createDecipheriv(algorithms,key,iv);
let decrypted=decipher.update(encrypted,'hex','utf8');
decrypted+=decipher.final('utf8');
console.log(`Decrypted text: ${decrypted}`);
