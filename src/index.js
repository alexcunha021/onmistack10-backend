const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://alexcunha:alexcunha123@cluster0-ngzgs.mongodb.net/onmistack?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(express.json());
app.use(routes);
app.listen(3333);
