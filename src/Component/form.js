import React from "react";
import config from "../Config/config.json"

function Form({ searchText, handleSearchChange, handleSearch, handleReset }) {
    return (
        <form class="form-inline my-2 my-lg-0" style={{ marginBottom: "10px", marginLeft: "150px", marginTop: "10px" }}>
           <div class="inut   me-2">
                <input placeholder="Search by Lead ID" class="input" value={searchText} onChange={handleSearchChange} />
                {config.showResetButton &&(
               <button class="btn1" onClick={handleReset}><i class="fa-solid fa-x"></i></button>
            )}
           </div>
           {config.shareButton &&(
            <button class="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={handleSearch}>Search</button>
           )}
        </form>
    );
}

export default Form;
