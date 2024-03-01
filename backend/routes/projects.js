import { Router } from "express";
import { createProject, deleteProject, getAllProjects, getProject, getProjects, updateProject } from "../controller/projectController.js";

const router = Router();

router.get("/projects", getAllProjects);
router.get("/projects/:userId", getProjects);
router.get("/projects/:id/:userId", getProject);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;