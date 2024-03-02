import { Router } from "express";
import { createUser, deleteUser, getUser, getUsers, updateUser } from "../controller/userController.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users/:id", deleteUser);


export default router;