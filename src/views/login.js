import React, { useContext, useState } from 'react';
import { Context } from '../store/appcontext';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';

export const SignIn = () => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    // Valida el email antes de llamar al fetch login 
    if (isFormValid()) {
      const inputData = Object.fromEntries(new FormData(event.target));
      console.log(inputData)
      actions.fetchLogin(inputData).then(() => navigate("/home"));
    }
  };

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = () => password.length >= 8;

  const isFormValid = () => isEmailValid() && isPasswordValid();

  return (
    <div className="sign-in-body">
      <section className="sign-in">
        <div className="login-container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img
                  src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=0&k=20&c=1ULa8wwAxgczZDRpmVYuR-cC7wTpIWSZMzVhOCOgjr0="
                  alt="Construction site"
                />
              </figure>            
            </div>
            <div className="signin-form">
              <h2 className="form-title">Inicio de sesión</h2>
              <form onSubmit={handleLogin} className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_email">
                    <i className="logib-label zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="your_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    className={isEmailValid() ? '' : 'invalid-input'}
                  />
                  {!isEmailValid() && <span className="warning-message">Email no valido</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="logib-label zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="your_pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className={isPasswordValid() ? '' : 'invalid-input'}
                  />
                  {!isPasswordValid() && <span className="warning-message">Contraseña debe tener mínimo 8 caracteres</span>}
                </div>
               {/*  <div className="form-group">
                  <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                  <label htmlFor="remember-me" className="logib-label label-agree-term">
                    <span><span></span></span>Recordarme
                  </label>
                </div> */}
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


