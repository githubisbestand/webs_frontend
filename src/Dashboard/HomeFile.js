 import React from 'react'
 import "./Dashboard.css";

function HomeFile(){
    return(
        <>
            <div className='nav_Homefile_first'>
               <div > 
                    <h2 className='text-center mb-5'>Hello, <span></span></h2>

                    <h2 className='text-center mb-5'>Welcome To Ambak Dashboard</h2>

                    <div className='d-flex justify-content-between mb-5' style={{width:"900px", margin:"auto"}}>
                            <div className='border  p-5 ' style={{borderRadius:"10px",backgroundColor:"gold"}}>
                                  <p className='text-center'><i class="fa-solid fa-user"></i></p>
                                  <p>Create Lead</p>
                            </div>
                            <div className='border  p-5' style={{borderRadius:"10px", backgroundColor:"bisque"}}>
                                <p>
                                    <p className='text-center'><i class="fa-solid fa-user-xmark"></i></p>
                                    <p>fresh Lead</p>
                                </p>
                            </div>
                            <div className='border  p-5 bg-warning' style={{borderRadius:"10px"}}>
                                  <p className='text-center'><i class="fa-solid fa-rotate-right"></i></p>
                                  <p>Create Lead</p>
                            </div>
                            <div className='border  p-5 bg-info' style={{borderRadius:"10px", backgroundColor:"bisque"}}>
                                <p>
                                    <p className='text-center'><i class="fa-solid fa-list"></i></p>
                                    <p>fresh Lead</p>
                                </p>
                            </div>
                    </div>

                    <div className='d-flex justify-content-evenly mb-5' style={{width:"500px", margin:"auto"}}>
                            <div className='border aligen-items-center' style={{width:"188px",padding:"10px", borderRadius:"10px", backgroundColor:"olive"}}>
                                 <div className='mt-5 mb-5'>
                                    <p className='text-center'><i class="fa-solid fa-x"></i></p>
                                    <p className='text-center'> verified</p>
                                 </div>
                            </div>
                            <div className='border aligen-items-center' style={{width:"188px",padding:"10px", borderRadius:"10px", backgroundColor:"orange"}}>
                                 <div className='mt-5'>
                                    <p className='text-center'><i class="fa-solid fa-phone"></i></p>                                  
                                    <p className='text-center'> verified</p>
                                 </div>
                            </div>
                    </div>  
               </div>
            </div>
        </>
    )
}
export default HomeFile