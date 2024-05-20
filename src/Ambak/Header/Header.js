import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";


function Header(){
    return(
        <>
            <div className="fir fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light container">
                    <div className="container-fluid">
                        <img src="/img/lll.png" width="80" height="80" style={{borderRadius: "100%"}} />
                    
                        <div className="ms-auto">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <Link className="nav-link text-dark active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/loan">Loan</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to={"/Table"}>Table</Link></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />                     
                                        <button className="btn btn-outline-success" type="submit"  >Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
)}

export default  Header;