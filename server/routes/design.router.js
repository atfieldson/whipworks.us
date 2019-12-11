const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get colors from db
router.get('/color', (req, res) => {
    pool.query(
        `SELECT * FROM "colors" ORDER BY color;`
    ).then((result) => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error getting colors', error);
    })
});

router.get('/design', (req, res) => {
    pool.query(
        `SELECT * FROM "handle_designs";`
    ).then((result) => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error getting handle designs', error);
    })
});

router.get('/whiplength', (req, res) => {
    pool.query(
        `SELECT * FROM "whip_lengths" ORDER BY length;`
    ).then((result) => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error getting whip lengths', error);
    })
});

router.get('/handlelength', (req, res) => {
    pool.query(
        `SELECT * FROM "handle_lengths";`
    ).then((result) => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error getting handle lengths', error);
    })
});

router.get('/concho', (req, res) => {
    pool.query(
        `SELECT * FROM "conchos_and_pommels";`
    ).then((result) => {
        res.send(result.rows)
    }).catch(error => {
        console.log('error getting handle lengths', error);
    })
});

module.exports = router;
