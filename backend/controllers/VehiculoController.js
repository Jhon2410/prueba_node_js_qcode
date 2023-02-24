import { procesarVehiculo } from "../helpers/procesarVehiculo.js";
import Vehiculo from "../models/Vehiculo.js";

const leerVehiculos = async (req, res) => {
    const vehiculos = await Vehiculo.find({ estado: true });
    console.log(vehiculos);
    return res.status(200).json(vehiculos);
}

const crearVehiculo = async (req, res) => {
    try {
        req.body.precio = procesarVehiculo(req.body);
        const vehiculo = await Vehiculo.create(req.body);
        res.status(201).json(vehiculo);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

const actualizarVehiculo = async (req, res) => {
    console.log(req.params.id)
    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(vehiculo);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
};

const eliminarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndDelete(req.params.id);
        res.status(200).json(vehiculo);
    } catch (error) {
        console.log(error)
        res.status(500).json(error);
    }
};

export {
    leerVehiculos,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
}