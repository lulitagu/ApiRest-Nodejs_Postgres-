import express from 'express';
import usuarioRoutes from './routes/usuario.routes.js'

import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import usuarioRoutes from "./routes/usuario.routes.js";
import tareasRoutes from "./routes/tareas.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/usuario", usuarioRoutes);
app.use("/api/tareas", tareasRoutes);

export default app;