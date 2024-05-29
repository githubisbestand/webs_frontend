import React, { useState } from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import Modal from "../Module/module";
import Login from "../login/Login";
function Header() {

    const [isModalOpen, setisModalOpen] = useState(false);


    const handleLogin = () =>{
        setisModalOpen(true)
    }

    const closeModal = () =>{
        setisModalOpen(false);
    }

    return (
        <>
            <div className="fir fixed-top">
                <nav className="navbar navbar-expand-lg navbar-light nav">
                    <div className="container-fluid">
                        <img src="/img/lll.png" width="80" height="80" style={{ borderRadius: "100%" }} />
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{gap:"25px"}}>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/loan">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to={"/signup"}>Curd </Link>                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/loan">Gallery</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dashboard
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to={"/Table"}>Lead Table</Link></li>
                                        <li><a className="dropdown-item" href="#">Table second</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Table Third</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex">
                               <li className="nav-item d-flex ">  
                                    <Link className="nav-link text-primary"  onClick={handleLogin} >Login</Link>
                               </li>
                            </form>
                        </div>
                    </div>
                </nav>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <Login />
                </Modal>
            </div>
           
        </>
    );
}

export default Header;
