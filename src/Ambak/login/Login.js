import React, { useState } from 'react';
import axios from 'axios';

function Login(){

    const [setup, setSetup] = useState(1);
    
    const [values, setValues] = useState({
        email : " ",
        password : " "
    })

 


    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:5000/login",values)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        console.log("values", values);
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value }); 
    };

    return(
        <>
                <div className="justify-content-center aligen-items-center border border-white px-2 p-5 form_login" style={{ width:"400px", margin:"100px auto"}}>
                    <p className="text-center" style={{fontSize:"25px"}}>Login</p>
                    <form onSubmit={handleSubmit}>  
                        {setup === 1 && (
                        <div className="mb-4">
                            <label>UserEmail</label>
                            <input type="email" placeholder="Email" name="email"    autoComplete="off" required  className="form_input mb-3" onChange={handleChange}/>
                            {setup != 3 &&(
                            <button className="btn btn-primary" >Next</button>
                            )}
                        </div>
                        )}

                        {setup === 2 &&(
                        <div className="mb-3">
                            <label>Enter otp : </label>
                            <input type="text" placeholder="Enter otp" autoComplete="off" className="otp" style={{marginLeft:"10px"}} /> 
                        </div>
                        )}
                        {setup === 3 &&(
                        <div className="mb-4">
                            <label>UserPassword</label>
                            <input type="password" placeholder="password" name="password"   autoComplete="off"  className="form_input" onChange={handleChange} required />
                        </div>  
                         )}
                         {setup === 3 &&(                     
                        <button type="submit" className="btn btn-success">submit</button>
                        )}
                    </form>
                </div>
        </>
    )
}
export default Login;

// App.js
// import React, { useState } from 'react';
// import axios from 'axios';

// function Login(){
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [emailExists, setEmailExists] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);

//   const checkEmailExists = async () => {
//     try {
//       const response = await axios.post('/check-email', { email });
//       setEmailExists(response.data.exists);
//     } catch (error) {
//       console.error('Error checking email:', error);
//     }
//   };

//   const sendOtp = async () => {
//     try {
//       const response = await axios.post('/http://localhost:3000/send-otp', { email });
//       setOtpSent(true);
//       console.log(response.data.message);
//     } catch (error) {
//       console.error('Error sending OTP:', error);
//     }
//   };

//   const verifyOtpAndSaveData = async () => {
//     try {
//       const response = await axios.post('/http://localhost:3000/verify-otp', { email, otp, additionalData: {} }); // Additional data to save
//       console.log(response.data.message);
//     } catch (error) {
//       console.error('Error verifying OTP and saving data:', error);
//     }
//   };

//   return (
//     <div style={{marginTop:"150px", marginBottom:"150px"}}>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={checkEmailExists}>Next</button>

//       {emailExists && (
//         <div>
//           {otpSent ? (
//             <div>
//               <input
//                 type="text"
//                 placeholder="Enter OTP"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//               />
//               <button onClick={verifyOtpAndSaveData}>Submit</button>
//             </div>
//           ) : (
//             <button onClick={sendOtp}>Send OTP</button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;
