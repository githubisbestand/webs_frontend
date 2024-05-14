import React from "react";

function Form({ searchText, handleSearchChange, handleSearch, handleReset }) {
    return (
        <form className="form-inline my-2 my-lg-0" style={{ marginBottom: "10px", marginLeft: "150px", marginTop: "10px" }}>
           <div className="inut   me-2">
                <input placeholder="Search by Lead ID" className="input" value={searchText} onChange={handleSearchChange} />
               <button className="btn1" onClick={handleReset}><i class="fa-solid fa-x"></i></button>
           </div>
            <button className="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={handleSearch}>Search</button>
        </form>
    );
}

export default Form;
