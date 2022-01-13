const passport = require("passport");
const LocalStratey = require("passport-local").Strategy;
const User = require("../database/users/users.model");

//called during login/signup
passport.use("local", new LocalStratey(User.authenticate()));

//called while after logging in / signing up to set user details in req.user
passport.serializeUser(User.serializeUser());
