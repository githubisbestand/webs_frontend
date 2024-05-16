// App.js
import React, { useState, useEffect } from 'react';
import Home from './Partnerscreen/partnerScreen';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import config from './Config/config.json';

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
      const scheduleTime = new Date(config.seduleDate + 'T' + config.seduleTime);
      const showDuration = config.showDuration || 5; // default duration is 5 minutes
      const endTime = new Date(scheduleTime.getTime() + showDuration * 60000);
      setShowData(curTime >= scheduleTime && curTime < endTime);
    }, [curTime])

    return (
     <>
         <p>Current Time: {curTime.toLocaleString()}</p>
         {showData && <Home />}
     </>
    );
}

export default App;
