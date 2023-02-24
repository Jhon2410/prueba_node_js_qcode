import { connect } from 'react-redux';
import { editar_vehiculo, guardar_vehiculo, leer_vehiculos } from "../../../services";
import { encode_File_As_Base64URL } from "../../../utils/index"

const ModalFooter = ({ setVehiculos, editar, _id }) => {
    const crear_vehiculo = async () => {
        document.getElementById("btnCerrarModal").click();
        document.getElementById("spinner-open").click()
        try {
            const vehiculo = {
                marca: document.getElementsByName("Marca")[0].value,
                modelo: document.getElementsByName("Modelo")[0].value,
                placa: document.getElementsByName("Placa")[0].value,
                color: document.getElementsByName("Color")[0].value,
                observaciones: document.getElementsByName("Observaciones")[0].value,
                imagen: editar && !document.getElementsByName("Imagen")[0].files[0] ? document.getElementById('frame').src : await encode_File_As_Base64URL(document.getElementsByName("Imagen")[0].files[0]),
                fecha: new Date(),
                dia: new Date().getDay()
            }
            const res = editar ? await editar_vehiculo(_id, { ...vehiculo, _id }) : await guardar_vehiculo(vehiculo)
            const getVehiculos = await leer_vehiculos();
            setVehiculos(getVehiculos);
            document.getElementById("spinner-close").click()
        } catch (e) {
            console.log(e)
        }
        document.getElementById("spinner-close").click()
    }
    return (
        <div className="modal-footer">
            <button id="btnCerrarModal" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button className="btn btn-primary" onClick={() => crear_vehiculo()}>Guardar</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    editar: state.editar,
    _id: state._id
})

const mapDispatchToProps = (dispatch) => ({
    setVehiculos: (lista) => {
        dispatch({ type: "SET_VEHICULOS", payload: lista })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalFooter)