import "../css/tasklist.css"
import { GenerateTask } from '../components/application/newtask'
import { Context } from "../store/appcontext"
import React, { useContext, useEffect } from "react";


export const TaskList = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.fetchTaskData()
		console.log(store.taskdata)
	}, [])

	return (
		<>
			<div className="orden-tasklist">
				<div className="tasklist-body col-12">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="main-box clearfix">
									<div className="table-responsive">
										<table className="table user-list">
											<thead>
												<tr>
													<th className="text-center"><span>Usuario</span></th>
													<th className="text-center"><span>Tarea</span></th>
													<th className="text-center"><span>Estatus</span></th>
													<th className="text-center"><span>Fecha Inicio</span></th>
													<th className="text-center"><span>Fecha Termino</span></th>
													<th className="text-center"><span>Acciones</span></th>
												</tr>
											</thead>
											<tbody className="fs-5">
												
												{store.taskdata && store.taskdata.map((task, index) => {
													console.log(store.taskdata.deleted)

													return (
														<GenerateTask
															key={task.index}
															name={task.name}
															lastname={task.last_name}
															task_description={task.description}
															start_date={task.start_date}
															end_date={task.end_date}
															task_id={task.id}
															user_id={task.user_id}
															task_status={task.status}
														/>
													)
												})
												}
											</tbody>
										</table>
									</div>
									{/* 	<ul className="pagination pull-right">
										<li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
										<li><a href="#">1</a></li>
										<li><a href="#">2</a></li>
										<li><a href="#">3</a></li>
										<li><a href="#">4</a></li>
										<li><a href="#">5</a></li>
										<li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
									</ul> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

