import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js';



const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

// Configurar CORS
const whitelist = ['http://localhost:5173'];

const corsOption = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            // puede consultar la API
            callback(null, true);
        } else {
            // No esta permitido
            callback(new Error("Error de Cors"));
        }
    },
};

app.use(cors(corsOption));

// Routing
app.use('/api/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 7500;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
})