const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  bio: { type: String, default: "" },
  profilePicture: { type: String, default: "" },
  posts: {
    type: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    ref: "Post",
  },
  conversations: {
    type: [{ type: Schema.Types.ObjectId, ref: "Conversation" }],
    ref: "Conversation",
  },
});

module.exports = mongoose.model("User", userSchema);
