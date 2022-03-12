import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const PostSchema = new Schema({
  author: { type: ObjectId, ref: "User", required: true },
  images: {
    ratio: { type: String, required: true },
    list: [{ type: String, required: true }],
  },
  likes: [{ type: ObjectId, ref: "User" }],
  comments: [{ type: ObjectId, ref: "Comment" }],
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
