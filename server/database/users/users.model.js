const mongoose = require("mongoose");
const { Schema } = mongoose;
const passportLocalMongoose = require("passport-local-mongoose");

const Session = new Schema({
  refreshToken: {
    type: String,
    default: "",
  },
});

const conversationSchema = new Schema({
  to: { type: Schema.Types.ObjectId, refer: "User" },
  conversationId: { type: Schema.Types.ObjectId, refer: "Conversation" },
});

const userSchema = new Schema({
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
  authStrategy: {
    type: String,
    default: "local",
  },
  refreshToken: {
    type: [Session],
  },
});

// remove refreshToken from the response
userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.refreshToken;
    return ret;
  },
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
});

module.exports = mongoose.model("User", userSchema);
