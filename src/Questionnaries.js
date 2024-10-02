import React from 'react';
import { Card, Container } from 'react-bootstrap';
import {Forms} from './Components/Forms';

const Questionnaries = () => {
        const cuestionario =[
           "¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?",
           "¿Qué impacto tiene la tecnología en las relaciones interpersonales?",
           "Explica cómo las redes sociales han transformado el periodismo.",
           "¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?",
           "¿Cómo influye la digitalización en el sector educativo?",
           "¿Cuál es el rol de la ética en el desarrollo tecnológico?"
    ]

    return(
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Cuestionarios de tarea</Card.Title>
                    <Forms title ="Tecnología y Sociedad" questions={cuestionario}/>
                    
                </Card.Body>
            </Card>
        </Container>

    )
}

export default Questionnaries;