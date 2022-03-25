import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dbConnect from "../../../lib/mongodb";
import User from "../../../models/User";

dbConnect();

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    try {
      //check if a user exists with the provided email
      const user = await User.findOne({ email });
      //if not, return error
      if (!user) {
        return res.status(400).send("No user exists with that email.");
      }
      //check if provided password matches the one in database
      const passwordsMatch = await bcrypt.compare(password, user.password);
      //if match, generate a token
      if (passwordsMatch) {
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });
        res.status(200).json(token);
      } else {
        res.status(401).send("Password is incorrect");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error log in user. Please try again later.");
    }
  } else {
    res.status(500).send("Route not valid.");
  }
};

export default handler;
