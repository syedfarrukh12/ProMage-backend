import { Schema, model } from "mongoose";

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    manager: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    isRunning: {type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now() },
});

const Project = model("Project", projectSchema);
export default Project;