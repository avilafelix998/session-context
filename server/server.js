import morgan from "morgan";
import express from "express";
import cors from "cors";
import { conexion } from "./db/dataBase.js";
import autRoutes from "./routes/auth.routes.js";

const app = express();

// Configuración de CORS para permitir solicitudes desde localhost:5173
const corsOptions = {
  origin: 'http://localhost:5173', // Aquí especificas el origen de tu aplicación Vite
  credentials: true, // Permite el envío de cookies y encabezados de autorización
};

app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));
app.use(autRoutes);
conexion();

// Inicio del servidor en PORT 3000
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto", 3000);
});
