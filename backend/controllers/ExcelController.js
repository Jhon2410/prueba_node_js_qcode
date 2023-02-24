import readXlsxFile from 'read-excel-file/node'
import { procesarVehiculo } from '../helpers/procesarVehiculo.js'
import Vehiculo from '../models/Vehiculo.js'
const subirExcel = async (req, res) => {
    const file = req.files.file
    if (file) {
        const rows = await readXlsxFile(req.files.file.data)
        await Vehiculo.updateMany({ existeExcel: false, estado: false })
        for (let i = 2; i < rows.length; i++) {
            const v = await Vehiculo.findOne({ placa: rows[i][0].toUpperCase() })
            if (!v) {
                await Vehiculo.create({
                    placa: rows[i][0].toUpperCase(),
                    modelo: rows[i][1],
                    color: rows[i][2],
                    observaciones: rows[i][3],
                    marca: rows[i][4],
                    fecha: Date.now(),
                    precio: procesarVehiculo({ modelo: rows[i][1], dia: new Date().getDay() }),
                    estado: true,
                    existeExcel: true
                });
            } else {
                await Vehiculo.updateOne({ placa: rows[i][0].toUpperCase() }, {
                    $set: {
                        placa: rows[i][0].toUpperCase(),
                        modelo: rows[i][1],
                        color: rows[i][2],
                        observaciones: rows[i][3],
                        marca: rows[i][4],
                        fecha: Date.now(),
                        precio: procesarVehiculo({ modelo: rows[i][1], dia: new Date().getDay() }),
                        estado: true,
                        existeExcel: true
                    }
                })
            }
        }
        await Vehiculo.updateMany({ existeExcel: false }, { $set: { fecha: Date.now() } })
    }
    res.json({ msg: "subido." })
}

export {
    subirExcel
}