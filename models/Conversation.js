import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ConversationSchema = new Schema({
  members: [{ type: ObjectId, ref: "User", required: true }],
  messages: [{ type: ObjectId, ref: "Message", required: true }],
  focus: [{ type: ObjectId, ref: "User" }],
});

export default mongoose.models.Conversation ||
  mongoose.model("Conversation", ConversationSchema);
