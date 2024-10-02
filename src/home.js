import React from 'react'
import { Button, Card, Container, Nav, Table } from 'react-bootstrap'

export const Home = () => {

    return (

        <>
         <Nav>
            <Nav.Item>
                <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link>Base</Nav.Link>
            </Nav.Item> <Nav.Item>
                <Nav.Link>Crear Nuevo Cuestionario</Nav.Link>
            </Nav.Item>
        </Nav>
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Lista de Usuarios</Card.Title>
                    <Button>Agregar usuario</Button>

                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Juan</td>
                                <td>Solano</td>
                                <td>Juan@edu.mx</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
        </>
       
  )
}