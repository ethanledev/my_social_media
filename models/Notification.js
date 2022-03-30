import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const NotificationSchema = new Schema({
  isRead: { type: Boolean, default: false },
  hidden: { type: Boolean, default: true },
  for: { type: ObjectId, refPath: "forModel", required: true },
  forModel: { type: String, required: true, enum: ["User", "Post", "Comment"] },
  actors: [{ type: ObjectId, ref: "User", required: true }],
  notifier: { type: ObjectId, ref: "User", required: true },
  action: {
    type: String,
    required: true,
    enum: ["like", "comment", "reply", "follow"],
  },
});

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);
