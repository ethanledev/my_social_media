import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: { type: String, default: "" },
  profileImage: String,
  followers: { type: [ObjectId], ref: "User" },
  following: { type: [ObjectId], ref: "User" },
  bio: { type: String, default: "" },
  savedPosts: { type: [ObjectId], ref: "Post" },
  recentSearches: { type: [ObjectId], ref: "User" },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
