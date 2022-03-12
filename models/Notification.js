import mongoose from "mongoose";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const NotificationSchema = new Schema({
  isRead: { type: Boolean, default: false },
  source: [{ type: ObjectId, ref: "User", required: true }],
  receiver: { type: ObjectId, ref: "User", required: true },
  action: { type: String, required: true },
});

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);
