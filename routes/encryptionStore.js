const express = require('express')
const router = express.Router()
const JsonDB = require('node-json-db');
const {encrypt, decrypt} = require("../encryption");
const {db} = require('../db');


router.get('/', async (req, res, next) => {
    const {id, encryption_key} = req.query;
    if (!id) return res.send('No id provided');
    if (!encryption_key) return res.send('No encryption_key provided');
    const key = db.createDomainKey('encryptedData', id)
    try {
        db.find(key, async (err, hash) => {
            if (err) return res.send(err);
            console.log(hash);
            const data = await decrypt(hash, encryption_key);
            console.log(data);
            res.json(data)
        })
    }
    catch (e) {
        res.send(e)
    }

})

router.post('/', async (req, res, next) => {
    const {id, encryption_key, data} = req.body;
    if (!id) return res.send('No id provided');
    if (!encryption_key) return res.send('No encryption_key provided');
    if (!data) return res.send('No data provided');
    const hash = await encrypt(data, encryption_key).catch(res.send);
    const key = db.createDomainKey('encryptedData', id)
    db.insert(key, hash, (err) => {
        if (err) return res.send(err);
        res.json(data)
    })
})

module.exports = router
