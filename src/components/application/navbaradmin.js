import { Context } from '../../store/appcontext';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logoadmin from "../../images/2.png"
import "../../css/navbaradmin.css"


export const Navbaradmin = () => {

    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchUserData()
        console.log(store.user)
    }, [])

    return (
<>
   <nav className="navbar navbaradmin responsive-nav-admin navbar-expand-md navbar-light ">
        <div className="container">
        <img 
          className="logoadmin"
          src= {Logoadmin}/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link to="/homeadmin" relative="path" className="navlink-usersidebar text-white list-margin">
                        <a className="nav-link-admin" href="#">Inicio</a>
                    </Link>
                    </li>
{/*                     <li className="nav-item">
                    <Link to="/usermanagement" relative="path" className="navlink-sidebar text-white list-margin"> 
                        <a className="nav-link-admin" href="#">Administrar Usuarios</a>
                    </Link>
                    </li> */}
                    <li className="nav-item">
                    <Link to="/register" relative="path" className="navlink-sidebar text-white list-margin">
                        <a className="nav-link-admin" href="#">Crear Usuario</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/tasklist" relative="path" className="navlink-sidebar text-white help-margin">
                        <a className="nav-link-admin" href="#">Administrar Tareas</a>
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/createtask" relative="path" className="navlink-sidebar text-white help-margin">
                        <a className="nav-link-admin" href="#">Agregar Tareas</a>
                    </Link>
                    </li>
{/*                     <li className="nav-item">
                    <Link to="/calendar" relative="path" className="navlink-sidebar text-white help-margin">
                        <a className="nav-link-admin" href="#">Calendario</a>
                    </Link>
                    </li> */}
{/*                     <li className="nav-item">
                    <Link to="/filefolder" relative="path" className="navlink-sidebar text-white help-margin">
                        <a className="nav-link-admin" href="#">Carpeta de Archivos</a>
                    </Link>
                    </li> */}
                    <li className="nav-item">
                    <Link to="/helpadmin" relative="path" className="navlink-sidebar text-white help-margin">
                        <a className="nav-link-admin" href="#">Ayuda</a>
                    </Link>
                    </li>
                    <hr className='hr'/>
                    <li className="nav-item">
                        <a className="nav-link-admin" href="#">{`${store.user.name} ${store.user.last_name}`}</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link-admin" href="/login">Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</>
    );
};
