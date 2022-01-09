const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  imageList: [{ type: String }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", required: true }],
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
