import "../css/tasklist.css"
import { Sidebar } from '../components/application/sidebar'

export const TaskList = () => {
	return (
		<>
		<div className="orden">
		<Sidebar />
		<div className="tasklist-body">
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
									<tbody>
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

									</tbody>
								</table>
							</div>
							<ul className="pagination pull-right">
								<li><a href="#"><i className="fa fa-chevron-left"></i></a></li>
								<li><a href="#">1</a></li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#">4</a></li>
								<li><a href="#">5</a></li>
								<li><a href="#"><i className="fa fa-chevron-right"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		</>
	);
};