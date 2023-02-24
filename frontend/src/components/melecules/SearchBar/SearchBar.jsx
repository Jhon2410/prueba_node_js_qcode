import { connect } from "react-redux";

const SearchBar = ({ onSearch, filtro }) => {
    return (
        <div className="d-flex w-100" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" value={filtro} onChange={(e) => onSearch(e.target.value)} aria-label="Search" />
            <button className="btn btn-outline-success" onClick={() => onSearch(filtro)}>Buscar</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    filtro: state.filtro
})


const mapDispatchToProps = (dispatch) => ({
    onSearch: (filtro) => dispatch({ type: "SET_FILTRO", payload: filtro })
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
