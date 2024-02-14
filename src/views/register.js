import React from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../store/appcontext"
import "../css/login.css";
import { validateEmail } from '../components/application/registerutil';

const PasswordErrorMessage = () => (
  <p className="FieldError">Password debe tener al menos 8 caracteres</p>
);

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("role");

  const validateFirstName = () => firstName.trim() !== "";
  const validateLastName = () => lastName.trim() !== "";
  const validateEmailField = () => validateEmail(email);
  const validatePasswordField = () => password.value.length >= 8;
  const validateConfirmPasswordField = () => confirmPassword === password.value;
  const validateRoleField = () => role !== "role";

  const isFormValid =
    validateFirstName() &&
    validateLastName() &&
    validateEmailField() &&
    validatePasswordField() &&
    validateConfirmPasswordField() &&
    validateRoleField();

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setConfirmPassword("");
    setRole("role");
  };

  const { actions } = useContext(Context)
  const navigate = useNavigate();

  const handleRegister = async (event) => {

    event.preventDefault();
    if (isFormValid) {
      const inputData = Object.fromEntries(new FormData(event.target));
      console.log(Object.fromEntries(new FormData(event.target)));
      actions.fetchRegister(inputData);
      alert("Account created!");
      clearForm();
    } else {
      alert("Form is not valid. Please check your inputs.");
    }
  };

  return (
    <>
      <div className="orden-register">
        <section className="signup row d-flex justify-content-center mt-3">
          <div className="register-container col-12 mt-5">
            <div className="signup-content ">
              <div className="signup-form">
                <form method="POST" className="register-form" id="register-form" onSubmit={handleRegister}>
                  <div className="form-group">
                    <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input
                      className='fs-3'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      onBlur={() => validateFirstName()}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ingresa los nombres del usuario"
                    />
                    {!validateFirstName() && <p className="FieldError">Este campo es requerido</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastname"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input
                      className='fs-3'
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      onBlur={() => validateLastName()}
                      type="text"
                      name="lastname"
                      id="lastname"
                      placeholder="Ingresa los apellidos del usuario"
                    />
                    {!validateLastName() && <p className="FieldError">Este campo es requerido</p>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="rut"><i className="zmdi zmdi-account material-icons-name"></i></label>
                    <input
                      className='fs-3'
                      type="text"
                      name="rut"
                      id="rut"
                      placeholder="Ingresa tu rut del usuario"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                    <input
                      className='fs-3'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onBlur={() => validateEmailField()}
                      placeholder="Ingresa correo electronico del usuario"
                      type="email"
                      name="email"
                      id="email"
                    />
                    {!validateEmailField() && <p className="FieldError">Correo electrónico inválido</p>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="pass"><i className="zmdi zmdi-lock"></i></label>
                    <input
                      className='fs-3'
                      value={password.value}
                      type="password"
                      onChange={(e) =>
                        setPassword({ ...password, value: e.target.value, isTouched: true })
                      }
                      onBlur={() => validatePasswordField()}
                      placeholder="Ingresa el password del usuario"
                      name="password"
                      id="password"
                    />
                    {password.isTouched && !validatePasswordField() && <PasswordErrorMessage />}
                  </div>

                  <div className="form-group">
                    <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                    <input
                      className='fs-3'
                      value={confirmPassword}
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onBlur={() => validateConfirmPasswordField()}
                      placeholder="Repite el password del usuario"
                      name="re_pass"
                      id="re_pass"
                    />
                    {password.isTouched && !validateConfirmPasswordField() && (
                      <p className="FieldError">Las contraseñas no coinciden</p>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="rol"><i className="zmdi zmdi-lock-outline"></i>
                      Ingresa el rol del colaborador:  <sup></sup>
                    </label >
                    <select
                      className='col-6 fs-3 form-control'
                      value={role} onChange={(e) => setRole(e.target.value)}
                      onBlur={() => validateRoleField()}
                      placeholder="Repite el password del usuario"
                      name="userrol_id"
                      id="userrol_id">
                      <option>Elige un rol</option>
                      <option value="1">Administrador</option>
                      <option value="2">Colaborador</option>
                    </select>
                    {!validateRoleField() && <p className="FieldError"></p>}
                  </div>

                  <div className="form-group">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agree-term"
                      name="agree-term"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input type="submit" name="signup" id="signup" className="form-submit" value="Registrar usuario" disabled={!isFormValid} />
                  </div>
                </form>
              </div>
              <div className="signup-image mt-0">
                <h2 className="form-title">Registro de Usuarios</h2>
                <figure><img src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=0&k=20&c=1ULa8wwAxgczZDRpmVYuR-cC7wTpIWSZMzVhOCOgjr0=" alt="" /></figure>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  );
};/* 
const userData = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data)
})

if (response.ok) {
  navigate("/login") 
} else 

const response = await userData.json()
*/