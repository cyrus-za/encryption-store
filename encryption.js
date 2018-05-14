'use strict';

// Nodejs encryption with CTR
const Crypto = require('crypto'),
    algorithm = 'aes-256-ctr';

function encrypt(data, key) {
    if (!data) throw new Error('No data provided');
    if (!key) throw new Error('No key provided');
    return new Promise((resolve, reject) => {
        try {
            const cipher = Crypto.createCipher('aes-256-cbc', key);
            resolve(Buffer.concat([cipher.update(new Buffer(JSON.stringify(data), "utf8")), cipher.final()]));
        } catch (exception) {
            reject(exception.message);
        }
    });

}

function decrypt(hash, key) {
    if (!hash) throw new Error('No hash provided');
    if (!key) throw new Error('No key provided');
    return new Promise((resolve, reject) => {
        try {
            const decipher = Crypto.createDecipher("aes-256-cbc", key);
            const decrypted = Buffer.concat([decipher.update(new Buffer(hash)), decipher.final()]);
            resolve(JSON.parse(decrypted.toString()));
        } catch (exception) {
            reject(exception.message);

        }
    })

}

module.exports = {decrypt, encrypt};