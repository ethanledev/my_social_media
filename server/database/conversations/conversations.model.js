const mongoose = require("mongoose");
const { Schema } = mongoose;

const conversationSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
});

module.exports = mongoose.model("Conversation", conversationSchema);
