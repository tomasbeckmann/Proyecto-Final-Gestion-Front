import React, { useState } from 'react';
import "/workspaces/Proyecto-Final-Gestion-Front/src/css/login.css";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Account created!");
      clearForm();
    } else {
      alert("Form is not valid. Please check your inputs.");
    }
  };

  const { actions } = useContext(Context)
  const navigate = useNavigate();
  const handleRegister = async (event) => {

    event.preventDefault()
    const data = Object.fromEntries(
      new FormData(event.target)
    )
    console.log(data)

    fetch('https://octopus-app-epbnm.ondigitalocean.app/user', {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" }
    })
      .then(response => response.json())
      .then(response => {
        if (response.ok) { navigate("/login") }
        if (response.status === 200) { return response.json() }
      })
      .catch(err => {
        if (err.status === 401) { Logout() } //volver a enviar datos de manera correcta ? 
        if (err.status === 500) {
          return setTestApiFetchError({
            'error_type': "SERVER_ERROR",
            "error": true
          })
        }  
      });
  }

  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <form method="POST" className="register-form" id="register-form" onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                <input
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
                <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                <input
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
                  value={password.value}
                  type="password"
                  onChange={(e) =>
                    setPassword({ ...password, value: e.target.value, isTouched: true })
                  }
                  onBlur={() => validatePasswordField()}
                  placeholder="Ingresa el password del usuario"
                  name="pass"
                  id="pass"
                />
                {password.isTouched && !validatePasswordField() && <PasswordErrorMessage />}
              </div>

              <div className="form-group">
                <label htmlFor="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                <input
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
                <select className='col-6 form-control' value={role} onChange={(e) => setRole(e.target.value)} onBlur={() => validateRoleField()}>
                  <option>Elige un rol</option>
                  <option value="Administrador">Administrador</option>
                  <option value="Supervisor">Supervisor</option>
                  <option value="Colaborador">Colaborador</option>
                </select>
                {!validateRoleField() && <p className="FieldError">Selecciona un rol</p>}
              </div>

              <div className="form-group">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agree-term"
                  name="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span><span></span></span>Confirmo la creación de un nuevo, he leido su <a href="#" className="term-service">descriptor de cargo</a>
                </label>
              </div>

              <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" value="Registrar usuario" disabled={!isFormValid} />
              </div>
            </form>
          </div>

          <div className="signup-image">
            <h2 className="form-title">Registro de Usuarios</h2>
            <figure><img src="https://media.istockphoto.com/id/143918313/photo/excavator-at-a-construction-site-against-the-setting-sun.jpg?s=612x612&w=0&k=20&c=1ULa8wwAxgczZDRpmVYuR-cC7wTpIWSZMzVhOCOgjr0=" alt="sing up image" /></figure>
            <a href="/login" className="signup-image-link">Ya soy miembro</a>
          </div>
        </div>
      </div>
    </section>
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