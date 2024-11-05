import { useState, useEffect } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"

export const Dashboard = () =>{
   const [user, setuser] = useState();
    
    useEffect(()=>{
        getUser()
    }, [])

    const getUser = ()=>{
        const user = JSON.parse(localStorage.user);
    }
    
    return(
        <Container>
            <Card>
                <Card.Title>Bienvenido de Nuevo {user.name}</Card.Title>
                <Card.Body>
                    <Row>
                        <Col>
                            <Card className="p-3">
                                <Card.Title>Numero de usuarios registrados: </Card.Title>
                                <Card.Body>
                                    85
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="p-3">
                                <Card.Title>Numero de usuarios Creados: </Card.Title>
                                <Card.Body>
                                    285
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>   
            </Card>
        </Container>
    )
}