import { Tareas } from "../models/Tareas.js";

export async function createTareas(req, res) {
  try {
    const { nombre, estado, usuario_Id } = req.body;
    const newTareas = await Tareas.create({
      usuario_Id,
      nombre,
      estado,
    });
    res.json(newTareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTareas(req, res) {
  try {
    const tareas = await Tareas.findAll({
      attributes: ["id", "usuario_Id", "nombre", "estado"],
      order: [["id", "DESC"]],
    });
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateTareas(req, res) {
  const { id } = req.params;
 
  try {
    // const updatedTareas = await Tareas.update(
    //   

    const tarea = await Tareas.findOne({
      attributes: ["nombre", "usuario_Id", "estado", "id"],
      where: { id },
    });

    tareas.set(req.body);

    await tareas.save();

    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteTareas(req, res) {
  const { id } = req.params;
  try {
    await Tareas.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getTareas(req, res) {
  const { id } = req.params;
  try {
    const tareas = await Tareas.findOne({
      where: { id },
      attributes: ["id", "usuario_Id", "nombre", "estado"],
    });
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}