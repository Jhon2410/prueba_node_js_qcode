import { Link } from 'react-router-dom'
import { validar_usuario } from '../services'
import { validar_campos } from '../utils'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

const Login = ({ setUsuario }) => {
    const validar_usuario_Login = async (e) => {
        e.preventDefault()
        const [email, password] = [document.getElementById('email').value, document.getElementById('password').value]

        if (validar_campos(email, password)) {
            try {
                const res = await validar_usuario(email, password)
                if (res.status === 200) {
                    localStorage.setItem('usuario', JSON.stringify(res.data))
                    localStorage.setItem('nombre', res.data.nombre)
                    setUsuario(res.data)
                    localStorage.setItem('token', res.data.token)
                    window.location.href = "/crud"
                }
            } catch (e) {
                Swal.fire(
                    'Ha ocurrido un error',
                    'Usuario o contraseña incorrectos',
                    'error'
                )


            }
        }
    }

    return (
        <>
            <h1 className="text-sky-600 font-black text-6xl capitalize">Inicia Sesión y Administra tus {''}
                <span className="text-slate-700">Automoviles</span></h1>

            <form className="my-10 bg-white shadow rounded-lg p-10" onSubmit={(e) => validar_usuario_Login(e)}>
                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="email"
                    >Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email de Registro"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        required
                    />
                </div>

                <div className="my-5">
                    <label
                        className="uppercase text-gray-600 block text-xl font-bold"
                        htmlFor="password"
                    >Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Ingresa tu Password"
                        className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                        required
                    />
                </div>

                <input
                    type="submit"
                    value="Iniciar Sesion"
                    className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer
                hover:bg-sky-800 transition-colors"
                />
            </form>

            <nav className='lg:flex lg:justify-between'>
                <Link
                    className='block text-center my-5 text-slate-500 uppercase text-sm'
                    to="/registrar"
                >¿No tienen una cuenta? Regístrate</Link>

            </nav>
        </>
    )
}


const mapStateToDispatch = (dispatch) => ({
    setUsuario: (usuario) => dispatch({ type: 'SET_USUARIO', payload: usuario })
})

export default connect(null, mapStateToDispatch)(Login)
