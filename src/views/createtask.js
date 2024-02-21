import React from 'react';
import { useContext } from 'react';
import { Context } from "../store/appcontext"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const CreateTask = () => {

    const { actions } = useContext(Context)

    const handleTask = async (event) => {
        event.preventDefault();
        const inputData = Object.fromEntries(new FormData(event.target));
        console.log(inputData)
        actions.fetchTask(inputData)
    }

    return (
        <Container className='createtask-body'>
            <Row>
                <Col xs={12} sm={10} md={10} lg={10} xl={10} className="mx-auto">
                    <h2 className="text-center mb-4">Crear Tarea</h2>
                    <Form onSubmit={handleTask}>

                    <Form.Group controlId="user_id">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control as="select" name="user_id">
                                <option>Seleccione el Usuario</option>
                                <option value={1}>Tomas Beckmann</option>
                                <option value={2}>Francisco Parra</option>
                                <option value={3}>Deyruby Rincon</option>
                                <option value={4}>Freddy Lobo</option>
                                <option value={5}>Victor Fernandez</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="start_date">
                            <Form.Label>Fecha de Inicio</Form.Label>
                            <Form.Control type="date" name="start_date" />
                        </Form.Group>

                        <Form.Group controlId="end_date">
                            <Form.Label>Fecha de Termino</Form.Label>
                            <Form.Control type="date" name="end_date" />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" name="description" rows={3} />
                        </Form.Group>

                        <Form.Group controlId="status">
                            <Form.Label>Estatus</Form.Label>
                            <Form.Control as="select" name="status">
                                <option>Seleccione</option>
                                <option value={1}>En Progreso</option>
                                <option value={2}>Completado</option>
                                <option value={3}>Rechazado</option>
                            </Form.Control>
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-4">
                            Agregar Tarea
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};