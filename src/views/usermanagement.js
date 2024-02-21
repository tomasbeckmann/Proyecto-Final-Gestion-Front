import "../css/usermanagement.css"
import { UserCard } from '../components/application/usercard'
import { Context } from "../store/appcontext"
import React, { useContext, useEffect } from "react";

export const UserManagement = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.fetchUserData()
        console.log(store.userdata)
    }, [])

    return (
        <>
          <div className="orden-usermanagement w-100">
            <div className="usermanagement-body">
              <div className="container mt-3 mb-4">
                <div className="row">
                  <div className="col-12 col-md-10 col-lg-12 mt-4 mt-lg-0 mx-auto">
                    <div className="row">
                      <div className="col-12">
                        <div className="user-dashboard-info-box table-responsive mb-0 bg-white p-4 shadow-sm">
                          <table className="table manage-candidates-top mb-0">
                            <thead>
                              <tr>
                                <th>Lista de Usuarios</th>
                                <th className="action text-right">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {store.userdata && store.userdata.map((user, index) => {
                                console.log(store.userdata.deleted)
                                if (user.deleted === false) {
                                  return (
                                    <UserCard
                                      key={index}
                                      name={user.name}
                                      lastname={user.last_name}
                                      rut={user.rut}
                                      userrol_id={user.user_rol_id}
                                      user_email={user.email}
                                      user_id={user.id}
                                    />
                                  )
                                } 
                              })
                              }
                            </tbody>
                          </table>
                         {/*  <div className="text-center mt-3 mt-sm-3">
                            <ul className="pagination justify-content-center mb-0">
                              <li className="page-item disabled"> <span className="page-link">Prev</span> </li>
                              <li className="page-item active" aria-current="page"><span className="page-link">1 </span><span className="sr-only">(current)</span></li>
                              <li className="page-item"><a className="page-link" href="#">2</a></li>
                              <li className="page-item"><a className="page-link" href="#">3</a></li>
                              <li className="page-item"><a className="page-link" href="#">...</a></li>
                              <li className="page-item"><a className="page-link" href="#">25</a></li>
                              <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
                            </ul>
                          </div>  */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )
}