import { useContext, useState } from 'react';
import { Context } from "../../store/appcontext"
import { useNavigate } from 'react-router-dom';

export const GenerateTask = ({name, lastname, task_description, start_date, end_date, user_id, task_id  }) => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const handlePutTask = async (event) => {      
            event.preventDefault();
            navigate(`/updatetask/${task_id}`)
    };

    function confirmAndDelete() {
        if (window.confirm("Are you sure you want to delete?")) {
          actions.fetchTaskDelete(task_id)
          navigate("/tasklist")
        }
      }

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
                <a onClick={handlePutTask} className="table-link primary">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-pencil primary fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
                <a onClick={confirmAndDelete} className="table-link danger">
                    <span className="fa-stack">
                        <i className="fa fa-square fa-stack-2x"></i>
                        <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </td>
        </tr>
    )
}