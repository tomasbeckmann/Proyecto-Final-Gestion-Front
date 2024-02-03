import React from "react";
import "/workspaces/Proyecto-Final-Gestion-Front/src/css/tasks.css"
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTooltip,
} from "mdb-react-ui-kit";

export function Tasks() {
  return (
    <section className="gradient-custom-2 vh-100">
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol md="12" xl="10">
            <MDBCard className="mask-custom">
              <MDBCardBody className="p-4 text-white">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4">Lista de Tareas</h2>
                </div>
                <MDBTable className="text-white mb-0">
                  <MDBTableHead>
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Tarea</th>
                      <th scope="col">Prioridad</th>
                      <th scope="col">Feha de Inicio</th>
                      <th scope="col">Fecha de término</th>
                      <th scope="col">Status</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Deyruby Rincon</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <MDBBadge className="mx-2" color="danger">
                            High priority
                          </MDBBadge>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <span>01/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <span>02/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Done"
                        >
                          <MDBIcon
                            fas
                            icon="check"
                            color="success"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove"
                        >
                          <MDBIcon
                            fas
                            icon="trash-alt"
                            color="warning"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          alt="avatar 2"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Kate Moss</span>
                      </th>
                      <td className="align-middle">
                        <span>Make payment to Bluedart</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <MDBBadge className="mx-2" color="success">
                            Low priority
                          </MDBBadge>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <span>01/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <span>02/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Done"
                        >
                          <MDBIcon
                            fas
                            icon="check"
                            color="success"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove"
                        >
                          <MDBIcon
                            fas
                            icon="trash-alt"
                            color="warning"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                          alt="avatar 3"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Francisco Parra</span>
                      </th>
                      <td className="align-middle">
                        <span>Office rent</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <MDBBadge className="mx-2" color="warning">
                            Middle priority
                          </MDBBadge>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <span>01/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <span>02/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Done"
                        >
                          <MDBIcon
                            fas
                            icon="check"
                            color="success"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove"
                        >
                          <MDBIcon
                            fas
                            icon="trash-alt"
                            color="warning"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                          alt="avatar 4"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Alexa Chung</span>
                      </th>
                      <td className="align-middle">
                        <span>Office grocery shopping</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <MDBBadge className="mx-2" color="danger">
                            High priority
                          </MDBBadge>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <span>01/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <span>02/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Done"
                        >
                          <MDBIcon
                            fas
                            icon="check"
                            color="success"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove"
                        >
                          <MDBIcon
                            fas
                            icon="trash-alt"
                            color="warning"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th className="border-0">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                          alt="avatar 5"
                          style={{ width: "45px", height: "auto" }}
                        />
                        <span className="ms-2">Tomas Beckman</span>
                      </th>
                      <td className="border-0 align-middle">
                        <span>Ask for Lunch to Clients</span>
                      </td>
                      <td className="border-0 align-middle">
                        <h6 className="mb-0">
                          <MDBBadge className="mx-2" color="success">
                            Low priority
                          </MDBBadge>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <span>01/02/2024</span>
                      </td>
                      <td className="align-middle">
                        <span>02/02/2024</span>
                      </td>
                      <td className="border-0 align-middle">
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Done"
                        >
                          <MDBIcon
                            fas
                            icon="check"
                            color="success"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                        <MDBTooltip
                          tag="a"
                          wrapperProps={{ href: "#!" }}
                          title="Remove"
                        >
                          <MDBIcon
                            fas
                            icon="trash-alt"
                            color="warning"
                            size="lg"
                            className="me-3"
                          />
                        </MDBTooltip>
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}