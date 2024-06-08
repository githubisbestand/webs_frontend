import React from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function HomeFile() {
  const { name } = useSelector((state) => state.userDetail.firstName); 
  const navigate = useNavigate();

  const handelNextLead = () => {
    navigate("/CreateLead"); 
  }

  const handleShowLead = () =>{
    navigate("/ShowLead");
  }

  return (
    <div className="nav_Homefile_first">
      <div>
        <h2 className="text-center mb-5">Hello, {name}</h2>
        <h2 className="text-center mb-5">Welcome To Ambak Dashboard</h2>

        <div className="d-flex justify-content-between mb-5" style={{ width: "450px", margin: "auto"}}>
          <div className="border p-5" style={{ borderRadius: "10px", backgroundColor: "gold" }} onClick={handelNextLead}>
            <p className="text-center"><i className="fa-solid fa-user"></i></p>
            <p className="text-center">Create Lead</p>
          </div>
          <div className="border p-5" style={{ borderRadius: "10px", backgroundColor: "bisque" }} onClick={handleShowLead}>
            <p className="text-center"><i className="fa-solid fa-user-xmark"></i></p>
            <p className="text-center">Fresh Lead</p>
          </div>
        </div>
        <div className="d-flex justify-content-between mb-5" style={{ width: "450px", margin: "auto"}}>
          <div className="border p-5 " style={{ borderRadius: "10px", backgroundColor: "orange" , width:"190px" }} >
            <p className="text-center"><i className="fa-solid fa-x"></i></p>
            <p className="text-center">Verified</p>
          </div>
          <div className="border p-5 " style={{ borderRadius: "10px", backgroundColor: "olive", width:"190px" }} >
            <p className="text-center"><i className="fa-solid fa-phone"></i></p>
            <p className="text-center">All Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFile;
