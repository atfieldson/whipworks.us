const express = require('express');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const pool = require('../modules/pool');
const router = express.Router();

const nodemailerPeon = require('../modules/nodemail');

router.post("/placeorder", async (req, res) => {
  //order constants
  const first_name = req.body.order.first_name;
  const last_name = req.body.order.last_name;
  const email = req.body.order.email;
  const shipping_street_address = req.body.order.shipping_street_address;
  const shipping_city = req.body.order.shipping_city;
  const shipping_state = req.body.order.shipping_state;
  const shipping_country = req.body.order.shipping_country;
  const shipping_zip = req.body.order.shipping_zip;
  const phone_number = req.body.order.phone_number;
  const shipping_cost = req.body.order.shipping_cost;
  const order_total = req.body.order.order_total;
  //stripe charge is a promise from first try
  const order_notes = req.body.order.order_notes;

  const queryText = 
  'INSERT INTO "orders" ("first_name", "last_name", "email", "shipping_street_address", "shipping_city", "shipping_state", "shipping_country", "shipping_zip", "phone_number", "shipping_cost", "order_total", "stripe_charge", "order_notes") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING "id";';

  try {
    let response = await stripe.charges.create({
      amount: req.body.stripe.amount,
      currency: "usd",
      description: "An example charge",
      source: req.body.stripe.token
    });
    try {
    //insert address and order pool query here
    let responseID = await pool.query(queryText, [first_name, last_name, email, shipping_street_address, shipping_city, shipping_state, shipping_country, shipping_zip, phone_number, shipping_cost, order_total, response.id, order_notes])
      try {
        req.body.bullwhips.map(bullwhip => {
          //this maps through all of the bullwhip items in the bullwhip array and sends a post request for each
          pool.query(`
            INSERT INTO "bullwhips" ("order_id", "whip_length_id", "handle_length_id", "color1_id", "color2_id", "handle_design_id", "concho_id", "waxed")
            VALUES ( $1, $2, $3, $4, $5, $6, $7, $8);`, [responseID.rows[0].id, bullwhip.item.whipLength.id, bullwhip.item.handleLength.id, bullwhip.item.color1.id, bullwhip.item.color2.id, bullwhip.item.pattern.id, bullwhip.item.concho.id, bullwhip.item.waxed])
        });
        res.sendStatus(200);
        nodemailerPeon.sendEmail(null, "New WhipWorks Order Received",JSON.stringify(req.body, null, 4))
      }
      catch (err){
        console.log('error:', err)
        res.sendStatus(500);
      }
    }
    catch (err) {
    //if db insert doesn't work
    //log on fail here so that I could still fulfill the order
    console.log('error:', err)
        res.sendStatus(500);
    }
  } catch (err) {
    console.log('error:', err)
    res.sendStatus(500);
  }
});

router.get('/shipping', (req, res) => {
  pool.query(
      `SELECT * FROM "shipping_profiles";`
  ).then((result) => {
      res.send(result.rows)
  }).catch(error => {
      console.log('error getting shipping profiles', error);
  })
});

module.exports = router;
