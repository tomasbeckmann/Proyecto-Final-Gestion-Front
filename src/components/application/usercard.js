import { useContext, useState } from 'react';
import { Context } from "../../store/appcontext"
import { useNavigate } from 'react-router-dom';

export const UserCard = ({ name, lastname, rut, userrol_id, user_email, user_id }) => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const handlePut = async (event) => {      
            event.preventDefault();
            navigate(`/updateuser/${user_email}`)
    };

    const handleDelete = async (event) => {
        const data = {
            "deleted": 1,
            "id": user_id
        };
        await actions.fetchDelete(data);
        await actions.fetchUserData()
        
    };

    let userid = { userrol_id }

    function generateStringFromNumber(number) {
        if (number === 1) {
            return "Administrador"
        } else {
            return "Colaborador"
        }
    }
    const userRoleString = generateStringFromNumber(user_id)

    function confirmAndDelete() {
        if (window.confirm("Are you sure you want to delete?")) {
          handleDelete();
        }
      }

    return (
        <tr className="candidates-list">
            <td className="title">
                <div className="thumb">
                    <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                </div>
                <div className="candidate-list-details">
                    <div className="candidate-list-info">
                        <div className="candidate-list-title">
                            <p className="mb-0 fs-1">{`${name} ${lastname}`}</p>
                            <p className="mb-0 fs-4">{user_email}</p>
                        </div>
                        <div className="candidate-list-option">
                            <ul className="list-unstyled">
                                <li>{rut}</li>
                                <li>{userRoleString}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <ul className="list-unstyled fs-3 mb-0 d-flex justify-content-center">
                    {/*                     <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li> */}
                    <li><a onClick={handlePut} className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                    <li><a onClick={confirmAndDelete} className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
        </tr>
    )
}