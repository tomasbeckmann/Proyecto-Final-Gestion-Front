import React, { useContext, useState } from 'react';
import { Context } from '../store/appcontext';
import { useNavigate } from 'react-router-dom';
import '../css/login.css';
import  LogoLogin  from "../images/datagather.png"

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
      actions.fetchLogin(inputData).then((user) => {
        console.log(user.rol)
        if(user.rol === 1){
          navigate("/homeadmin")
        }else if(user.rol === 2) {
          navigate("/home")
        } else {
          navigate("/login")
        }
      })
      .catch((error) => console.log(error))
    }
  };

  const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPasswordValid = () => password.length >= 8;

  const isFormValid = () => isEmailValid() && isPasswordValid();

  return (
    <div class="sign-in-body testlogin d-flex justify-content-center">
  <section class="sign-in">
    <div class="container login-container">
      <div class="row align-items-center">
        <div class="col-md-12 signin-image">
          <figure>
            <img src={LogoLogin} className='mt-5' alt="Construction site" />
          </figure>
        </div>
        <div class="col-md-10 signin-form">
          <h2 class="form-title mt-5">Inicio de sesión</h2>
          <form onSubmit={handleLogin} class="register-form" id="login-form">
            <div class="form-group">
              <label htmlFor="your_email">
                <i class="logib-label zmdi zmdi-account material-icons-name"></i>
              </label>
              <input
                type="email"
                name="email"
                id="your_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                class={isEmailValid() ? '' : 'invalid-input'}
              />
              {!isEmailValid() && <span class="m-3 warning-message">Email no válido</span>}
            </div>
            <div class="form-group">
              <label htmlFor="your_pass">
                <i class="logib-label zmdi zmdi-lock"></i>
              </label>
              <input
                type="password"
                name="password"
                id="your_pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                class={isPasswordValid() ? '' : 'invalid-input'}
              />
              {!isPasswordValid() && <span class="m-3 warning-message">Contraseña debe tener mínimo 8 caracteres</span>}
            </div>
            <div class="form-group form-button d-flex mb-5 justify-content-center">
              <input type="submit" name="signin" id="signin" class="form-submit" value="Log in" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
  );
};


