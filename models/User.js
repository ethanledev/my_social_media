import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const followingSchema = new Schema({
  user: { type: ObjectId, ref: "User" },
  notification: { type: ObjectId, ref: "Notification" },
});

const getNotificationSchema = (ref) => {
  return new Schema({
    [ref.toLowercase()]: { type: ObjectId, ref },
    notification: { type: ObjectId, ref: "Notification" },
  });
};

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  displayName: String,
  profileImage: String,
  followers: [{ type: ObjectId, ref: "User" }],
  following: [{ type: followingSchema }],
  bio: String,
  posts: [{ type: ObjectId, ref: "Post" }],
  savedPosts: [{ type: ObjectId, ref: "Post" }],
  conversations: [{ type: ObjectId, ref: "Conversation" }],
  search: [{ type: ObjectId, ref: "User" }],
  postLikes: [{ type: getNotificationSchema("Post") }],
  commentLikes: [{ type: getNotificationSchema("Comment") }],
  comments: [{ type: getNotificationSchema("Post") }],
  messengerNotifications: [{ type: ObjectId, ref: "Conversation" }],
  notifications: [{ type: ObjectId, ref: "Notification" }],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
