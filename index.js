import app from './app.js'
import { sequelize } from "./database/database.js"
import { Usuario } from './models/Usuarios.js';
import { Tareas } from './models/Tareas.js';

async function main(){
    try {
       await sequelize.sync({force:true})
        app.listen(4000);
        console.log('El servidor esta corriendo en puerto', 4000);
      } catch (error) {
        console,error('No se puede conectar a la base de datos:', error);
      }
}

main();
