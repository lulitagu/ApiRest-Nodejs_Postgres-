import { Router } from "express";
import{
 
  getUsuario,
  createUsuario,
  updateUsuario,
  getUsuario,
  deleteUsuario,
  getUsuarioTareas,
} from "../controllers/usuario.controller.js";

const router = Router();

// Routes
router.post("/", createUsuario);
router.get("/", getUsuario);
router.put("/:id", updateUsuario);
router.delete("/:id", deleteUsuario);
router.get("/:id", getUsuario);

router.get("/:id/tareas", getUsuarioTareas);

export default router;