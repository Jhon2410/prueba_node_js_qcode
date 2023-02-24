import express from "express";
const router = express.Router();
import {
    leerVehiculos,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
} from '../controllers/VehiculoController.js';

router.get('/leer', leerVehiculos);
router.post('/crear', crearVehiculo);
router.put('/actualizar/:id', actualizarVehiculo);
router.delete('/eliminar/:id', eliminarVehiculo);

export default router;