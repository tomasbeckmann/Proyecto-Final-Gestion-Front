import React, { useState } from "react";
import './registers.css';
import { validateEmail } from "./registerutil";

const PasswordErrorMessage = () => (
  <p className="FieldError">Password debe tener al menos 8 caracteres</p>
);

export const Registers = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({ value: "", isTouched: false });
  const [role, setRole] = useState("role");

  const getIsFormValid = () =>
    firstName && validateEmail(email) && password.value.length >= 8 && role !== "role";

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="Register">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Registrar usuario</h2>
          <div className="Field">
            <label>
              Nombres <sup>*</sup>
            </label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Ingresa los nombres del usuario"
            />
          </div>
          <div className="Field">
            <label>Apellidos</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Ingresa los apellidos del usuario"
            />
          </div>
          <div className="Field">
            <label>
              Dirección de Email <sup>*</sup>
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa correo electronico del usuario"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              value={password.value}
              type="password"
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value, isTouched: true })
              }
              onBlur={() => setPassword({ ...password, isTouched: true })}
              placeholder="Ingresa el password del usuario"
            />
            {password.isTouched && password.value.length < 8 && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Rol <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Rol</option>
              <option value="Administrador">Administrador</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Colaborador">Colaborador</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Crear cuenta
          </button>
        </fieldset>
      </form>
    </div>
  );
};


