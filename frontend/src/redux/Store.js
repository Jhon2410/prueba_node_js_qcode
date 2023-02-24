import { createStore } from "redux"
const editState = {
    marca: "",
    modelo: "",
    color: "",
    placa: "",
    imagen: "",
    observaciones: "",
    _id: ""
}
const initialState = {
    vehiculo: {},
    vehiculos: [],
    vehiculosfiltrado: [],
    usuario: {},
    token: null,
    filtro: "",
    ...editState,
    editar: false
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "cambiarVehiculo": return { ...state, vehiculo: action.payload };
        case "SET_VEHICULOS": return { ...state, vehiculos: action.payload, vehiculosfiltrado: action.payload };
        case "cambiarUsuario": return { ...state, usuario: action.payload };
        case "SET_FILTRO": return { ...state, filtro: action.payload, vehiculosfiltrado: state.filtro.trim() != "" || state.filtro.trim().length > 0 ? state.vehiculos.filter(v => v.marca.toLowerCase().includes(state.filtro.toLowerCase())) : state.vehiculos };
        case "BUSCAR": return { ...state, vehiculosfiltrado: state.vehiculos.filter(v => v.marca.includes(state.filtro)) };
        case "EDIT_VEHICULO": return { ...state, ...action.payload };
        case "EDIT": return { ...state, editar: true };
        case "reset": return { ...state, ...initialState };
        case "NEW_VEHICULO": return { ...state, ...editState, editar: false };
        case "cambiarToken": return { ...state, token: JSON.parse(localStorage.getItem("token")) || [] };
        default: return state;
    }
}

export default createStore(reducer)