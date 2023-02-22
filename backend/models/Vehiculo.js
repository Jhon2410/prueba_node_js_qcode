import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true

    },
    marca: {
        type: String,
        required: true

    },
    modelo: {
        type: String,
        required: true

    },
    color: {
        type: String,
        required: true
    },
    placa: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario"
    },
    imagen: {
        type: String,
        required: true
    }
});

const Vehiculo = mongoose.model("Vehiculo", vehiculoSchema);

export default Vehiculo;