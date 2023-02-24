import { useEffect } from "react";
import { connect } from "react-redux";
import { leer_vehiculos } from "../../../services";
import Card from "../../melecules/cards/Card";

const ListCards = ({ setVehiculos, vehiculos = [] }) => {
    useEffect(() => {
        (async () => {
            const res = await leer_vehiculos();
            setVehiculos(res);
        })()
    }, [])
    const render_vehiculos = vehiculos.map((vehiculo, idx) => {
        return <Card idx={idx} vehiculo={vehiculo}></Card>
    })

    return <div>{render_vehiculos}</div>

}

const mapStateToProps = (state) => ({
    "vehiculos": state.vehiculosfiltrado
})


const mapDispatchToProps = (dispatch) => ({
    setVehiculos: (lista) => {
        dispatch({ type: "SET_VEHICULOS", payload: lista })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListCards)