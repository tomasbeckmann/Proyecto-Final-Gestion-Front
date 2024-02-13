import "../css/tasklist.css"
import { GenerateTask } from '../components/application/newtask'
import { Sidebar } from '../components/application/sidebar'

export const TaskList = () => {
	return (
		<>
			<div className="orden-tasklist">
				<Sidebar />
					<div className="tasklist-body col-10">
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
													<GenerateTask
													
													
													/>
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

