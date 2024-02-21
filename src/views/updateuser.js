import React from 'react';
/* import "../css/createtask.css" */
import { useContext, useState } from 'react';
import { Context } from "../store/appcontext"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const UpdateUser = () => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();
    const { user_email } = useParams();

    const handleSubmit = async (event) => {

        event.preventDefault();
        const inputData = Object.fromEntries(new FormData(event.target));
        inputData.email = user_email
        actions.fetchPut(inputData)
        navigate("/usermanagement")
    }
    
    return (
        <div className='createtask-body'>
        <section className="createtask">
            <div className="login-container">
                <div className="createtask-content">
                    <div className="createtask-form">
                        <h2 className="form-title">Actualizar información de Usuario</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="logib-label zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Nombre" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="your_description"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="last_name" id="last_name" placeholder="Apellido" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rut"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="rut" id="rut" placeholder="Rut" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="password" id="password" placeholder="Contraseña" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_rol"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="user_rol" id="user_rol" placeholder="Rol" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="createtask" id="createtask" className="form-submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    );
};
