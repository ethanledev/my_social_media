import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ReplySchema = new Schema({
  user: { type: ObjectId, ref: "User", required: true },
  message: { type: ObjectId, ref: "Message", required: true },
});

const ContentSchema = new Schema({
  text: String,
  post: { type: ObjectId, ref: "Post" },
  image: String,
});

const MessageSchema = new Schema({
  author: { type: ObjectId, ref: "User", required: true },
  likes: [{ type: ObjectId, ref: "User" }],
  isReply: { type: Boolean, required: true },
  replyTo: { type: ReplySchema },
  type: { type: String, required: true },
  content: { type: ContentSchema },
});

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
