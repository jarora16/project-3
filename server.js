const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('./models/user')

require("./services/passport")

const authRoutes = require('./routes/authRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

authRoutes(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true }, { useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
