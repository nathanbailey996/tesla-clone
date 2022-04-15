import React from "react"

export default function Login (props){
    
      
    
    function addNewLoginData(event){
        const {name, value} = event.target
        props.setLoginData(prevFormData=>{
            return {
                ...prevFormData,
                [name]:value
            }
        })
    }
    
   
    
    
    
    
    
    return (
        <div className="form-container">
        <form className="login-form" onSubmit={props.handleSubmit} >
        <h1 className="h6">Sign In</h1>
        <label htmlFor="email" className="email-label">Email Address</label> 
        <input
         type="email" 
         id="email"
          className="email-input"
          name="emailAddress"
         value={props.loginData.emailAddress}
         onChange={addNewLoginData}
           />
        <label htmlFor="password" className="email-label">Password</label>
        <input 
        type="text"
         id="password"
         className="password-input"
         name="password"
         value={props.loginData.password}
         onChange={addNewLoginData}
         />
        <button className="button submit-btn">Sign In</button>
        <div className="form-links">
        <a>Forgot Email</a>
        <p>|</p>
        <a>Forgot password</a>
        </div>
        
      <div className="or-container">  <p>OR</p></div>
</form>

<div className="create-account-container">
<button className="button create-account-btn" onClick={props.changeToCreateAccount}>Create An Account</button>
</div>

<div className="login-footer">
<ul>

        <li><a href="#"> Tesla © 2022</a></li>
        <li><a href="#">Privacy & Legal</a></li>
        <li><a href="#">Contact</a></li>
</ul>
</div>
        </div>
    )
}