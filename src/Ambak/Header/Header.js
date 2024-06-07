import React, { useState } from "react";
import "../css/style.css";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Module/module";
import Login from "../login/Login";
import { useSelector } from "react-redux";
import SideNavBaar from "../sideNavbaar/side";

function Header() {
    const { name } = useSelector((state) => state.userDetail.firstName); 

    const [isModalOpen, setisModalOpen] = useState(false);
    const [isLogendIn, setisLogendIn] = useState(false);
    const [isListOpen, setIsListOpen] = useState(false); 

    const navigate = useNavigate();

    const handleLogin = () =>{
        setisModalOpen(true)
    }

    const closeModal = () =>{
        setisModalOpen(false);
    }

    const handleLoginSuccess = () =>{
        setisLogendIn(true);
        setisModalOpen(false);
    }

    const handleLogout = () =>{
        navigate("/");
        setisLogendIn(false)
    }

    const handleScroll = () =>{
        setIsListOpen(!isListOpen);
    }
    return (
        <>
            <div className="fir fixed-top">
                <div className="navbar navbar-expand-lg navbar-light nav">
                    <div className="container-fluid">
                        <div style={{ display: "flex", alignItems: "center" }}>
                           {isLogendIn ? (
                            <button style={{fontSize:"30px", border:"0px", background:"none"}} onClick={handleScroll}>
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        ):(
                        <img src="/img/lll.png" width="80" height="80" style={{ borderRadius: "100%" }} />
                        )}
                        </div>
                        
                        <form className="d-flex">
                            {!isLogendIn && (
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ gap: "25px" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link text-dark active" aria-current="page" to="/">Home</Link>
                                    </li>
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
                            )}
                            {!isLogendIn ? (
                                <li className="nav-item d-flex ">
                                    <Link className="nav-link text-primary" onClick={handleLogin} >Login</Link>
                                </li>
                            ) : (
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                        {name}
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to={"#"}>Account</Link></li>
                                        <li><a className="dropdown-item" href="#">senior</a></li>
                                        <li><a className="dropdown-item" href="#" onClick={handleLogout}>Logout</a></li>
                                    </ul>
                                </li>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Login onLoginSuccess={handleLoginSuccess} />
            </Modal>    

            <div className={`side-nav ${isListOpen ? 'open' : ''}`}>
                <SideNavBaar />
            </div>

    </>
);
}

export default Header;
