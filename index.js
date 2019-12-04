const express = require("express");
var session = require("express-session");
const cookieSession = require("cookie-session");
var cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["some_key_here"]
  })
);

app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

require("./server/routes/auth.routes")(app);
require("./server/routes/cards.routes")(app);
require("./server/routes/stripe.routes")(app);

app.listen(5000);
