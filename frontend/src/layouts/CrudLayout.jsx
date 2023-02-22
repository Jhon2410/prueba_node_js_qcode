import { Outlet } from 'react-router-dom'

const CrudLayout = () => {
    return (
        <div>
            <h1 className='text-center  text-sky-600 font-black text-6xl capitalize'>Vehiculos <span className="text-slate-700">CRUD</span></h1>
            <main className='container mx-auto  p-5 md:flex md:justify-center'>
                <div className='md:w-2/3 lg:w-2/5 d-block'>
                    <Outlet />
                </div>
            </main>

        </div>
    )
}

export default CrudLayout;