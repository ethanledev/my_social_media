import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const CommentSchema = new Schema({
  author: { type: ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  likes: { type: [ObjectId], ref: "User" },
  replyTo: { type: ObjectId, ref: "Comment" },
  replies: { type: [ObjectId], ref: "Comment" },
});

export default mongoose.models.Comment ||
  mongoose.model("Comment", CommentSchema);
