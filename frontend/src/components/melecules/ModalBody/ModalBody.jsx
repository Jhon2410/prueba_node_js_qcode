import { connect } from "react-redux";

const ModalBody = ({ marca, modelo, color, placa, imagen, observaciones, editVehiculo }) => {
    return (
        <form className="modal-body" id="formCrear">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Marca</label>
                <input type="text" name="Marca" className="form-control" value={marca} onChange={(e) => editVehiculo({ marca: e.target.value })} id="exampleFormControlInput1" placeholder="" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Modelo</label>
                <input type="number" name="Modelo" className="form-control" value={modelo} id="exampleFormControlInput1" onChange={(e) => editVehiculo({ modelo: e.target.value })} placeholder="" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Placa</label>
                <input type="text" name="Placa" className="form-control" value={placa} id="exampleFormControlInput1" onChange={(e) => editVehiculo({ placa: e.target.value })} placeholder="" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Color</label>
                <input type="color" name="Color" className="form-control" value={color} id="exampleFormControlInput1" onChange={(e) => editVehiculo({ color: e.target.value })} placeholder="" />
            </div>
            <div class="form-floating">
                <textarea class="form-control" name="Observaciones" value={observaciones} placeholder="Leave a comment here" id="floatingTextarea2" style={{ "height": "100px" }} onChange={(e) => editVehiculo({ observaciones: e.target.value })}></textarea>
                <label for="floatingTextarea2">Observaciones</label>
            </div>
            <div className="container col-md-6">
                <div className="mb-5">
                    <label htmlFor="Image" className="form-label">Imagen</label>
                    <input className="form-control" name="Imagen" type="file" accept="image/*" id="formFile" onChange={() => frame.src = URL.createObjectURL(event.target.files[0])} />
                </div>
                <img id="frame" src={imagen} className="img-fluid mx-auto" width="150px" height="150px" />
            </div>

        </form >
    )
}

const mapStateToProps = (state) => ({
    marca: state.marca,
    modelo: state.modelo,
    color: state.color,
    imagen: state.imagen,
    placa: state.placa,
    observaciones: state.observaciones,
    editar: state.editar

})

const mapDispatchToProps = (dispatch) => ({
    setVehiculos: (lista) => {
        dispatch({ type: "SET_VEHICULOS", payload: lista })
    },
    editVehiculo: (vehiculo) => {
        dispatch({ type: "EDIT_VEHICULO", payload: vehiculo })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalBody);