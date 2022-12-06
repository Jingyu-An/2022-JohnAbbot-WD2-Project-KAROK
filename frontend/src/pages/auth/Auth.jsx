import React from 'react';
import './Auth.css';
import KAROK from '../../img/KAROK.png';


const Auth = () => {
  return (
    <div className="Auth">
      <div className='a-left'>
        <img src = {KAROK} alt =""/>
        <div className='Webname'>
            <h1>Karokify</h1>
            <h5>Join Karokify and explore Thoughts. </h5>
        </div>
      </div>
      
      <LogIn/>
      {/* <SignUp/> */}
    </div>
  )
}
function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
                Don't have an account Sign up
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }
function SignUp(){
    return(
        <div className='a-right'>
            <form className='infoForm authForm'>


                <h3>Sign up</h3>
                <div >
                    <input type="text" placeholder ="First Name" className ="infoInput" name ='firstname'/>
                    <input type="text" placeholder ="Last Name" className ="infoInput" name ='lastname'/>
                </div>
                <div>
                <input type="text" placeholder ="Username" className ="infoInput" name ='username'/>
                </div>
                <div>
                <input type="text" placeholder ="Password" className ="infoInput" name ='password'/>
                <input type="text" placeholder ="Confirm Password" className ="infoInput" name ='confirmpass'/>
                </div>
                <div>
                    <span style ={{fontSize: '12px'}}>Have an account? Please Login!</span>
                </div>
                <button className='button infoButton' type = "submit">Sign Up</button>

            </form>
        </div>
    )
}

export default Auth;