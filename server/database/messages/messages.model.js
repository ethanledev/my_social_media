const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  replyTo: { type: Schema.Types.ObjectId, ref: "Message" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Message", messageSchema);
