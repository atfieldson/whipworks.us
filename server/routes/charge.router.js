const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// router.post("/", (req, res) => {
//         stripe.charges.create({
//           amount: 2000,
//           currency: "usd",
//           description: "An example charge",
//           source: req.body.token
//         }).then((response) => {
//             res.sendStatus(response)
//         }).catch((error) => {
//             res.sendStatus(error)
//         }) 
// });

router.post("/", async (req, res) => {
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
  

module.exports = router;




