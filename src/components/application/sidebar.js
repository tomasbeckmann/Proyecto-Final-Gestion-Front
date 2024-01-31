import '/workspaces/Proyecto-Final-Gestion-Front/src/css/sidebar.css';

export const Sidebar = () => {
  return (
    <main>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white dash-container" style={{ width: '280px' }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32">
          </svg>
          <i class="fa-solid fa-tractor title-icon"></i>
          <span className="title">DataGather</span>
        </a>
        <hr className='hr' />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/home" className="nav-link active list-margin" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-house icon" style={{ fontSize: '1.25em' }} />
              Home
            </a>
          </li>
          <li>
            <a href="/people" className="nav-link text-white list-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-user icon" style={{ fontSize: '1.25em' }} />
              People
            </a>
          </li>
          <li>
            <a href="/updatelog" className="nav-link text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-clipboard-list icon" style={{ fontSize: '1.25em' }} />
              Update Log
            </a>
          </li>
          <li>
            <a href="/calendar" className="nav-link text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-calendar-days icon" style={{ fontSize: '1.25em' }} />
              Calendar
            </a>
          </li>
          <li>
            <a href="/filesfolder" className="nav-link text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-folder-open icon" style={{ fontSize: '1.25em' }} />
              Files folder
            </a>
          </li>
          <li>
            <a href="/usermanagement" className="nav-link text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-users icon" style={{ fontSize: '1.25em' }} />
              User Management
            </a>
          </li>
          <li>
            <a href="/inbox" className="nav-link text-white list-margin">
              <svg className="bi me-2" width="16" height="16">

              </svg>
              <i className="fa-solid fa-inbox icon" style={{ fontSize: '1.25em' }} />
              Inbox
            </a>
          </li>
          <li>
            <a href="/help" className="nav-link text-white  help-margin">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-question icon" style={{ fontSize: '1.25em' }} />
              Help
            </a>
          </li>
          <li>
            <a href="/notifications" className="nav-link text-white">
              <svg className="bi me-2" width="16" height="16">
              </svg>
              <i className="fa-solid fa-bell icon" style={{ fontSize: '1.25em' }} />
              Notifications
            </a>
          </li>
        </ul>
        <hr className='hr'/>
        <div className="dropdown">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            <strong>User number 1</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">???</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
};
