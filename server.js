const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const db = require("./models");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
//require('./models/User')

require("./services/passport")

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const keys = require("./config/keys");

const PORT = process.env.PORT || 3001;
const app = express();

require("./services/passport")

app.use(cookieParser());
app.use(bodyParser());
app.use(expressSession({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

authRoutes(app);
userRoutes(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
// }

// Define API routes here
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(keys.mongoURI || "mongodb://localhost/googlebooks", { useNewUrlParser: true }, { useUnifiedTopology: true });

mongoose.connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
