
export const UserCard = ({name, lastname,rut,userrol_id }) => {

    return (
        <tr className="candidates-list">
            <td className="title">
                <div className="thumb">
                    <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                </div>
                <div className="candidate-list-details">
                    <div className="candidate-list-info">
                        <div className="candidate-list-title">
                            <h5 className="mb-0">{`${name} ${lastname}`}</h5>
                        </div>
                        <div className="candidate-list-option">
                            <ul className="list-unstyled">
                                <li>{rut}</li>
                                <li>{userrol_id}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </td>
            <td className="candidate-list-favourite-time text-center">
                <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                <span className="candidate-list-time order-1">Shortlisted</span>
            </td>
            <td>
                <ul className="list-unstyled mb-0 d-flex justify-content-end">
                    <li><a href="#" className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>
                    <li><a href="#" className="text-info" data-toggle="tooltip" title="" data-original-title="Edit"><i className="fas fa-pencil-alt"></i></a></li>
                    <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete"><i className="far fa-trash-alt"></i></a></li>
                </ul>
            </td>
        </tr>
    )
}