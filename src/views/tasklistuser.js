import "../css/tasklistuser.css"
import { Usersidebar } from '../components/application/user-sidebar'

export const TaskListUser = () => {
	return (
		<>
			<div className="orden-tasklistuser">
				<Usersidebar />
					<div className="tasklistuser-body col-10">
						<div className="container">
							<div className="row">
								<div className="col-lg-12">
									<div className="main-box clearfix">
										<div className="table-responsive">
											<table className="table user-list">
												<thead>
													<tr>
														<th className="text-center"><span>Tarea</span></th>
														<th className="text-center"><span>Estatus</span></th>
														<th className="text-center"><span>Fecha Inicio</span></th>
														<th className="text-center"><span>Fecha Termino</span></th>
														<th className="text-center"><span>Acciones</span></th>
													</tr>
												</thead>
												<tbody>
													<tr>
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