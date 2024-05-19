import React,  { useState } from "react";

function Conatact()
{
    
    return(
        <>
            <div className= "container d-flex justify-content-between align-items-center loan">
                <div className="loanImg">
                    <img src="/img/logo5.svg" width="300" height="300" alt="Logo" />
                </div>        
                <div className="loanData">
                    <div style={{width:"600px", padding:"25px", background:"white", borderRadius:"20px", marginRight:"80px"}}>
                        <div className="btneco">
                            <button className="btnSix mb-4"><i class="fa-solid fa-arrow-left-long"></i></button><span style={{fontSize:"22px", marginLeft:"15px"}}>Loan details</span>
                        </div>
                        <ul className="list-unstyled d-flex justify-content-between">
                            <li className="border border-gray w-50 m-2 text-center p-2">Home Loan</li>
                            <li className="border border w-50 m-2 text-center p-2" >property Loan</li>
                        </ul>    
                        <input type="text" className="mb-4" placeholder="Loan Amount" style={{width:"270px"}} />
                        
                        <p> 
                            <button type="button" class="btn btn-primary">Next<i class="fa-solid fa-arrow-right-long"></i></button>
                        </p>
                    </div>
                </div>
            </div>    
        </>
    )
}
export default Conatact

