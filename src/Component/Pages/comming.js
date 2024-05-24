import React, { useState, useEffect } from "react";

function Comming({ config }) {
  const [curTime, setCurTime] = useState(new Date());
  const [scheduledTime, setScheduledTime] = useState(null);
  const [showData, setShowData] = useState(false);

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
  }, [config]);

  useEffect(() => {
    if (scheduledTime && curTime >= scheduledTime) {
      setShowData(true);
    } else {
      setShowData(false);
    }
  }, [curTime, scheduledTime]);

  const calculateCountdown = () => {
    if (scheduledTime) {
      const difference = scheduledTime.getTime() - curTime.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
      } else {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const { days, hours, minutes, seconds } = calculateCountdown();

  return (
    <>
    <div className="comming_container">
        <div className="contant">
            <div className="contant_first">
                <p className="lunching_para">Website is under Maintenance</p>
                <h1 className="lunching_heading">We're <span style={{color:"red"}}>Lunching</span> Soon</h1>
                <div className="lunch_time">
                    <div>
                    <p className="lunching_para">{days < 10 ? `0${days}` : days}</p>
                    <p className="lunching_days">Days</p>
                    </div>
                    <div>
                    <p className="lunching_para">{hours < 10 ? `0${hours}` : hours}</p>
                    <p className="lunching_days">Hours</p>
                    </div>
                    <div>
                    <p className="lunching_para">{minutes < 10 ? `0${minutes}` : minutes}</p>
                    <p className="lunching_days">Minutes</p>
                    </div>
                    <div>
                    <p className="lunching_para">{seconds < 10 ? `0${seconds}` : seconds}</p>
                    <p className="lunching_days">Seconds</p>
                    </div>
                </div>
                <button type="button" class="btn btn-warning
                 mt-4">Learn more</button>
            </div>
            <img src="/img/rocket.png" className="rocket" alt="rock" />
        </div>
      </div>
    </>
  );
}

export default Comming;
