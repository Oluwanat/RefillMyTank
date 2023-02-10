import React from "react";
import arrow from "./../assets/arrow.png"
import logo from "./../assets/logo.jpg"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { Link } from "react-router-dom";

function Login(){
    return(

        <>
        <div className="login">

            <img src={arrow} alt="" />

            <img src={logo} alt="" className="d-block m-auto my-5"/>

            <div className="w-50 m-auto">
                <h3 className="text-center">Welcome</h3>
                <form className="mt-5">
                    <input type="email" placeholder="Email Address"/>
                    
                    <div className="d-flex mt-2 align-items-center">
                        <input type="password" placeholder="Password" />
                        <AiOutlineEyeInvisible className="me-3"/>
                    </div>

                    <button className="btn btn-md text-white w-100 my-3">LOGIN</button>
                </form>   
            </div> 
        </div>

        <div className="d-flex justify-content-center">
                <p>Do you have an account?</p> &nbsp;
                <Link to="/signup" style={{color:"#00A13A"}}>Sign Up</Link>
        </div>
        </>
    )
}

export default Login