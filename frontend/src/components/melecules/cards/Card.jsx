import { connect } from "react-redux";
import { eliminar_vehiculo, leer_vehiculos } from "../../../services";
import "./css/Card.css";

const Card = ({ vehiculo, idx, setVehiculos, editVehiculo, EDIT }) => {

    const eliminar = async (id) => {
        document.getElementById("spinner-open").click()
        const res = await eliminar_vehiculo(id);
        const getVehiculos = await leer_vehiculos();
        setVehiculos(getVehiculos);
        document.getElementById("spinner-close").click()

    }

    return (
        <div className="card mb-3" key={idx} style={{ "maxWidth": "540px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={vehiculo.imagen ? vehiculo.imagen : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Tesla_Model_S_%28Facelift_ab_04-2016%29_trimmed.jpg/300px-Tesla_Model_S_%28Facelift_ab_04-2016%29_trimmed.jpg"} className="img-fluid rounded-start car-image" alt="..." style={{
                        "margin": "auto",
                        "objectFit": "cover",
                        "width": "100%",
                        "height": "225px"
                    }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title bold text-center">
                            Marca - {vehiculo.marca}
                        </h5>
                        <p className="card-text text-bold">
                            Modelo :{vehiculo.modelo}
                            <br />
                            Color :<span style={{ background: vehiculo.color, color: "white", padding: "2px" }}>{vehiculo.color}</span>
                            <br />
                            Placa : {vehiculo.placa}
                            <br />
                            Fecha :{vehiculo.fecha.toLocaleString()}
                            <br />
                            Precio : {vehiculo.precio}
                        </p>
                        <div>
                            <button className="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { EDIT(); editVehiculo(vehiculo) }}>
                                Editar
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square d-inline" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </button>
                            <button className="btn btn-danger w-50" onClick={() => eliminar(vehiculo._id)}>
                                Eliminar
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square  d-inline" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    marca: state.marca,
    modelo: state.modelo,
    color: state.color,
    img: state.img,
    placa: state.placa,
    observaciones: state.observaciones,
})

const mapDispatchToProps = (dispatch) => ({
    setVehiculos: (lista) => {
        dispatch({ type: "SET_VEHICULOS", payload: lista })
    },
    editVehiculo: (vehiculo) => {
        dispatch({ type: "EDIT_VEHICULO", payload: vehiculo })
    },
    EDIT: () => { dispatch({ type: "EDIT" }) }
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);