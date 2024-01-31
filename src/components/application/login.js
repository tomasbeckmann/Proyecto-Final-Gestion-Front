
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

export function Login() {
  return (
    <>
    <h1 className='d-flex justify-content-center'>Ingresar al sistema</h1>
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Correo' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Contraseña' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Recordar'/>
        <a href="!#">¿Olvidaste tu Contraseña?</a>
      </div>

      <MDBBtn className="mb-4">Ingresar</MDBBtn>

      <div className="text-center">
        <p>¿No eres miembro? <a href="#!">Regístrate</a></p>
      </div>

    </MDBContainer>
    </>
  );

}


