import "/workspaces/Proyecto-Final-Gestion-Front/src/css/filefolder.css"
import { Sidebar } from '../components/application/sidebar'

export const FileFolder = () => {
    return (
        <>
            <div className="orden-filefolder">
                <Sidebar />
                <div className="filefolderbody container flex-grow-1 light-style container-p-y">
                    <div className="container-m-nx container-m-ny bg-lightest mb-3">
                        <h1>DataGather</h1>
                        <hr className="m-0" />

                        <div className="file-manager-actions container-p-x py-2">
                            <div>
                                <button type="button" className="btn btn-primary mr-2"><i className="ion ion-md-cloud-upload"></i>&nbsp; Upload</button>
                                <button type="button" className="button-spacing btn btn-secondary icon-btn mr-2" disabled=""><i className="ion ion-md-cloud-download"></i></button>
                                <div className="btn-group button-spacing mr-2">
                                    <button type="button" className="button-spacing btn btn-default md-btn-flat dropdown-toggle px-2" data-toggle="dropdown"><i className="ion ion-ios-settings"></i></button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="">Move</a>
                                        <a className="dropdown-item" href="">Copy</a>
                                        <a className="dropdown-item" href="">Remove</a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                    <label className="btn btn-default icon-btn md-btn-flat active">
                                        <input type="radio" name="file-manager-view" value="file-manager-col-view" checked="" />
                                        <span className="ion ion-md-apps"></span>
                                    </label>
                                    <label className="btn btn-default icon-btn md-btn-flat">
                                        <input type="radio" name="file-manager-view" value="file-manager-row-view" />
                                        <span className="ion ion-md-menu"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <hr className="m-0" />
                    </div>

                    <div className="file-manager-container file-manager-col-view">
                        <div className="file-manager-row-header">
                            <div className="file-item-name pb-2">Filename</div>
                            <div className="file-item-changed pb-2">Changed</div>
                        </div>

                        <div class="file-item">
                            <div class="file-item-icon file-item-level-up fas fa-level-up-alt text-secondary"></div>
                            <a href="javascript:void(0)" class="file-item-name">
                                ..
                            </a>
                        </div>

                        <div className="file-item">
                            <div className="file-item-select-bg bg-primary"></div>
                            <label className="file-item-checkbox custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" />
                                <span className="custom-control-label"></span>
                            </label>
                            <div className="file-item-icon far fa-file-archive text-secondary"></div>
                            <a href="" className="file-item-name">
                                Archive.zip
                            </a>
                            <div className="file-item-changed">02/16/2018</div>
                            <div className="file-item-actions btn-group">
                                <button type="button" className="btn btn-default btn-sm rounded-pill icon-btn borderless md-btn-flat hide-arrow dropdown-toggle" data-toggle="dropdown">
                                    <i className="ion ion-ios-more"></i>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="">Rename</a>
                                    <a className="dropdown-item" href="">Move</a>
                                    <a className="dropdown-item" href="">Copy</a>
                                    <a className="dropdown-item" href="">Remove</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
