const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send(`
    <div>      
        <h1>Encryption Store</h1> 
        <ul>
            <li><b>POST JSON</b> data to <a href="/api/v1/encryption-store">/api/v1/encryption-store</a> with id, encryption_key and data properties. </li>
            <li>Data can be in any <b>JSON</b> format. </li>
            <li><b>GET</b> <a href="/api/v1/encryption-store?id={your_id}&encryption_key={your_key}">/api/v1/encryption-store?id={your_id}&encryption_key={your_key}</a> will return the data object in <b>JSON</b> format. </li>
        </ul>
    </div>
`))

module.exports = router
