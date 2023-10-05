Este es un  REST API usando tecnologia Javascript and PostgreSQL.
Para esto se utilizo:
nodejs
express
postgreSQL
sequelize
Modeling
Morgan
Se realizo la relacion de uno a varios 

MODELADO DEL PROYECTO

USUARIOS                TAREAS
id: integer             id:integer
nombre: string          nombre:string
correo: string          estado: boolean
contraseña:string       usuario_Id
estado: boolean

ESTRUCTURA DEL PROYECTO

CRUD_TAREAS_SEQUELICE
src
  ├── app.js
  ├── index.js
  ├── gitignore
  ├── index.js
  ├── .env
  ├── models/
  │   ├── usuario.js
  │   └── tarea.js
  ├── controllers/
  │   ├── tareas.controller.js
  │   └── usuario.controller.js
  ├── database/
  │   ├── database.js
  ├── routes/
  │   ├── tareas.routes.js
  │   └── usuario.routes.js
  ├── package.json
  ├── package-lock.json
  └── README.md (documentación)
  6 directorios y 14 archivos
