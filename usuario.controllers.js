import { Usuario } from "../models/Usuarios.js";
import { Tareas } from "../models/Tareas.js";

export async function getUsuario(req, res) {
  try {
    const usuarios = await Usuario.findAll({
      atributes: ["id", "nombre", "correo", "contraseña", "estado"],
    });
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export async function createUsuario(req, res) {
  const { nombre, correo, contraseña, estado, deliveryDate } = req.body;
  try {
    let newUsuario = await Usuario.create(
      {
        nombre,
        correo,
        contraseña,
        estado,
        deliveryDate: new Date(deliveryDate).getTime(),
      },
      {
        fields: ["nombre", "correo", "contraseña", "estado"],
      }
    );
    return res.json(newUsuario);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findOne({
      where: {
        id,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, correo, contraseña, estado } = req.body;

    const usuario = await Usuario.findByPk(id);
    usuario.nombre = nombre;
    usuario.correo = correo;
    usuario.contraseña = contraseña;
    usuario.estado = estado;
    await usuario.save();

    res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    await Task.destroy({
      where: {
        usuario_Id: id,
      },
    });
    await Usuario.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getUsuarioTareas(req, res) {
  const { id } = req.params;
  try {
    const tareas = await Tarea.findAll({
      attributes: ["id", "usuario_Id", "nombre", "estado"],
      where: { usuario_Id: id },
    });
    res.json(tareas);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}