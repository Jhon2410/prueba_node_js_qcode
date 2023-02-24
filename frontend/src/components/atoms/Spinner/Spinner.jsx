const Spinner = () => {
    return (
        <>
            <button id="spinner-open" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdropS" />
            <button id="spinner-close" class="btn btn-secondary d-none" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#staticBackdropS" />
            <div class="modal fade " id="staticBackdropS" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="mx-auto text-center" style={{
                                top: "40%",
                                "zIndex": "10",
                                height: "100%",
                                left: "50%"

                            }}>
                                <h1 className="text-sky-600 font-black my-3 text-6xl capitalize">Cargando {''}</h1>
                                <div class="spinner-border  text-primary mx-auto" role="status" style={{
                                    "width": "50px",
                                    "height": "50px",
                                    "fontWeight": "bold",
                                    "fontSize": "25px"
                                }}>
                                    <span class="sr-only">Cargando...</span>
                                </div>
                            </div >
                        </div>
                    </div>
                </div>
            </div>


        </>


    )
}

export default Spinner;