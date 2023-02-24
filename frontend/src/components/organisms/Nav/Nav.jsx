import ButtonExcel from "../../atoms/buttons/ButtonExcel";
import ButtonLogout from "../../atoms/buttons/ButtonLogout";
import ButtonNuevo from "../../atoms/buttons/ButtonNuevo";
import SearchBar from "../../melecules/SearchBar/SearchBar";

const Nav = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <ButtonLogout></ButtonLogout>
            <div className="w-100">
                <ButtonExcel></ButtonExcel>
                <ButtonNuevo></ButtonNuevo>
            </div>
            <SearchBar></SearchBar>
        </nav>
    )
}

export default Nav;