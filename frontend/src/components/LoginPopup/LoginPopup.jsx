import React from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';


const LoginPopup = ({ setshowLogin }) => {
    const [currState,setcurrState] = React.useState("Login");
  return (
    <div className='login-popup'>
        <form className='login-form-container' >
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {
                    currState==="Login"?<></>:<input type="text" placeholder="Enter your name" required />
                }
                <input type="email" placeholder="Enter your email" required />
                <input type="password" placeholder="Enter your password" required />
                <button>{currState==="Sign Up"?"Create Account":"Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required/>
                    <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
                </div>
                {
                    currState==="Login"?<p>Create a new account? <span onClick={()=>setcurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setcurrState("Login")}>Login here</span></p>
                }
            </div>
        </form>
    </div>
  )
}

export default LoginPopup;