const SimpleDb = require('simple-node-db');
const options = {
    path: './data',
    readAfterChange: true
};

const db = new SimpleDb(options);

module.exports = {db};