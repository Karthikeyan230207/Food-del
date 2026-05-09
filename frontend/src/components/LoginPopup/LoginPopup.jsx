import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';


const LoginPopup = ({ setshowLogin }) => {

    const {url,setToken} = React.useContext(StoreContext);

    const [currState,setcurrState] = React.useState("Login");
    const [data,setData] = React.useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData((prev)=>({...prev,[name]:value}))
    }

    const onlogin = async (e)=>{
        e.preventDefault();
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login";
        }else{
            newUrl += "/api/user/register";
        }

        const response = await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setshowLogin(false);
        }
        else{
            alert(response.data.message);
        }
    }

  return (
    <div className='login-popup'>
        <form onSubmit={onlogin} className='login-form-container' >
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {
                    currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Enter your name" required />
                }
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Enter your email" required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Enter your password" required />
                <button type='submit'>{currState==="Sign Up"?"Create Account":"Login"}</button>
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