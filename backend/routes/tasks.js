import express from "express";
import { createTask, deleteTask, getTasks, updateTask } from "../controller/taskController.js";

const router = express.Router();

router.get("/tasks/:project_id", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:task_id", updateTask);
router.delete("/tasks/:task_id", deleteTask);

export default router;