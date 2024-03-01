import { Router } from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controller/userController.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUsers);
router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);


export default router;