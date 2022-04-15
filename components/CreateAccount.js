import React from "react"

export default function CreateAccount (props){
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
            <form className="login-form">
            <h2 className="h6">Create Account</h2>
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" 
            value={props.loginData.emailAddress} 
            onChange={addNewLoginData}
            name="emailAddress" />

            <label htmlFor="password">Password</label>
            <input type="text" id="password"
              value={props.loginData.password} 
              onChange={addNewLoginData}
              name="password"
            />

<button className="button create-account-btn" onClick={props.handleSubmit}>Create Account</button>
<div className="or-container">  <p>OR</p></div>

</form>
<button className="button create-sign-in-btn" onClick={props.changeToSignIn}>Sign In</button>
            </div>
    )
}