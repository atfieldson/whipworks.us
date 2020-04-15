const express = require("express");
require("dotenv").config();

const app = express();

const bodyParser = require("body-parser");
const sessionMiddleware = require("./modules/session-middleware");

const passport = require("./strategies/user.strategy");

//Forces all URL's to redirect to https://

// app.get("*", function(req, res, next) {
//   if (req.headers["x-forwarded-proto"] !== "https") {
//     return res.redirect("https://www.whipworks.com" + req.url);
//   } else {
//     return next();
//   }
// });

// Route includes
const userRouter = require("./routes/user.router");
const designRouter = require("./routes/design.router");
const orderRouter = require("./routes/order.router");
const contactRouter = require("./routes/contact.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/design", designRouter);
app.use("/order", orderRouter);
app.use("/contact", contactRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
