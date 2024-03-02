import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["started", "notStarted", "completed", "rejected"],
    default: "notStarted",
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Task", taskSchema);