import React from 'react';
import "/workspaces/Proyecto-Final-Gestion-Front/src/css/login.css"
import { useContext } from 'react';
import { Context } from "../store/appcontext"
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {

    const {actions} = useContext(Context)
    const navigate = useNavigate();
    
const handleLogin = async (event) => {

    event.preventDefault()
    const data = Object.fromEntries(
        new FormData(event.target)
    )  
    console.log(data)

    let URL = "https://65c56ef5e5b94dfca2e00619.mockapi.io/login"

    const userData = await fetch(URL,{
    method: "POST",
    body: JSON.stringify(data)
    })
    const response = await userData.json()
 
    actions.SetCredential(response[0].token, response[0].user) 
    
    navigate("/home")

}



    return (
        <div className='sign-in-body'>
        <section className="sign-in">
            <div className="login-container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=0&k=20&c=1ULa8wwAxgczZDRpmVYuR-cC7wTpIWSZMzVhOCOgjr0=" /></figure>
                        <a href="#" className="signup-image-link">Create an account</a>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign In</h2>
                        <form onSubmit={handleLogin} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="logib-label zmdi zmdi-account material-icons-name"></i></label>
                                <input type="email" name="email" id="your_email" placeholder="E-mail" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="password" name="password" id="your_pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="logib-label label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};
