import React, { useState } from "react";
import { Link } from "react-router-dom";
import Conatact from "./Contact";

function Home() {
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
            <div className="currentend"> 
                <div className="container">                  
                    <div className="first-row">
                        <button className="btn-two" onClick={handleClick}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className="fluid">
                            {showVerification !== 3 && (
                            <div className="imgSrc">
                                <img src="/img/logo.svg" width="350" height="350" alt="Logo" />
                            </div>
                            )}
                            {showVerification === 3 && (
                            <div className="imgSrc">
                                <img src="/img/logo1.svg" width="350" height="250" alt="Logo" />
                            </div>
                            )}
                            {showVerification  === 1  && (
                            <div className="containerFluid">
                                <h3>Check your credit report<span className="speed"> for free</span></h3>
                                <p className="Secure">Secure your Home Loan</p>
                                <p>
                                    <input type="text" placeholder="Enter PAN number" />
                                </p>
                                <button className="btn-one" onClick={handleNextClick}>Next<i className="fa-solid fa-arrow-right-long"></i></button>
                            </div>
                            )}
                            {showVerification === 2 && (
                                <div className="containerFluid">
                                    <h2>Verification</h2>
                                    <p className="para">The customer will receive a verification code on their PAN-linked mobile number</p>
                                    <p className="pera">
                                        <input type="text" placeholder="Enter verification code" className="inur" />
                                        <button className="edit">Edit</button>
                                    </p>
                                    <button className="btn-one" onClick={handleNextClick}>Next<i className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                                )}

                                {showVerification === 3 && (
                                <div className="containerFluid">
                                
                                    <p className="ccc">OTP has been sent your number 
                                        <p className="midle">
                                            ****62022 <button className="btnThree">Edit</button>
                                        </p>
                                    </p>
                                    <p>
                                        <input type="text" placeholder="Enter verification code" />
                                    </p>
                                    <button className="btn-one" onClick={handleNextClick} >Next<i className="fa-solid fa-arrow-right-long"></i></button>
                                </div>
                                )}
                    </div> 
                </div>   
               
            </div>
                </>
            )}
                
                {showVerification === 4 && (
                         <>
                          <div  className="current">
                <div className="TopNumaber">
                    <div className="tolo">
                        <button className="btnSix"><i class="fa-solid fa-arrow-left-long"></i></button>
                        <p className="parck">Credit Report Details <span className="toro">Powered by</span>  <span className="cibil">CIBIL</span></p>
                    </div>
                    <button className="btnSix" onClick={handleClick}>x</button>
                </div>
                
                <div className="currentContainer">
                    <div className="firstContainer">
                        <div className="firstImg">
                            <img src="/img/logo3.svg" width="200" height="200" alt="Logo" />
                            <button className="btnFour"><i class="fa-solid fa-download"></i>Download Report</button>
                        </div>
                        <div className="rightSide">
                            <h3>you are doing good!</h3>
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
                                    <img src="/img/logo4.svg" width="17" height="25"  />
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
                                    <img src="/img/logo4.svg" width="17" height="25"  />
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
                                    <img src="/img/logo4.svg" width="17" height="25"  />
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
                                    <img src="/img/logo4.svg" width="17" height="25"  />
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
                        <h3> Checkout your <span className="speed">Loan offers!</span></h3>
                        <p className="sortPara">lorem ipnonwo mnkoeoi lmnkoco ,keef klpfpf l,mkmfpoj lmkwmpoiefj ,kfpo4j l,mefppo4 lmpfp mwfwefm lwekefo skefpr lmefep lkmwfpf</p>
                        <Link to={"./Contact"} className="offers">check offers</Link>
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
export default Home;
