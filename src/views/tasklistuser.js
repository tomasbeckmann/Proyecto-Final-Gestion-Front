import "../css/tasklistuser.css"
import { Context } from '../store/appcontext';
import React, { useContext, useEffect, useState } from 'react';

export const TaskListUser = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.fetchTaskUser(store.user.id)
		console.log(store.task)
	}, [])

	return (
		<>
			<div className="orden-tasklistuser">
				<div className="tasklistuser-body col-12">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<div className="main-box clearfix">
									<div className="table-responsive">
										<table className="table user-list">
											<thead>
												<tr>
													<th className="text-center"><span>Tarea</span></th>
													<th className="text-center"><span>Estatus</span></th>
													<th className="text-center"><span>Fecha Inicio</span></th>
													<th className="text-center"><span>Fecha Término</span></th>
													{/* 	<th className="text-center"><span>Acciones</span></th> */}
												</tr>
											</thead>
											<tbody>
												{store.task && store.task.map((task, index) => {
													
													return (
														<tr>
															<td className="text-center">
																{task.description}
															</td>
															<td className="text-center">
																
																	{task.status == 1 ? (
																		<span className="label status label-warning"> Pendiente </span>
																	) : task.status == 2 ? (
																		<span className="label status label-success"> Completado</span>
																	) : task.status == 3 ? (
																		<span className="label status label-danger"> Rechazado</span>
																	) : null}																	

															</td>
															<td className="text-center">
																<span>{task.start_date}</span>
															</td>
															<td className="text-center">
																<span>{task.end_date}</span>
															</td>
															{/* <td className="td-style text-center">
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
															</td> */}
														</tr>
													)
												})
												}
											</tbody>
										</table>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
};