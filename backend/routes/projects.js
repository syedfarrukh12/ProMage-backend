import express from "express";
import { getProjects } from "../controller/projectController";

const router = express.Router();

router.get("/projects/:userId", getProjects);


export default router;