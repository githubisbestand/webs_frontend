import React from "react";

function Error(){
    return(
        <>
            <div className="main">
                <div className="mainTwo">   
                       <div className="first">
                            <p className="page">404</p>
                            <p className="not">Not Found</p>
                       </div>
                        <p className="mind">
                            The requested page does not exits on the server or it has been moved to another place you can also verifey the address you have just tried to open
                        </p>
                        <p className="tind">We are sorry for the inconvenience</p> 
                        <div className="back">
                            <button className="trip">go back</button>
                        </div>
                        <p>
                            Created with the error page
                        </p>       
                </div>
            </div>
        </>
    )
}
export default Error;