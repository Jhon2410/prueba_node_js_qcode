import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'

import Login from './pages/Login'
import Registrar from './pages/Registrar'
import Crud from './pages/Crud'
import CrudLayout from './layouts/CrudLayout'
import { useEffect } from 'react'
import { validar_session } from './services'


function App() {

  useEffect(() => {
    if (localStorage.getItem('token')) {
      (async () => {
        const res = await validar_session(localStorage.getItem('token'));
        if (!res.data.validate) {
          localStorage.removeItem('token');
          window.location.href = '/';
        }
      })()

    } else {
      if (!localStorage.getItem('token') && window.location.pathname != '/') {
        window.location.href = '/'
      }
    }

  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
        </Route>
        <Route path="/crud" element={<CrudLayout />}>
          <Route index path='' element={<Crud />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
