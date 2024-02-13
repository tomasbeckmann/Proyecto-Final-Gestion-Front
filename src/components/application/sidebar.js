import '../../css/sidebar.css';
/* import 'bootstrap/dist/css/bootstrap.min.css' */

export const Sidebar = () => {
  return (
    <main>
      <div className="sidebar-body d-flex flex-column flex-shrink-0 p-3 text-white dash-container" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32">
          </svg>
          <i class="fa-solid fa-tractor title-icon"></i>
          <span className="title">DataGather</span>
        </a>
        <hr className='hr' />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/linecharts" className="navlink-sidebar text-white active list-margin" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-house icon" style={{ fontSize: '1.25em' }} />
              Inicio
            </a>
          </li>
          <li>
            <a href="/usermanagement" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-users icon" style={{ fontSize: '1.25em' }} />
              Administrar Usuarios
            </a>
          </li>
          <li>
            <a href="/register" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-user icon" style={{ fontSize: '1.25em' }} />
              Crear Usuario
            </a>
          </li>  
          <li>
            <a href="/tasklist" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-list-check icon" style={{ fontSize: '1.25em' }} />
              Administrar Tareas
            </a>
          </li>
      
          <li>
            <a href="/calendar" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-calendar-days icon" style={{ fontSize: '1.25em' }} />
              Calendario
            </a>
          </li>
          <li>
            <a href="/filefolder" className="navlink-sidebar text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-folder-open icon" style={{ fontSize: '1.25em' }} />
              Carpeta de Archivos
            </a>
          </li>              
          <li>
            <a href="/help" className="navlink-sidebar text-white  help-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-question icon" style={{ fontSize: '1.25em' }} />
              Ayuda
            </a>
          </li>
        </ul>
        <hr className='hr'/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>Usuario número 1</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Perfil</a></li>
            <li><a className="dropdown-item" href="#">Configuración</a></li>
            <li><a className="dropdown-item" href="#">???</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
};
