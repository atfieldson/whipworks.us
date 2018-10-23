const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get colors from db
router.get('/', (req, res) => {
    pool.query(
        `SELECT * FROM "handle_designs";`
    ).then((result) => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error getting colors', error);
    })
});

module.exports = router;