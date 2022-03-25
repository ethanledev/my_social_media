import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const ConversationSchema = new Schema({
  members: {
    type: [ObjectId],
    ref: "User",
  },
  messages: {
    type: [ObjectId],
    ref: "Message",
  },
  focus: { type: [ObjectId], ref: "User" },
});

export default mongoose.models.Conversation ||
  mongoose.model("Conversation", ConversationSchema);
