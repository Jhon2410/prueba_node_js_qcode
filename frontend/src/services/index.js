import axios from "axios";

const base_url = "http://localhost:7500"

const get_base_url = () => (base_url)

// session

const validar_session = (token) => {
    try {
        const res = axios.post(`${get_base_url()}/api/usuarios/confirmar`, { token })
        return res
    } catch (e) {
        return false
    }
}

// usuario 

const validar_usuario = (email, password) => {
    const res = axios.post(`${get_base_url()}/api/usuarios/login`, { email, password })
    return res
}

const registrar_usuario = ({ nombre, email, password }) => {
    const res = axios.post(`${get_base_url()}/api/usuarios/registrar`, { nombre, email, password })
    return res
}


// crud

const leer_vehiculos = async () => {
    const response = await axios.get(base_url + "/api/vehiculos/leer")
    return response.data
}

const guardar_vehiculo = async (data) => {
    const response = await axios.post(base_url + "/api/vehiculos/crear", data)
    return response

}

const eliminar_vehiculo = async (id) => {
    const response = await axios.delete(base_url + "/api/vehiculos/eliminar/" + id)
    return response.data
}

const editar_vehiculo = async (id, data) => {
    console.log(id, data)
    const response = await axios.put(base_url + "/api/vehiculos/actualizar/" + id, data)
    return response.data
}

// excel

const subir_excel = async (data) => {
    const response = await axios.post(base_url + "/api/excel/subir", data)
    return response.data
}


export {
    get_base_url,
    validar_session,
    validar_usuario,
    leer_vehiculos,
    guardar_vehiculo,
    eliminar_vehiculo,
    editar_vehiculo,
    subir_excel,
    registrar_usuario
}