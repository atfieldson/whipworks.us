const express = require('express');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const pool = require('../modules/pool');

const router = express.Router();

router.post("/placeorder", async (req, res) => {
  try {
    let response = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description: "An example charge",
      source: req.body.token
    });
    res.json(response);
  } catch (err) {
    res.status(500).end();
  }
});

router.post('/address', (req, res, next) => {  
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const shipping_street_address = req.body.shipping_street_address;
    const shipping_city = req.body.shipping_city;
    const shipping_country = req.body.shipping_country;
    const shipping_zip = req.body.shipping_zip;
    const shipping_cost = req.body.shipping_cost;
    const order_total = req.body.order_total;
    const order_notes = req.body.order_notes;

    const queryText = 'INSERT INTO "orders" ("first_name", "last_name", "shipping_street_address", "shipping_city", "shipping_country", "shipping_zip", "shipping_cost", "order_total", "order_notes") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);';
    pool.query(queryText, [first_name, last_name, shipping_street_address, shipping_city, shipping_country, shipping_zip, shipping_cost, order_total, order_notes])
      .then(() => { res.sendStatus(201); })
      .catch((err) => { next(err); });
  });

  
module.exports = router;
