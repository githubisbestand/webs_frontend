import React from 'react';
import './Dashboard.css';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function HomeFile() {
  const firstName = useSelector((state) => state.app.firstName);
  const navigate = useNavigate();

  const handelNextLead = () => {
    navigate("/CreateLead"); // Assuming the route is "/CreateLead"
  }

  return (
    <div className="nav_Homefile_first">
      <div>
        <h2 className="text-center mb-5">Hello, {firstName}</h2>
        <h2 className="text-center mb-5">Welcome To Ambak Dashboard</h2>

        <div className="d-flex justify-content-between mb-5" style={{ width: "900px", margin: "auto"}}>
          <div className="border p-5" style={{ borderRadius: "10px", backgroundColor: "gold" }} onClick={handelNextLead}>
            <p className="text-center"><i className="fa-solid fa-user"></i></p>
            <p className="text-center">Create Lead</p>
          </div>
          <div className="border p-5" style={{ borderRadius: "10px", backgroundColor: "bisque" }}>
            <p className="text-center"><i className="fa-solid fa-user-xmark"></i></p>
            <p className="text-center">Fresh Lead</p>
          </div>
          <div className="border p-5 bg-warning" style={{ borderRadius: "10px" }}>
            <p className="text-center"><i className="fa-solid fa-rotate-right"></i></p>
            <p className="text-center">Create Lead</p>
          </div>
          <div className="border p-5" style={{ borderRadius: "10px", backgroundColor: "bisque" }}>
            <p className="text-center"><i className="fa-solid fa-list"></i></p>
            <p className="text-center">Fresh Lead</p>
          </div>
        </div>

        <div className="d-flex justify-content-evenly mb-5" style={{ width: "500px", margin: "auto" }}>
          <div className="border align-items-center" style={{ width: "188px", padding: "10px", borderRadius: "10px", backgroundColor: "olive" }}>
            <div className="mt-5 mb-5">
              <p className="text-center"><i className="fa-solid fa-x"></i></p>
              <p className="text-center">Verified</p>
            </div>
          </div>
          <div className="border align-items-center" style={{ width: "188px", padding: "10px", borderRadius: "10px", backgroundColor: "orange" }}>
            <div className="mt-5 mb-5">
              <p className="text-center"><i className="fa-solid fa-phone"></i></p>
              <p className="text-center">Verified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFile;
