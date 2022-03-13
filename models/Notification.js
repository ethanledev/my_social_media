import mongoose from "mongoose";
import { validateArray } from "../lib/validate";

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const NotificationSchema = new Schema({
  isRead: { type: Boolean, default: false },
  source: { type: [ObjectId], ref: "User", validate: validateArray("source") },
  receiver: { type: ObjectId, ref: "User", required: true },
  action: { type: String, required: true },
});

export default mongoose.models.Notification ||
  mongoose.model("Notification", NotificationSchema);
