import { useContext, useState, useEffect } from 'react';
import { Context } from "../../store/appcontext"
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'sonner'

export const GenerateTask = ({ name, lastname, task_description, start_date, end_date, user_id, task_id, task_status }) => {

    const { actions } = useContext(Context)
    const navigate = useNavigate();

    const handlePutTask = async (event) => {
        event.preventDefault();
        navigate(`/updatetask/${task_id}`)
    };

    const confirmAndDelete = async () => {

        toast.error('Estas seguro quieres Eliminar la Tarea?', {
            action: {
                label: 'Eliminar',
                onClick: async () => {
                    actions.fetchTaskDelete(task_id)
                    await actions.fetchTaskData()
                }
            },
        })
    }

/*     function generateStatus(task_status) {
        if (task_status === 1) {
            return <span class="label status label-warning"> Pendiente </span>
        } else if (task_status === 2) {
            return <span class="label status label-success"> Completado</span>
        } else {
            return <span class="label status label-error"> Rechazado</span>
        }  
    }
    generateStatus(task_status) */

    console.log(task_status)

    const [taskstatus, settaskstatus] = useState()

    useEffect(() => {
        settaskstatus(generateStatus(task_status))
        function generateStatus(task_status) {
            let statusComponent;
            if (task_status == 1) {
              statusComponent = <span className="label status label-warning"> Pendiente </span>;
            } else if (task_status == 2) {
              statusComponent = <span className="label status label-success"> Completado</span>;
            } else if (task_status == 3){
              statusComponent = <span className="label status label-danger"> Rechazado</span>;
            } 
            return statusComponent;
          };
      }, [])

    return (
        <tr>
            <td>
                <a href="#" className="user-link">{`${name} ${lastname}`}</a>
            </td>
            <td className="text-center">
                {task_description}
            </td>
            <td className="text-center">
                {taskstatus}
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
                        <i className="fa fa-square primary fa-stack-2x"></i>
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