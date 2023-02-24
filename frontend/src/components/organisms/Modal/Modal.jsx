import ModalBody from "../../melecules/ModalBody/ModalBody";
import ModalFooter from "../../melecules/ModalFooter/ModalFooter";
import ModalHeader from "../../melecules/ModalHeader/ModalHeader";

const Modal = () => {
    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable">
                <div className="modal-content">
                    <ModalHeader />
                    <ModalBody />
                    <ModalFooter />
                </div>
            </div>
        </div>
    )
}

export default Modal;