const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./database/users/users.utils");
const passport = require("passport");
const cookieParser = require("cookie-parser");
// const path = require("path");

if (process.env.NODE_ENV !== "production")
  require("dotenv").config({ path: "../.env" });

require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./authenticate");

const userRouter = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// const whitelist = process.env.WHITELISTED_DOMAINS
//   ? process.env.WHITELISTED_DOMAINS.split(",")
//   : [];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },

//   credentials: true,
// };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(passport.initialize());
app.use("/users", userRouter);

mongoose.connection.once("open", () => {
  console.log("********** MongoDB connection ready! **********");
});

mongoose.connection.on("error", (error) => {
  console.error(error);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  app.listen(port, (error) => {
    if (error) throw error;
    console.log("********** Server running on port " + port + " **********");
  });
}

startServer();

app.get("/fetch/users", async (req, res) => {
  users.fetchUsers(req, res);
});
