import { useContext, useState } from 'react';
import { Context } from "../../store/appcontext"
import { useNavigate } from 'react-router-dom';

export const GenerateTask = ({name, lastname, task_description, start_date, end_date, user_id  }) => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const handlePutTask = async (event) => {      
            event.preventDefault();
            actions.fetchUser(user_id);
            navigate("/createtask")
    };

    const handleDeleteTask = async (event) => {
        event.preventDefault();
        const data = {
            "deleted": 1,
            "id": user_id
        };
        await actions.fetchDelete(data);
        await actions.fetchUserData()
    };

    return (
        <tr>
            <td>
                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                <a href="#" className="user-link">{`${name} ${lastname}`}</a>
            </td>
            <td className="text-center">
                {task_description}
            </td>
            <td className="text-center">
                <span class="label status label-danger">Pendiente</span>
            </td>
            <td className="text-center">
                <span>{start_date}</span>
            </td>
            <td className="text-center">
                <span>{end_date}</span>
            </td>
            <td className="td-style text-center">
               {/*  <a href="#" className="table-link">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    </span>
                </a> */}
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