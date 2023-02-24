import Spinner from "../atoms/Spinner/Spinner";
import ModalExcel from "../melecules/ModalExcel/ModalExcel";
import ListCards from "../organisms/ListCards/ListCards";
import Modal from "../organisms/Modal/Modal";
import Nav from "../organisms/Nav/Nav";

const CrudTemplate = () => {
    return (
        <div className="container-fluid">
            <Spinner></Spinner>
            <Nav></Nav>
            <Modal></Modal>
            <ModalExcel></ModalExcel>
            <ListCards></ListCards>
        </div>
    )
}

export default CrudTemplate;