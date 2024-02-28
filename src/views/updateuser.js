import React from 'react';
/* import "../css/createtask.css" */
import { useContext, useEffect, useState } from 'react';
import { Context } from "../store/appcontext"
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner'

export const UpdateUser = () => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();
    const { user_email } = useParams();
    const [urlImagen, setUrlImagen] = useState('');

    const handleSubmit = async (event) => {

        event.preventDefault();
        const inputData = Object.fromEntries(new FormData(event.target));
        inputData.email = user_email
        inputData.url_img = urlImagen
        console.log(inputData)
        actions.fetchPut(inputData)
        toast.success("Usuario Actualizado")
        navigate("/homeadmin")
    }

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
          return responseData
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };
    
    return (
        <div className='createtask-body'>
        <section className="createtask">
            <div className="login-container">
                <div className="createtask-content">
                    <div className="createtask-form">
                        <h2 className="form-title">Actualizar información de Usuario</h2>
                        <form onSubmit={handleSubmit} className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="name"><i className="logib-label zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Nombre" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="your_description"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="last_name" id="last_name" placeholder="Apellido" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="rut"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="rut" id="rut" placeholder="Rut" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"><i className="logib-label zmdi zmdi-lock"></i></label>
                                <input type="text" name="password" id="password" placeholder="Contraseña" />
                            </div>
                            <div className="form-group">
                            <select className="logib-label zmdi zmdi-lock" name="user_rol" id="user_rol" placeholder="Rol de Usuario">
                                    <option>Seleccione un estatus</option>
                                    <option value="1">Administrador</option>
                                    <option value="2">Colaborador</option>
                             </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="url_img"><i className="logib-label zmdi zmdi-lock"></i></label>
                                Selecione una Foto de Perfil:
                                <input type="file" name='irl_img' accept="image/*" onChange={changeUploadImage} />
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
