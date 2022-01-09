const userModel = require("./users.model");

exports.fetchUsers = async (req, res) => {
  const users = await userModel.find({});
  res.send(users);
};

exports.fetchUserByUsername = async (username) => {
  const user = await userModel.find({ username });

  return user;
};
