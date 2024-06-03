     import React from "react";
     import config from "../Ambak/Config/config.json"
     import 'bootstrap/dist/css/bootstrap.min.css';
     import 'bootstrap/dist/js/bootstrap.bundle.min';
     

     function Form({ searchText, handleSearchChange, handleSearch,handleReset }) {
      const handleSubmit = (e) =>{
        e.preventDefault();
      }
         return (
            
                <>
                   <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid d-flex justify-content-between align-items-center ">
                          <a className="navbar-brand" href="#">Table</a>
                          <div className="d-flex">
                            <form className="d-flex me-2" onSubmit={handleSubmit}>
                              <div className="border border-gray px-2" style={{marginRight:"10px", borderRadius:"5px"}}>
                                  <input placeholder="Search by Lead ID" className="border-0 bg-light mt-1 " value={searchText} onChange={handleSearchChange} />
                                  <button className="border-0 bg-light" onClick={handleReset}><i class="fa-solid fa-x" style={{fontSize:"10px"}}></i></button>
                              </div>
                              {config.shareButton && (
                                <button className="btn btn-outline-success" type="submit" onClick={handleSearch}>Search</button>
                              )}
                            </form>
                          </div>
                        </div>
                    </nav>

                 </>
         );
   }

    export default Form;







          // <form className="form-inline my-2 my-lg-0" style={{ marginBottom: "10px", marginLeft: "150px", marginTop: "10px" }}>
            //    <div class="inut   me-2">
            //         <input placeholder="Search by Lead ID" class="input" value={searchText} onChange={handleSearchChange} />
            //         {config.showResetButton &&(
            //        <button class="btn1" onClick={handleReset}><i class="fa-solid fa-x"></i></button>
            //     )}
            //    </div>
            //    {config.shareButton &&(
            //     <button type="button" class="btn btn-primary" onClick={handleSearch}>Search</button>
            //    )}
            // </form>