import Vehiculo from "../models/Vehiculo.js";

const leerVehiculos = () => {
    return Vehiculo.find();
}

const crearVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.create(req.body);
        res.status(201).json(vehiculo);
    } catch (error) {
        res.status(500).json(error);
    }
};

const actualizarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(vehiculo);
    } catch (error) {
        res.status(500).json(error);
    }
};

const eliminarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndDelete(req.params.id);
        res.status(200).json(vehiculo);
    } catch (error) {
        res.status(500).json(error);
    }
};

export {
    leerVehiculos,
    crearVehiculo,
    actualizarVehiculo,
    eliminarVehiculo
}