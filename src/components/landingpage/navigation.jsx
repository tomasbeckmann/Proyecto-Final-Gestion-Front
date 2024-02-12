import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navigation = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">DATAGATHER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">FUNCIONALIDADES</Nav.Link>
            <Nav.Link href="#pricing">SERVICIOS</Nav.Link>
            <Nav.Link href="#pricing">NOSOTROS</Nav.Link>
            <Nav.Link href="#pricing">TESTIMONIOS</Nav.Link>
            <Nav.Link href="#pricing">EQUIPO</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link href="#deets">CONTACTANOS</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              LOGIN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





    // <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span className="sr-only">Toggle navigation</span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //       </button>
    //       <a className="navbar-brand page-scroll" href="#page-top">
    //         DataGather
    //       </a>{" "}
    //     </div>

    //     <div
    //       className="collapse navbar-collapse "
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       <ul className="nav navbar-nav navbar-right force-navbar">
    //         <li className="force-li">
    //           <a href="#features" className="page-scroll">
    //             Funcionalidades
    //           </a>
    //         </li>
    //         <li className="force-li">
    //           <a href="#about" className="page-scroll">
    //             Nosotros
    //           </a>
    //         </li>
    //         <li className="force-li">
    //           <a href="#services" className="page-scroll">
    //             Servicios
    //           </a>
    //         </li>
    //         <li className="force-li">
    //           <a href="#testimonials" className="page-scroll">
    //             Testimonio
    //           </a>
    //         </li>
    //         <li className="force-li">
    //           <a href="#team" className="page-scroll">
    //             Equipo
    //           </a>
    //         </li>
    //         <li className="force-li">
    //           <a href="#contact" className="page-scroll">
    //             Contacto
    //           </a>
    //         </li>
            
    //         <li className="force-li">
    //         <a
    //               href="#features"
    //               className="page-scroll"
    //             >
    //               Sign up
    //             </a>{" "}
    //             </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
