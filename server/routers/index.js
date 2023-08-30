import express from "express";
const router = express.Router();
import {
  addNewTodo,
  getAllTodo,
  toggleTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/index.js";

router.post("/add", addNewTodo);
router.get("/get", getAllTodo);
router.get("/toggle/:id", toggleTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);

export default router;
