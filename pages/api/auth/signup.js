import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

import dbConnect from "../../../lib/mongodb";
import Notification from "../../../models/Notification";
import User from "../../../models/User";

dbConnect();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password, username } = req.body;
    const { isEmail, isLength } = validator;
    let newUser = undefined;
    let newNoti = undefined;
    try {
      //validate name, email, password
      if (!isLength(username, { min: 3, max: 15 })) {
        return res.status(422).send("Username must be 3-15 characters long.");
      } else if (!isLength(password, { min: 6 })) {
        return res.status(422).send("Password must be at least 6 characters.");
      } else if (!isEmail(email)) {
        return res.status(422).send("Email must be valid.");
      }
      //check to see if email already exists
      const userByEmail = await User.findOne({ email });
      if (userByEmail) {
        return res.status(422).send("A user with this email already exists.");
      }
      //check to see if username already exists
      const userByUsername = await User.findOne({ username });
      if (userByUsername) {
        return res
          .status(422)
          .send("This username is not available. Please try another.");
      }
      //if not, hash their password
      const hash = await bcrypt.hash(password, 12);
      //create user
      newUser = await new User({
        email,
        username,
        password: hash,
      });
      await newUser.validate();
      //create follow notification for user
      newNoti = await new Notification({
        for: newUser._id,
        forModel: "User",
        notifier: newUser._id,
        action: "follow",
      });
      await newNoti.validate();
      await newUser.save();
      await newNoti.save();
      //create token for new user
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      //send back token
      res.status(201).json(token);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error sign up user. Please try again later.");
    }
  } else {
    res.status(500).send("Route not valid.");
  }
};

export default handler;
