import React from "react";
import arrow from "./../assets/arrow.png"
import logo from "./../assets/logo.jpg"

import { AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom";


function Signup(){
    return(
        <>
            <div className="signup">
                <img src={arrow} alt="" />
                <img src={logo} alt="" className="d-block m-auto my-5"/>

                <div className="w-50 m-auto">
                    <h3 className="text-center">Sign Up</h3>

                        <form className="mt-5">
                            <input type="text" placeholder="Full name"/>

                            <input type="email" placeholder="Email Address"/>

                            <input type="text" placeholder="Phone Number"/>
                        
                        <div className="d-flex mt-2 align-items-center">
                            <input type="password" placeholder="Password"/>

                            <AiOutlineEyeInvisible className="me-3"/>
                        </div>

                        <p className="align-items-center">By tapping the "Register" you agree to the terms & Conditions</p>

                        <button className="btn btn-md text-white w-100 my-3">REGISTER</button>

                        </form>
                </div>
            </div>


            <div className="d-flex justify-content-center">
                <p>Have an account?</p> &nbsp;
                <Link to="/login" style={{color:"#00A13A"}}>Sign In</Link>
        </div>

        

            
        
        
        
        </>
    )
}

export default Signup