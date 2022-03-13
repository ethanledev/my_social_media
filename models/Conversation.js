import mongoose from "mongoose";
import { validateArray } from "../lib/validate";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ConversationSchema = new Schema({
  members: {
    type: [ObjectId],
    ref: "User",
    validate: validateArray("members"),
  },
  messages: {
    type: [ObjectId],
    ref: "Message",
    validate: validateArray("messages"),
  },
  focus: { type: [ObjectId], ref: "User" },
});

export default mongoose.models.Conversation ||
  mongoose.model("Conversation", ConversationSchema);
