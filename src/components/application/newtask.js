import { useContext, useState } from 'react';
import { Context } from "../../store/appcontext"

export const GenerateTask = ({  }) => {

    const { actions } = useContext(Context)

    const handleDelete = async (event) => {

    };

    return (
        <tr>
            <td>
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                <a href="#" className="user-link">Jhon Doe</a>
                <span className="user-subhead">Admin</span>
            </td>
            <td className="text-center">
                Actualizar Licencia de Conducir
            </td>
            <td className="text-center">
                <span class="label status label-danger">Pendiente</span>
            </td>
            <td className="text-center">
                <span>07/02/2024</span>
            </td>
            <td className="text-center">
                <span>07/03/2024</span>
            </td>
            <td className="td-style text-center">
                <a href="#" className="table-link">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" className="table-link">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a href="#" className="table-link danger">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </td>
        </tr>
    )
}