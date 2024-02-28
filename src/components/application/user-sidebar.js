import '../../css/user-sidebar.css';
import { Context } from '../../store/appcontext';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "../../images/datagather_logo.png"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Usersidebar = () => {

  const { store, actions } = useContext(Context)

  useEffect(() => {
    actions.fetchUserData()
    console.log(store.user)
  }, [])

  return (

    <main className='main-usersidebar responsive-sidebaruser'>
      <div className="d-flex flex-column flex-shrink-0 p-3  dash-container" style={{ width: '280px' }}>
        <Link href="/" relative="path" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <img
            className="logo ml-1"
            src={Logo} />
        </Link>
        <hr className='hr' />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/home" relative="path" className="navlink-usersidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-user icon" style={{ fontSize: '1.25em' }} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/tasklistuser" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-clipboard-list icon" style={{ fontSize: '1.25em' }} />
              Tareas
            </Link>
          </li>
 {/*          <li>
            <Link to="/usercalendar" relative="path" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-calendar-days icon" style={{ fontSize: '1.25em' }} />
              Calendario
            </Link>
          </li> */}
          <li>
            <Link to="/help" relative="path" className="navlink-sidebar text-white help-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-question icon" style={{ fontSize: '1.25em' }} />
              Ayuda
            </Link>
          </li>

        </ul>
        <hr className='hr' />
        <div className="dropdown">
        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={`${store.user.url_img}`} alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>{`${store.user.name} ${store.user.last_name}`}</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/login">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
};
