import React from 'react'
import { useState } from "react";
import { Button, Card, Container, Form } from 'react-bootstrap'

export const RecoverPassword = () => {
    const [email, setEmail] = useState("");  

    const onChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
  
    return (
    <Container>
        <Card>
            <Card.Body>
                <Card.Title></Card.Title>
                <Form.Control name='email' placeholder='Ingresa tu correo' onChange={onChange}></Form.Control>
                <Button>Recuperar Contraseña</Button>
            </Card.Body>
        </Card>
    </Container>
  )
}