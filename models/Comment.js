import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const MentionSchema = new Schema({
  user: { type: ObjectId, ref: "User", required: true },
  notification: { type: ObjectId, required: true },
});

const CommentSchema = new Schema({
  author: { type: ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  likes: [{ type: ObjectId, ref: "User" }],
  mentions: [{ type: MentionSchema }],
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
