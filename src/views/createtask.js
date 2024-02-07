import React from 'react';
import "/workspaces/Proyecto-Final-Gestion-Front/src/css/createtask.css"

export const CreateTask = () => {
    return (
        <div className='createtask-body'>
            <div className="row d-flex justify-content-center container">
                <div className="col-md-8">
                    <div className="card-hover-shadow-2x mb-3 card createtask-container">
                        <div className="card-header-tab card-header">
                            <div className="card-header-title font-size-lg text-capitalize font-weight-normal"><i
                                className="fa fa-tasks"></i>&nbsp;Task Lists</div>
                        </div>
                        <div className="scroll-area-sm">
                            <perfect-scrollbar className="ps-show-limits">
                                <div style={{ position: 'static' }} className="ps ps--active-y">
                                    <div className="ps-content">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div className="todo-indicator bg-warning"></div>
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left mr-2">
                                                            <div className="custom-checkbox custom-control">
                                                                <input className="custom-control-input"
                                                                    id="exampleCustomCheckbox12" type="checkbox" /><label className="custom-control-label"
                                                                        for="exampleCustomCheckbox12">&nbsp;</label>
                                                            </div>
                                                        </div>
                                                        <div className="widget-content-left">
                                                            <div className="widget-heading">Call Sam For payments <div className="badge badge-danger ml-2">Rejected</div>
                                                            </div>
                                                            <div className="widget-subheading"><i>By Bob</i></div>
                                                        </div>
                                                        <div className="widget-content-right">
                                                            <button className="border-0 btn-transition btn btn-outline-success">
                                                                <i className="fa fa-check"></i></button>
                                                            <button className="border-0 btn-transition btn btn-outline-danger">
                                                                <i className="fa fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </perfect-scrollbar>
                        </div>
                        <div className="d-block text-right card-footer">
                            <button className="mr-2 btn btn-link btn-sm">Cancel</button>
                            <button className="btn btn-primary">Add Task</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
