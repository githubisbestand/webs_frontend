import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../react-crud/slice/userDetails';

function Login({onLoginSuccess}) {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [curData, setData] = useState(1);
  const [canLoginWithPassword, setCanLoginWithPassword] = useState(false);
  
  
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleEmailSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send-otp', { email });
      if (response.data.is_verified === '1') {
        setCanLoginWithPassword(true);
        setData(4); 
      } else {
        setData(2); 
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleOtpSubmit = async () => {
    try {
      await axios.post('http://localhost:5000/verify-otp', { email, otp });
      setData(3);
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/save-password', { email, password });
      const {firstName} = response.data; // Ensure firstName is a field in your response data
      dispatch()
      dispatch(setUser({ firstName }));
      navigate("/HomeFile");
      onLoginSuccess();
      alert('Login successful');
    } catch (error) {
      console.error('Error saving password:', error);
      alert('Error saving password');
    }
  };
  
  const handlePasswordLogin = async () => {

    try {
      const response = await axios.post('http://localhost:5000/login-password', {email, password});
      const { name, id } = response.data;
      console.log("--------",name, id);
      dispatch(setUser({ name, id }));
      navigate("/HomeFile");
      onLoginSuccess();
      alert('login successfull');
    } catch (error) {
      console.error('Error logging in with password:', error);
      alert('you enter wrong password please enter right password')
    }
  };


  return (
    <div className="mt-2 bg-white">
      <div className="row justify-content-center align-items-center">
        <div className="">
          {curData === 1 && (
            <div>
              <div className="mb-3">
                <label htmlFor='' className='mb-2'>Enter Email :</label>
                <input type="email" autoComplete='off' required className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <button className="btn btn-primary" onClick={handleEmailSubmit}>Next</button>
            </div>
          )}

          {curData === 2 && (
            <div>
              <div className="mt-3">
                <label className='mb-2'>Enter otp :</label>
                <input type="text" className='form-control' required placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
              </div>
              <button className="btn btn-primary mt-3" onClick={handleOtpSubmit}>Verify OTP</button>
            </div>
          )}

          {curData === 3 && (
            <div>
            <div className="mt-3 mb-3">
              <label htmlFor='' className='mb-2'>Create Password :</label>
              <input type="password" autoComplete="off" className="form-control" required placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={handlePasswordSubmit}>Login</button>
          </div>
          )}

          {curData === 4 && canLoginWithPassword && (
            <div>
              <div className="mt-3 mb-3">
                <label htmlFor='' className='mb-2'>Enter Password :</label>
                <input type="password" autoComplete="off" className="form-control" required placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button className="btn btn-primary"  onClick={handlePasswordLogin}>Login</button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default Login;
