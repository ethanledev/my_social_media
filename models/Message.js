import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const validateContent = () => [
  (content) => {
    return (
      content.text !== undefined ||
      content.post !== undefined ||
      content.image !== undefined
    );
  },
  "Content must have text, post, or image",
];

const ReplySchema = new Schema({
  _id: false,
  user: { type: ObjectId, ref: "User", required: true },
  message: { type: ObjectId, ref: "Message", required: true },
});

const ContentSchema = new Schema({
  _id: false,
  text: String,
  post: { type: ObjectId, ref: "Post" },
  image: String,
});

const MessageSchema = new Schema({
  author: { type: ObjectId, ref: "User", required: true },
  likes: { type: [ObjectId], ref: "User" },
  isReply: { type: Boolean, required: true },
  replyTo: { type: ReplySchema },
  content: { type: ContentSchema, validate: validateContent() },
});

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
