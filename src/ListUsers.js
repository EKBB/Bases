import React from 'react'
import { Button, Card, Col, Container, Nav, Row, Table } from 'react-bootstrap'

export const ListUsers = () => {

    const [user, setuser] = useState();
        getuser()
    useEffect(() => {
        
    }, []);

        const users = [{
            name: "Juan",
            lastName: "Solano",
            email: "Juan@edu.mx"
        }]

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
                           {
                            user.map((users, i)=>(
                                <tr>
                                <td>1 + i</td>
                                <td>Juan</td>
                                <td>Solano</td>
                                <td>Juan@edu.mx</td>
                                <td>
                                    <Row className='text-center'>
                                        <Col>
                                          <button>Actualizar</button>
                                        </Col>
                                        <Col>
                                          <button>borrar</button>
                                        </Col>
                                    </Row>
                                </td>
                            </tr>
                            ))
                           }
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
        </>
       
  )
}