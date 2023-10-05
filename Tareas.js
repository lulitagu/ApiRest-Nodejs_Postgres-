import {Datatypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Tareas = sequelize.define('tareas',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
       },
}, 
  { 
    timestamp:false,
  }
);
