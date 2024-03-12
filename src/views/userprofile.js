import '../css/userprofile.css';
import { Context } from '../store/appcontext';
import React, { useContext, useEffect, useState } from 'react';

export const UserProfile = () => {
  const { store, actions } = useContext(Context);
  const [urlImagen, setUrlImagen] = useState('');

  const changeUploadImage = async (event) => {
    const file = event.target.files[0];
    const data = new FormData();
    
    data.append("file", file);
    data.append("upload_preset", "Presents_react");

    console.log(data)

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dwmstwn0o/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      console.log(response)
      const responseData = await response.json();
      setUrlImagen(responseData.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    actions.fetchUserData();
  }, [actions, store.user]);

  function generateStringFromNumber(number) {
    return number === 1 ? 'Administrador' : 'Colaborador';
  }

  const userRoleString = generateStringFromNumber(store.user.id);

  return (
    <>
      <div className="container userprofile-body">
        <div className="main-body">
          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="userprofile-card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={`${store.user.url_img}`} alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <ul className="nav nav-pills flex-column mb-auto">
                        <li>
                          <h4>{`${store.user.name} ${store.user.last_name}`}</h4>
                        </li>
                        <li>
                          <i className="fa-solid fa-suitcase" style={{ fontSize: '1.25em' }} />
                          <p className="text font-size-sm">{userRoleString}</p>
                        </li>
                        <li className="datalist">
                          <i className="fa-solid fa-id-card" style={{ fontSize: '1.25em' }} />
                          <p className="text font-size-sm">{store.user.rut}</p>
                        </li>
                        <li>
                          <i className="fa-solid fa-envelope" style={{ fontSize: '1.25em' }} />
                          <p className="text font-size-sm">{store.user.email}</p>
                        </li>
                        <li>
                          <p className="text font-size-sm"></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-contract">
                <div className="card mt-4">
                  <div className="margintop">
                    <ul className="list-group list-group-flush">
                      <li>
                        <i className="fa-solid fa-user-check" />
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
                      <tr className="tr-userprofile">
                        <td>Carnet de Identidad</td>
                        <td>Aprobado</td>
                        <td>
                          <button className="userprofile-button">Editar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Cargar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Ver Documento</button>
                        </td>
                      </tr>
                      <tr className="tr-userprofile">
                        <td>OS-10</td>
                        <td>Pendiente</td>
                        <td>
                          <button className="userprofile-button">Editar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Cargar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Ver Documento</button>
                        </td>
                      </tr>
                      <tr className="tr-userprofile">
                        <td>Exámen de Salud</td>
                        <td>Rechazado</td>
                        <td>
                          <button className="userprofile-button">Editar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Cargar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Ver Documento</button>
                        </td>
                      </tr>
                      <tr className="tr-userprofile">
                        <td>Antecedentes Penales</td>
                        <td>Pendiente</td>
                        <td>
                          <button className="userprofile-button">Editar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Cargar</button>
                        </td>
                        <td>
                          <button className="userprofile-button">Ver Documento</button>
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
    </>
  );
};