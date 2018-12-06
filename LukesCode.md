```router.post('/', async (req, res) => {
  try {
    // validate new registrant
    let newRegistrant = registrantValidation(req.body);
    if (req.body.eventId === '2') {
      // create stripe customer
      const stripeCustomer = await stripe.customers.create({
        email: req.body.parentOrGuardianEmail,
        source: req.body.stripeToken,
      });
      // charge credit card with stripe
      const stripeCharge = await stripe.charges.create({
        amount: 9500, // $95 charge
        description: 'Sample Charge',
        currency: 'usd',
        customer: stripeCustomer.id,
      });
      console.log(stripeCharge);
      const stripeChargeId = stripeCharge.id;
      newRegistrant = { ...newRegistrant, stripeChargeId };
    }
    // insert into database
    const { rows } = await pool.query(registrantQueries.insert(newRegistrant));
    try {
      // send confirmation email
      await emailTransporter.sendMail(registrationConfirmationEmail(rows[0]));
    } catch (error) {
      console.log('error sending email to new registrant', error);
    } finally {
      // do not send error to client even if email failed
      res.sendStatus(201);
    }
  } catch (error) {
    console.log('error adding new registrant', error);
    if (error instanceof InvalidFieldError) {
      res.status(400).send(error.message);
    } else {
      res.sendStatus(500);
    }
  }
});```
Message Input


Message lukeschlangen 