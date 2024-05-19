import React from "react";

function Error(){
    return(
        <>
                <div className="container d-flex justify-content-between align-items-center " style={{fontFamily:"Poppins"}}>
                    <div style={{width:"350px"}}>
                            <p style={{fontSize:"40px", fontWeight:"500", color:"red"}}>Config Error</p>
                            <p style={{fontWeight:"500",marginBottom:"30px"}}>"The data in your config file is false. Please set it to true first, 
                                then the error will resolve itself."
                            </p>
                            <button style={{width:"100px", marginLeft:"50px", border:"0px", background:"blue", color:"white", padding:"5px", borderRadius:"5px", fontSize:"14px"}}>GO Back</button>
                    </div>
                    <div>
                        <img src="/img/error.page.png" width="700" height="550" />
                    </div>
                </div>
        </>
    )
}
export default Error;