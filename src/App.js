import React from "react";
import Header from "./Ambak/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Ambak/Header/Footer"; 
import Loan from "./Component/Pages/loan";
import Table from "./Ambak/Partnerscreen/partnerScreen";
import Conatact from "./Component/Pages/Contact";
import "./Component/Pages/contact.css";
import Home from "./Component/Pages/Home";
import "./index.css";
function App() {
  return (
    <>
      <BrowserRouter>
      <div className=" mb-5">
        <Header />
        </div>
        {/* Added margin bottom for space between Header and Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/table" element={<Table />} />
            <Route path="/contact" element={<Conatact />} />
          </Routes>
       
        <Footer /> {/* No need for extra margin, Footer will naturally follow the content */}
      </BrowserRouter>
    </>
  );
}

export default App;
