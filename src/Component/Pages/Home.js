import React from "react";

function Home(){
    return(
        <>
                <div className="bg-dark">
                    <div className=" container d-flex justify-content-between align-items-center  ">
                        <div className="first w-50 ">
                        <h1 className="fw-bold" style={{ color: "yellow", fontSize: "3rem" }}>Subscribe Now</h1>
                        <h2 className="fw-bold" style={{ color: "white", fontSize: "3rem" }}>To our News Later</h2>
                            <p className="text-success">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <p className="mb-3">
                                <input type="text" className="form-control" placeholder="Name" style={{marginBottom:"10px"}} />
                                <input type="email" className="form-control" placeholder="email" required style={{marginBottom:"10px"}} />
                            </p>
                            <p>
                            <button type="button" class="btn btn-danger text-white">send</button>
                            </p>
                        </div>

                        <div className="first">
                            <img src="/img/left.jpeg" width="400" height="400"  style={{borderRadius:"50%"}}/>
                        </div>

                    </div>
                </div>


                <div className="container cur">
                    <div>
                        <p className="margin-bottom-custom text-center border border-solid px-1 bg-secondary text-white"> DIGITAL MARKETING</p>
                        <div className="d-flex justify-content-evenly align-items-center">
                            <div className="middle bg-warning">
                                <p>Innovative content</p>
                            </div>
                            <div className="middle bg-info">
                                <p>Ssl  Certificates</p>
                            </div>
                            <div className="middle bg-danger">
                                <p>Social media AS Costamer Supporter</p>
                            </div>
                            <div className="middle bg-secondary">
                                <p>user Interface</p>
                            </div>
                            <div className="middle bg-success">
                                <p>Digital Marketing</p>
                            </div>
                        </div>
                        <div className="text-center mt-5 mb-4">
                            <img src="/img/nann.jpg" />
                        </div>
                    </div>
                </div>       
        </>
    )
}
export default Home;