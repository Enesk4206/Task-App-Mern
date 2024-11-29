import express from "express";
import { getAllTask, createNewTask, deleteTask } from "../controllers/router.controller.js";


const router = express.Router();

router.get("/my-tasks", getAllTask);
router.post("/create", createNewTask);
router.delete("/delete/:id", deleteTask);



export default router;