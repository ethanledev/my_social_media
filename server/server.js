const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const users = require("./database/users/users.utils");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Account = require("./database/accounts/accounts.model");
// const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const MONGO_URL =
  "mongodb+srv://hieuhmle:240294hieu@portfoliocluster.cbuy9.mongodb.net/myInstagram?retryWrites=true&w=majority";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
// passport config
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

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

app.post("/signup", (req, res) => {
  const { email, username, name, password } = req.body;
  Account.register(
    new Account({ username: email }),
    password,
    async (error, account) => {
      if (error) {
        console.error(error);
      }

      const newUser = await users.createUser(
        account._id,
        email,
        username,
        name
      );

      res.send(newUser);
    }
  );
});
