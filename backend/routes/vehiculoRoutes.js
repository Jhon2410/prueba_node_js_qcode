import express from "express";
const router = express.Router();
import {
    leerVehiculos,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
} from '../controllers/VehiculoController.js';

router.post('/', leerVehiculos);
router.post('/crear', crearVehiculo);
router.get('/actualizar', actualizarVehiculo);
router.post('/eliminar/:id', eliminarVehiculo);

export default router;