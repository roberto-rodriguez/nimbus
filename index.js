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

if (process.env.NODE_ENV === "production") {
  // Express  will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));
  //Finally-  Express look if the request is for an asset
  // Express will serve up the index.html file
  // if it doesn't recognize the route

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
