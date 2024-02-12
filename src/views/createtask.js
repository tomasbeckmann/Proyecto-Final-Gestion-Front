import React from 'react';
import "../css/createtask.css"
import { useContext, useState } from 'react';
import { Context } from "../store/appcontext"
import { useNavigate } from 'react-router-dom';

export const CreateTask = () => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const handleTask = async (event) => {

        event.preventDefault();
        const inputData = Object.fromEntries(new FormData(event.target));
        actions.fetchTask(inputData)

    }
    return (
        <div className='createtask-body'>
        <section className="createtask">
            <div className="login-container">
                <div className="createtask-content">
                    <div className="createtask-form">
                        <h2 className="form-title">Create Task</h2>
                        <form onSubmit={handleTask} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="logib-label zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="your_name" placeholder="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_description"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="description" id="your_description" placeholder="description" />
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
