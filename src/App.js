import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Ambak/Header/Header";
import Footer from "./Ambak/Header/Footer";
import Loan from "./Component/Pages/loan";
import Table from "./Ambak/Partnerscreen/partnerScreen";
import Contact from "./Component/Pages/Contact";
import Home from "./Component/Pages/Home";
import config from "./Ambak/Config/config.json";
import "./Component/Pages/contact.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./index.css";
import Comming from "./Component/Pages/comming";
import Create from "./Component/Create";
import Read from "./Component/Read";
import Update from "./Component/Update";
import Login from "./Ambak/login/Login";


function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const scheduledDateTime = new Date(config.seduleDate + "T" + config.seduleTime);
    const currentTime = new Date();

    
    if (currentTime >= scheduledDateTime) {
      setShowContent(true);
    } else {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, scheduledDateTime - currentTime);
      
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        {showContent ? (
          <>
            <div className="mb-5">
              <Header />
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/loan" element={<Loan />} />
              <Route path="/table" element={<Table />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element= {<Read />} />
              <Route path="/create" element = {<Create />} />
              <Route path="/update/:id" element = {<Update />} />
            </Routes> 
            <Footer />
          </>
        ) : (
          <Comming config={config} />
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
