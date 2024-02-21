import { Context } from '../../store/appcontext';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import LogoUser from "../../images/2.png"
import "../../css/navbaruser.css"



export const Navbaruser = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchUserData()
        console.log(store.user)
    }, [])

    return (
<>
   <nav className="navbar navbaruser responsive-nav-user navbar-expand-lg navbar-light ">
        <div className="container">
            <img className="logo-user" src={LogoUser} />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/home" relative="path" className="navlink-usersidebar text-white list-margin">
                        <a className="nav-link-user" href="#">Home</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/tasklistuser" relative="path" className="navlink-sidebar text-white list-margin"> 
                        <a className="nav-link-user" href="#">Tareas</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/usercalendar" relative="path" className="navlink-sidebar text-white list-margin">
                        <a className="nav-link-user" href="#">Calendario</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/help" relative="path" className="navlink-sidebar text-white help-margin">
                        <a className="nav-link-user" href="#">Ayuda</a>
                    </Link>
                    </li>
                    <hr className='hr'/>
                    <li className="nav-item">
                        <a className="nav-link-user" href="#">{`${store.user.name} ${store.user.last_name}`}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-user" href="#">Configuración</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link-user" href="/login">Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</>
    );
};
