import '../css/userprofile.css'

export const UserProfile = () => {
  return (
    <div className="container center">
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <ul className="nav nav-pills flex-column mb-auto">
                      <li>
                        <h4>John Doe</h4>
                      </li>
                      <li>
                        <i className="fa-solid fa-suitcase" style={{ fontSize: '1.25em' }} />
                        <p className="text font-size-sm">Full Stack Developer</p>
                      </li>
                      <li className='datalist'>
                        <i className="fa-solid fa-phone" style={{ fontSize: '1.25em' }} />
                        <p className="text font-size-sm">+569123123123123</p>
                      </li>
                      <li>
                        <i className="fa-solid fa-envelope" style={{ fontSize: '1.25em' }} />
                        <p className="text font-size-sm">jhondoe@gmail.com</p>
                      </li>
                      <li>
                        <p className="text font-size-sm"></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='card-contract'>
              <div className="card mt-3">
                <div className='margintop'>
                <ul className="list-group list-group-flush">
                  <li>
                    <i class="fa-solid fa-user-check" />
                    <p className="text font-size-sm">Empleado Vigente</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" style={{ fontSize: '1.25em' }} />
                    <p className="text font-size-sm">Activo desde 01/01/2024</p>
                  </li>
                  <li>
                    <i className="fa-solid fa-file" style={{ fontSize: '1.25em' }} />
                    <p className="text font-size-sm">Tipo de Contrato: Indefinido</p>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body documents-tab">
                <table>
                  <thead>
                    <tr>
                      <th>Documento</th>
                      <th>Estatus</th>
                      <th>Editar</th>
                      <th>Cargar</th>
                      <th>Ver</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carnet de Identidad</td>
                      <td>Aprobado</td>
                      <td>
                        <button>Editar</button>
                      </td>
                      <td>
                        <button>Cargar</button>
                      </td>
                      <td>
                        <button>Ver Documento</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

