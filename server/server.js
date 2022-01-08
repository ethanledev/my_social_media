const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URL =
  "mongodb+srv://hieuhmle:240294hieu@portfoliocluster.cbuy9.mongodb.net/myInstagram?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

function startServer() {
  mongoose.connect(MONGO_URL).then(() => {
    app.listen(port, (error) => {
      if (error) throw error;
      console.log("Server running on port" + port);
    });
  });
}

startServer();
