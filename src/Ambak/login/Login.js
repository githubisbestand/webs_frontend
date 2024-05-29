import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [curData, setData] = useState(false);
  const [verifyData, setVerifyData] = useState(false)

  const handleEmailSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/send-otp', { email });
      setData(true);
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      setVerifyData(true)
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handlePasswordSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/save-password', { email, password });
      alert('Password saved successfully');
    } catch (error) {
      console.error('Error saving password:', error);
    }
  };

  return (
    <div className=" mt-2 bg-white">
      <div className="row justify-content-center aligen-items-center">
          
            <div className="">
                <div>                
                  <div className="mb-3">
                    <label htmlFor='' className='mb-2'>Enter Email :</label>
                    <input type="email" autoComplete='off' required className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {curData && (
                        <div className="mt-3">
                            <label className='mb-2'>Enter otp :</label><br/>
                            <div style={{width : "250px", display:"flex", justifyContent:"space-between", alignItems:"center", border:"1px solid gray", padding:"5px", borderRadius:"5px"}}> 
                                <input type="text" required placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} style={{border:"0px", outline:"none"}} />
                                <button style={{fontSize:"13px", width:"40px", border:"0px", color:"blue", backgroundColor:"white"}} onClick={handleOtpSubmit}>Verify</button>
                            </div>
                        </div>
                    )}
                    </div>
                  <button className="btn btn-primary" onClick={handleEmailSubmit}>Next</button>
                </div>
                {verifyData &&(
                <div>
                    <div className=" mt-3 mb-3">
                        <label htmlFor='' className='mb-2'>Create Password :</label>
                        <input type="password" autoComplete="off" className="form-control" required placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary" onClick={handlePasswordSubmit}>create Password</button>
                </div>
                )}
            </div>
          </div>
      </div>
  );
}

export default Login;
