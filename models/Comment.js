import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const MentionSchema = new Schema({
  _id: false,
  user: { type: ObjectId, ref: "User", required: true },
  notification: { type: ObjectId, required: true },
});

const CommentSchema = new Schema({
  isReply: { type: Boolean, required: true },
  author: { type: ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  likes: { type: [ObjectId], ref: "User" },
  mentions: { type: [MentionSchema] },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
