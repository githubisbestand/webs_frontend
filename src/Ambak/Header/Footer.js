import React from "react";
import { FacebookShareButton, LinkedinShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon, LinkedinIcon, EmailShareButton, EmailIcon } from "react-share";

function footer(){
    const currentPageUrl = window.location.href; 
    return(
        <>
                <div className="footer">
                    <footer className="nav d-flex justify-content-between align-items-center text-center">
                        <div className="fff">
                            <div style={{marginBottom:"10px"}}>
                                <img src="/img/lll.png" height="40px" width="100px" />
                            </div>
                            <div class="d-flex">
                                <div class="share-button">
                                <FacebookShareButton  url={currentPageUrl}>
                                    <FacebookIcon size={32} />
                                </FacebookShareButton>
                                </div>
                                <div class="share-button">
                                <LinkedinShareButton  url={currentPageUrl}>
                                    <LinkedinIcon size={32} />
                                </LinkedinShareButton>
                                </div>
                                <div class="share-button">
                                <EmailShareButton  url={currentPageUrl}>
                                    <EmailIcon size={32} />
                                </EmailShareButton>
                                </div>
                                <div class="share-button">
                                <WhatsappShareButton  url={currentPageUrl}>
                                    <WhatsappIcon size={32} />
                                </WhatsappShareButton>
                                </div>
                            </div>

                        </div>
                        
                        <div className="fff">
                                <h1 className="heading_footer">Quick Link</h1>
                                <a href="#" className=" nav-link mb-2 text-white text-center " style={{fontSize:"12px"}}>Home</a>
                                <a href="#" className=" nav-link  text-white text-center" style={{fontSize:"12px"}}>Blogs</a>
                                
                        </div>
                        <div className="fff">
                                <h1 className="heading_footer">Other</h1>
                                <p className="para_one">Term && Condition</p>
                                <p className="para_one">Privancy policy</p>
                        </div>
                            
                        <div className="fff">
                                <h1 className="heading_footer">Find us</h1>
                                <a href="#" className=" nav-link  mb-2   text-white text-center" style={{fontSize:"12px"}}>contact us</a>
                                <a href="#" className=" nav-link  text-white text-center" style={{fontSize:"12px"}}>Facebook</a>
                        </div>
                    </footer>
                    <hr style={{color:"white"}} />
                    <p className="text-white text-center para_one  ">* Copyright 2024 TENB FINTAC PRIVATE LIMTED. All Right Reserved. </p>
                </div>       
        </>
    )
}
export default footer;