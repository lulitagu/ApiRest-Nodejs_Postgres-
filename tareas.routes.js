import { Router } from "express";
import {
  createTareas,
  getTareas,
  updateTareas,
  deleteTareas,
  getTareas,
} from "../controllers/tareas.controller.js";

const router = Router();

// Routes
router.post("/", createTareas);
router.put("/:id", updateTareas);
router.delete("/:id", deleteTareas);
router.get("/", getTareas);
router.get("/:id", getTareas);

export default router;