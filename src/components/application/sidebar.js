import '../../css/sidebar.css';
import { Context } from '../../store/appcontext';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import  Logo  from "../../images/datagather_logo.png"


export const Sidebar = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.fetchUserData()
    console.log(store.user)
}, [])

  return (
    <main className='main-sidebar'>
      <div className="sidebar-body d-flex flex-column flex-shrink-0 p-3 text-white dash-container vw-50 " >
        <Link href="/" relative="path" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img 
          className="logo"
          src= {Logo}/>
        </Link>
        <hr className='hr' />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
          <Link to="/homeadmin" relative="path" className="navlink-sidebar text-white active list-margin" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-house icon" style={{ fontSize: '1.25em' }} />
              Inicio
            </Link>
          </li>
          <li>
          <Link to="/usermanagement" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-users icon" style={{ fontSize: '1.25em' }} />
              Administrar Usuarios
            </Link>
          </li>
          <li>
          <Link to="/register" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-user icon" style={{ fontSize: '1.25em' }} />
              Crear Usuario
            </Link>
          </li>  
          <li>
          <Link to="/tasklist" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-list-check icon" style={{ fontSize: '1.25em' }} />
              Administrar Tareas
            </Link>
          </li>
          <li>
          <Link to="/createtask" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-pencil" style={{ fontSize: '1.25em' }} />
              Agregar Tareas
            </Link>
          </li>
      
          <li>
          <Link to="/calendar" relative="path" className="navlink-sidebar text-white list-margin"> 
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-calendar-days icon" style={{ fontSize: '1.25em' }} />
              Calendario
            </Link>
          </li>
          <li>
          <Link to="/filefolder" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-folder-open icon" style={{ fontSize: '1.25em' }} />
              Carpeta de Archivos
            </Link>
          </li>              
          <li>
          <Link to="/helpadmin" relative="path" className="navlink-sidebar text-white  help-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-question icon" style={{ fontSize: '1.25em' }} />
              Ayuda
            </Link>
          </li>
        </ul>
        <hr className='hr'/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>{`${store.user.name} ${store.user.last_name}`}</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="#">Configuración</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/login">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
};
