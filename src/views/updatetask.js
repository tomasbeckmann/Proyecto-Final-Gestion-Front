import React from 'react';
import "../css/createtask.css"
import { useContext } from 'react';
import { Context } from "../store/appcontext"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const UpdateTask = () => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();
    const { task_id } = useParams();

    console.log(task_id)

    const handleTask = async (event) => {
        event.preventDefault();
        const inputData = Object.fromEntries(new FormData(event.target));
        inputData.id = task_id
        actions.fetchTaskUpdate(inputData)
        navigate("/tasklist")
    }

    return (
        <div className='createtask-body'>
        <section className="createtask">
            <div className="login-container">
                <div className="createtask-content">
                    <div className="createtask-form">
                        <h2 className="form-title">Crear Tarea</h2>
                        <form onSubmit={handleTask} className="register-form" id="login-form">                                        
                            <div className="form-group">
                                <label htmlFor="start_date"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="date" name="start_date" id="start_date" placeholder="Fecha de Inicio" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="end_date"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="date" name="end_date" id="end_date" placeholder="Fecha de Termino" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="description" id="description" placeholder="Descripción" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="status"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="status" id="status" placeholder="Estatus" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="createtask" id="createtask" className="form-submit" value="Guardar Tarea" />
                            </div>
                        </form>
                     
                    </div>
                </div>
            </div>
        </section>
    </div>

    );
};
