import  Sequelize  from "sequelize";

export const sequelize = new Sequelize(
'tareas_usuarios',// bd nombre,
'postgres', // username
'admin', // password
 {
    host:"localhost",
    dialect:"postgres",

  }
 );
 