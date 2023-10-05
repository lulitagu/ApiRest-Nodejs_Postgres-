import {DataTypes} from 'sequelize'; 
import {sequelize} from '../database/database.js';
import { Tareas } from '../models/Tareas.js';

export const Usuario = sequelize.define('usuarios',{
  
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },{
      timestamp:true

    });

    Usuario.hasMany(Tareas, {
      foreinkey: "usuario_Id",
      sourceKey: "id",
    });
    Tareas.belongsTo(Usuario, { foreinkey: "usuario_Id", targetId: "id" });