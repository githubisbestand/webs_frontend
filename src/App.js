import React, { useState, useEffect } from 'react';
import Home from './Partnerscreen/partnerScreen';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from "./Config/config.json";

function App() {
    const [showData, setShowData] = useState(false);
    const [curTime, setCurTime] = useState(new Date());

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCurTime(new Date())
      },1000)
      return () =>{
        clearInterval(interval)
      }
    }, [])

    useEffect(()=>{
      const seduleTime = new Date(config.seduleDate + 'T' + config.seduleTime)
      setShowData(curTime >= seduleTime);
    }, [curTime])

    return (
     <>
         <p>Current Time: {curTime.toLocaleString()}</p>
         {showData &&(
         <Home/>
        )}
     </>
    );
}

export default App;
