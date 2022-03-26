import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const imagesSchema = new Schema({
  _id: false,
  ratio: { type: String, required: true, enum: ["1/1", "4/5", "16/9"] },
  list: [String],
});

const PostSchema = new Schema({
  author: { type: ObjectId, ref: "User", required: true },
  images: { type: imagesSchema, required: true },
  likes: { type: [ObjectId], ref: "User" },
  comments: { type: [ObjectId], ref: "Comment" },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
