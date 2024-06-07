import React from "react";
import { Link } from "react-router-dom";

function sideNavBaar(){
    return(
        <>
          <nav className="side_nav">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ gap: "25px" }}>
                    <li className="nav-item">
                        <Link className="nav-link text-white active" aria-current="page" to="/">Manage Lead</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/loan">Marketing</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to={"/signup"}>Curd </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/loan">Gallery</Link>
                    </li>    
                </ul>
          </nav>
        </>
    )
}
export default sideNavBaar;