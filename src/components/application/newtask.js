import React from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTextArea,
  MDBTooltip,
} from "mdb-react-ui-kit";

export  function NewTask() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#e2d5de" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol xl="10">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="p-5">
                <h2 className="mb-3">Crear nueva Tarea</h2>
                <div className="d-flex justify-content-center align-items-center mb-4">
                  <MDBTextArea
                    label="¿Qué tarea tienes que hacer hoy?"
                    id="textAreaExample"
                    rows={4}
                    wrapperClass="flex-fill"
                  />
                  <MDBBtn type="submit" size="lg" className="ms-2">
                    Añadir
                  </MDBBtn>
                </div>
                <MDBListGroup className="mb-0">
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                      />
                      Lista de tareas
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                        
                      />
                      Mantenimiento de planta
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Gestion de proyectos
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Visita a terreno
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckChecked"
                        className="me-3"
                        defaultChecked
                      />
                      Reunión departamento de operaciones
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                  <MDBListGroupItem className="d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div className="d-flex align-items-center">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheck"
                        className="me-3"
                      />
                      Morbi leo risus
                    </div>
                    <MDBTooltip
                      tag="a"
                      wrapperProps={{ href: "#!" }}
                      title="Remove item"
                    >
                      <MDBIcon fas icon="times" color="primary" />
                    </MDBTooltip>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}