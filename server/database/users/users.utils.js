const userModel = require("./users.model");
const mongoose = require("mongoose");

exports.createUser = async (_id, email, username, name) => {
  const newUser = await new userModel({
    _id,
    email,
    username,
    name,
  }).save();

  return newUser;
};

exports.fetchUsers = async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
};

exports.fetchUserByUsername = async (username) => {
  const user = await userModel.find({ username });

  return user;
};

// exports.userChangeStream = async () => {
//   const db = mongoose.connection;
//   const changeStream = db.collection("users").watch();
//   changeStream.on("change", (next) => {
//     console.log("change");
//     console.log(next);
//   });
// };
