import React from "react";

function Error(){
    return(
        <>
                <div className="firstChild">
                    <div className="first">
                        <p>HTTP Error 500.19 - Internal Server Error</p>
                        <p>The requested page cannot be accessed because the related configuration 
                            data for the page is invailed
                        </p>
                    </div>
                   
                        <div className="second">
                            <p>Detailed Error Information</p>
                            <div>
                                "All the data of your configuration is false. 
                                Please correct the configuration data to true, 
                                then this error will automatically be resolved."
                            </div>
                        </div>

                        <div className="Third">
                            <p style={{color : "red"}}>Your Config Error</p>
                            <div>
                                 "showSearchBox" : false,
                            </div>
                        </div>
                </div>
        </>
    )
}
export default Error;