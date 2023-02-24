import { connect } from "react-redux";
import { get_base_url, leer_vehiculos, subir_excel } from "../../../services";

const ModalExcel = ({ setVehiculos }) => {

    const send_excel = async () => {
        document.getElementById("spinner-open").click()
        const formData = new FormData();
        formData.append("file", document.getElementById("file").files[0]);
        const response = await subir_excel(formData);
        const getVehiculos = await leer_vehiculos();
        setVehiculos(getVehiculos);
        document.getElementById("spinner-close").click()
    }


    return (


        <div className="modal fade" id="ModalExcel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Opciones Excel</h1>
                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="file" className="d-none" id="file" accept=".xlsx, .xls, .csv" onChange={() => send_excel()}></input>
                        <div className="row">
                            <button className=" d-none btn btn-success mx-auto text-center  mb-3 readonly" data-bs-toggle="modal" data-bs-target="#ModalExcel"  >
                                <div className="readonly">
                                    Descargar informe <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cloud-plus-fill d-inline" viewBox="0 0 16 16">
                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </div>
                            </button>
                            <div></div>
                            <button className="btn btn-success mx-auto text-center w-50 mb-3" data-bs-toggle="modal" data-bs-target="#ModalExcel" onClick={() => window.open(get_base_url() + "/PlantillaExcel.xlsx")} >
                                <div >
                                    Descargar Plantilla <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-cloud-plus-fill d-inline" viewBox="0 0 16 16">
                                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                                    </svg>
                                </div>
                            </button>

                            <button className="btn btn-success mx-auto text-center w-50 mb-3" data-bs-toggle="modal" data-bs-target="#ModalExcel" onClick={() => document.getElementById("file").click()} >
                                <div >
                                    Subir Excel <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cloud-upload-fill d-inline" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0zm-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    vehiculos: state.vehiculos
})

const mapDispatchToProps = (dispatch) => ({
    setVehiculos: (lista) => { dispatch({ type: "SET_VEHICULOS", payload: lista }) }
})


export default connect(mapStateToProps, mapDispatchToProps)(ModalExcel);