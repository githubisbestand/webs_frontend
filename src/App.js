import React, { useEffect, useState } from "react";
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

function App() {
  const [showData, setShowData] = useState(false);
  const [curTime, setCurTime] = useState(new Date());
  const [scheduledTime, setScheduledTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
    
  useEffect(() => {
    if (config.seduleDate && config.seduleTime) {
      const scheduleDateTime = new Date(config.seduleDate + "T" + config.seduleTime);
      setScheduledTime(scheduleDateTime);
    }
  }, []);

  useEffect(() => {
    if (scheduledTime && curTime >= scheduledTime) {
      setShowData(true);
    } else {
      setShowData(false); 
    }
  }, [curTime, scheduledTime]);
  
  const calculateCountdown = () => {
    const difference = scheduledTime.getTime() - curTime.getTime();
    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return `${hours}h ${minutes}m ${seconds}s remaining`;
    } else {
      return " ";
    }
  };
  

  return (
    <>
      <BrowserRouter>
        <div className="mb-5">
          <Header />
        </div>
        {!showData &&(
        <p className="container" style={{marginTop:"100px"}}> your project go live on : {calculateCountdown()}</p>
        )}
        {showData && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/table" element={<Table />} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        )}
        {!showData && <div className="container" style={{marginBottom:"280px"}}>Project will be displayed after the scheduled time</div>}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
