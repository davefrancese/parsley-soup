const express = require("express");
const methodOverride = require("method-override");
const cors = require("cors");
require("./models/Soup");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const mongoose = require("mongoose");
const keys = require("./config/dev");

const app = express();

const PORT = process.env.PORT || 8000;

mongoose.connect(keys.mongoURI);

app.use(bodyParser.json());
app.use(methodOverride("X-HTTP-Method-Override")); //Google/GData
app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days
    keys: [keys.cookieKey]
  })
);

require("./routes/soupRoutes")(app);
require("./routes/auth")(app);

app.listen(PORT, console.log("Server Listening on Port:", PORT));