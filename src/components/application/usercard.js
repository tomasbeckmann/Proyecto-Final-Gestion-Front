import { useContext, useState } from 'react';
import { Context } from "../../store/appcontext"
export const UserCard = ({ name, lastname, rut, userrol_id, user_email }) => {

    const { actions } = useContext(Context)

    const handlePut = async (event) => {      
            const inputData = Object.fromEntries(new FormData(event.target));
            console.log(Object.fromEntries(new FormData(event.target)));
            actions.fetchRegister(inputData);
    };

    const handleDelete = async (event) => {
        event.preventDefault();
        const data = {
            "deleted": 1,
            "email": user_email
        };
        actions.fetchDelete(data);
    };

    let userid = { userrol_id }

    function generateStringFromNumber(number) {
        if (number === 1) {
            return "Administrador"
        } else {
            return "Colaborador"
        }
    }
    const userRoleString = generateStringFromNumber(userid)

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
                    <li><a onClick={handleDelete} className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
        </tr>
    )
}