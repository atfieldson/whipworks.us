const express = require("express");
const nodemailerPeon = require("../modules/nodemail");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, name, message } = req.body;
    if (!email || !name || !message) {
      res.sendStatus(400);
      return;
    }
    await nodemailerPeon.sendContactEmail(name, email, message);
    res.sendStatus(204);
  } catch (err) {
    console.warn("Unable to send contact form.");
    console.warn(err);
    res.sendStatus(500);
  }
});

module.exports = router;
