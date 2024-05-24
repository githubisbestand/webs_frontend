import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Loan() {
    const [showVerification, setShowVerification] = useState(1);
    

    const handleNextClick = () => {
        setShowVerification(showVerification + 1);
    };

    const handleClick = () =>{
        setShowVerification(showVerification - 1);
    }

    return (
        <> 
          {showVerification !== 4 && (
               <>
            
                <div style={{width:"1100px", margin:"150px auto"}} className=" coroend bg-light mb-5">                  
                <div className="d-flex justify-content-end">
                    <button className="text-center btn" onClick={handleClick}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                    <div className=" d-flex justify-content-between align-items-center">
                            {showVerification !== 3 && (
                            <div className="imgSrc">
                                <img src="/img/logo.svg" width="450" height="350" alt="Logo" />
                            </div>
                            )}
                            {showVerification === 3 && (
                            <div className="imgSrc">
                                <img src="/img/logo1.svg"width="450" height="300" alt="Logo" style={{marginBottom:"40px"}} />
                            </div>
                            )}
                            {showVerification  === 1  && (
                            <div style={{marginRight:"50px"}}>
                                <h3 style={{fontSize:"30px", fontWeight:"600", marginBottom:"20px"}}>Check your credit report<span className="speed"> for free</span></h3>
                                <p style={{fontSize:"17px", fontWeight:"400",  marginBottom:"20px"}}>Secure your Home Loan</p>
                                <p>
                                    <input type="text" placeholder="Enter PAN number" style={{width:"350px", padding:"7px", borderRadius:"5px", outline:"none" }} className="border border" />
                                </p>
                                <button type="button" class="btn btn-primary" onClick={handleNextClick} style={{marginLeft:"250px", width:"100px"}}>Next <i className="fa-solid fa-arrow-right-long"></i></button>

                            </div>
                            )}
                            {showVerification === 2 && (
                                 <div style={{marginLeft:"80px"}}>
                                    <h3 style={{fontSize:"30px", fontWeight:"600", marginBottom:"20px"}}>Verification</h3>
                                    <p style={{fontSize:"17px", fontWeight:"400",  marginBottom:"20px"}}>The customer will receive a verification code on their PAN-linked mobile number</p>
                                    <p style={{border:"1px solid gray", width:"350px", borderRadius:"5px"}} className="d-flex">
                                        <input type="text" placeholder="Enter PAN number" style={{width:"300px", padding:"7px",  outline:"none", border:"0px" }} className="border-0" />
                                        <button className="bg-white border border-0 text-center text-primary ">Edit</button>
                                    </p>
                                    <button type="button" class="btn btn-primary" onClick={handleNextClick} style={{marginLeft:"250px", width:"100px"}}>Next <i className="fa-solid fa-arrow-right-long"></i></button>
                                 </div>
                            )} 

                                {showVerification === 3 && (
                                        <div style={{marginRight:"100px"}}>
                                            <p className="text-center" style={{fontSize:"19px"}}>OTP has been sent your number 
                                                <p className="text-center">
                                                    ****62022 <button className="btnThree border border-0 bg-white text-primary">edit</button>
                                                </p>
                                            </p>
                                            <p>
                                            <input type="text" placeholder="Enter PAN number" style={{width:"350px", padding:"7px", borderRadius:"5px", outline:"none" }} className="border border" />
                                            </p>    
                                            <button type="button" class="btn btn-primary" onClick={handleNextClick} style={{marginLeft:"250px", width:"100px"}}>Next <i className="fa-solid fa-arrow-right-long"></i></button>
                                        </div>
                                )}
                    </div> 
                </div>   
                </>
            )}
                
                {showVerification === 4 && (
                         <>
                          <div  className="current">
                <div className="TopNumaber">
                    <div className="tolo">
                        <button className="btnSix"  onClick={handleClick}><i class="fa-solid fa-arrow-left-long"></i></button>
                        <p className="parck">Credit Report Details <span className="toro">Powered by</span>  <span className="cibil">CIBIL</span></p>
                    </div>
                    <button className="btnSix" onClick={handleClick}>x</button>
                </div>
                
                <div className="current">
                    <div className="first">
                        <div className="firstImg">
                            <img src="/img/logo3.svg" width="200" height="200" alt="Logo" />
                            <button className="btnFour"><i class="fa-solid fa-download"></i>Download Report</button>
                        </div>
                        <div className="rightSide">
                            <h3 className="heading-three">you are doing good!</h3>
                            <p className="paraOne">Your credit score is good and therefore you deserve to get the best.
                                Scroll down to choose fron attractive Pre-Approved loan and credit
                                card offers.
                            </p>
                        </div>
                    </div>
                    <hr style={{color:"red", height:"320px"}}/>
                <div className="ford">
                    <div className="firstPoint">
                            <h4 className="credit">Credit Score insights</h4>
                            <p>view Report</p>
                    </div>
                    <div>
                            <p className="high">High Impact</p>
                    </div>

                    <div className="secondPoint">
                            <div className="firstArrow">
                               
                               <div className="clock">
                                    <img src="/img/logo4.svg" width="17" height="25" alt="img" />
                               </div>
                                
                                <div className="onces">
                                    <h3 className="heading">Repayment History</h3>
                                    <p className="paraTwo">Never miss due date</p>
                                </div>
                            </div>
                            <div className="secondArrow">
                            <div>
                                    <h3 className="heading">100%</h3>
                                    <p className="paraTwo">Excellent</p>
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                            </div>
                    </div>
                    <div className="secondPoint">
                            <div className="firstArrow">
                                <div className="clock">
                                    <img src="/img/logo4.svg" width="17" height="25" alt="img" />
                               </div>                                
                                <div className="onces">
                                    <h3 className="heading">Repayment History</h3>
                                    <p className="paraTwo">Never miss due date</p>
                                </div>
                            </div>
                            <div className="secondArrow">
                            <div>
                                    <h3 className="heading">100%</h3>
                                    <p className="paraTwo">Excellent</p>
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                            </div>
                    </div>
                    <div>
                            <p className="high">High Impact</p>
                    </div>

                    <div className="secondPoint">
                            <div className="firstArrow">
                                <div className="clock">
                                    <img src="/img/logo4.svg" width="17" height="25" alt="img" />
                               </div>                                
                                <div className="onces">
                                    <h3 className="heading">Repayment History</h3>
                                    <p className="paraTwo">Never miss due date</p>
                                </div>
                            </div>
                            <div className="secondArrow">
                            <div >
                                    <h3 className="heading">100%</h3>
                                    <p className="paraTwo">Excellent</p>
                            </div>
                            <i class="fa-solid fa-angle-right"></i>
                            </div>
                    </div>
                    <div>
                        <p className="high">High Impact</p>
                    </div>

                        <div className="secondPoint">
                            <div className="firstArrow">
                                <div className="clock">
                                    <img src="/img/logo4.svg" width="17" height="25" alt="img" />
                               </div>                                
                                <div className="onces">
                                    <h3 className="heading">Repayment History</h3>
                                    <p className="paraTwo">Never miss due date</p>
                                </div>
                            </div>
                            <div className="secondArrow">
                                <div>
                                        <h3 className="heading">100%</h3>
                                        <p className="paraTwo">Excellent</p>
                                </div>
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            <div className="lastClass" >
                <div className="lastSlc">
                    <div className="rightCompo">
                        <h3 className="heading-three"> Checkout your <span className="speed">Loan offers!</span></h3>
                        <p className="sortPara">lorem ipnonwo mnkoeoi lmnkoco ,keef klpfpf l,mkmfpoj lmkwmpoiefj ,kfpo4j l,mefppo4 lmpfp mwfwefm lwekefo skefpr lmefep lkmwfpf</p>
                        <Link to="/contact" className="offers">Check offers</Link>
                    </div>
                    <div className="imgOne">
                        <img src="/img/logo2.svg" width="150" height="150" alt="Logo" /> 
                    </div>
                </div>
            </div>
                         </>


        )}
               
         </>
    )
}
export default Loan;
