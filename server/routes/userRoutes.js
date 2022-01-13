const express = require("express");
const router = express.Router();
const User = require("../database/users/users.model");
const passport = require("passport");

const {
  getToken,
  COOKIE_OPTIONS,
  getRefreshToken,
} = require("../authenticate");

router.post("/signup", (req, res, next) => {
  console.log(req.get("host"));
  const { email, username, name, password } = req.body;

  User.register(new User({ email, username, name }), password, (err, user) => {
    if (err) {
      res.statusCode = 500;
      res.send(err);
    } else {
      const token = getToken({ _id: user._id });
      const refreshToken = getRefreshToken({ _id: user._id });
      user.refreshToken.push({ refreshToken });

      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
          res.send({ success: true, token });
        }
      });
    }
  });
});

router.post("/login", passport.authenticate("local"), (req, res, next) => {
  const _id = req.user._id;
  const token = getToken({ _id });
  const refreshToken = getRefreshToken({ _id });
  User.findById(_id).then(
    (user) => {
      user.refreshToken.push({ refreshToken });
      user.save((err, user) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        } else {
          res.cookie("refreshToken", refreshToken, COOKIE_OPTIONS);
          res.send({ success: true, token });
        }
      });
    },
    (err) => next(err)
  );
});

module.exports = router;
