const mongoose = require("mongoose");
const { Schema } = mongoose;

const conversationSchema = new Schema({
  to: { type: Schema.Types.ObjectId, refer: "User" },
  id: { type: Schema.Types.ObjectId, refer: "Conversation" },
});

const userSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    ref: "Post",
  },
  friends: [{ type: Schema.Types.Object, ref: "User" }],
  conversations: [{ type: conversationSchema }],
});

module.exports = mongoose.model("User", userSchema);
