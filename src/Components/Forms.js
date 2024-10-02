import React from 'react';
import { Container, Card, Form } from 'react-bootstrap';

export const Forms = ({title, questions}) => {
    const names =["Ulises","Leisla","Edwin","Ana"]
    const person={
        name:"jesus",
        LastName:"Salazar",
        age:24
        }
                const cuestionarios =[{
                  titulo: "Tecnología y Sociedad",
                  pregunta:[
                    "¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?",
                   "¿Qué impacto tiene la tecnología en las relaciones interpersonales?",
                   "Explica cómo las redes sociales han transformado el periodismo.",
                   "¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?",
                   "¿Cómo influye la digitalización en el sector educativo?",
                   "¿Cuál es el rol de la ética en el desarrollo tecnológico?"] 
                },{
                  titulo: "Ciencia y Medio Ambiente",
                  pregunta:[
                    "¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?",
                   "Explica el papel de la energía renovable en la lucha contra el cambio climático.",
                   "¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?",
                   "¿Qué desafíos enfrenta la humanidad para lograr una economía circular?",
                   "¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?",
                   "¿Cómo afecta la contaminación plástica a los ecosistemas marinos?"
                  ] 
                },{
                  titulo: "Historia y Política",
                  pregunta:[
                     "¿Cuáles fueron las principales causas de la Primera Guerra Mundial?",
                   "Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.",
                   "¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?",
                   "¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?",
                   "¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?",
                   "¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?"
                  ]
                  
                },{
                  titulo:"Economía y Finanzas",
                  pregunta:[
                     "¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?",
                   "¿Qué rol desempeñan los bancos centrales en la economía de un país?",
                   "¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?",
                   "¿Qué impacto tiene el comercio internacional en el crecimiento económico?",
                   "¿De qué manera la automatización está transformando el sector manufacturero?",
                   "¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas?"
                  ]
                  
                },{
                  titulo: "Cultura y Sociedad",
                  pregunta:[
                     "¿Cómo influyen las tradiciones culturales en la identidad de un país?",
                   "¿Qué impacto tiene la globalización en la homogeneización cultural?",
                   "¿Cuál es el papel de la música en la construcción de la identidad juvenil?",
                   "¿De qué manera el cine refleja los problemas sociales de una época?",
                   "¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?",
                   "¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos?"]
                  
              
                },{
                   titulo: "Ciencia y Tecnología",
                   pregunta:[
                     "¿Qué importancia tiene la ciencia de datos en la toma de decisiones empresariales?",
                   "Explica cómo la inteligencia artificial está revolucionando el campo de la medicina.",
                   "¿Qué rol juegan los avances en materiales en la innovación tecnológica?",
                   "¿Cómo influye la computación cuántica en el futuro de la ciberseguridad?",
                   "¿Qué impacto tienen los vehículos autónomos en la industria del transporte?",
                   "¿Cómo afecta el desarrollo de robots en la automatización industrial?"
                   ]
                  
                },{
                  titulo: "Psicología y Salud Mental",
                  pregunta:[
                     "¿Cómo influyen las redes sociales en la autoestima de los adolescentes?",
                   "Explica la relación entre el estrés y las enfermedades físicas.",
                   "¿Qué factores psicológicos influyen en la toma de decisiones?",
                   "¿De qué manera la pandemia afectó la salud mental a nivel global?",
                   "¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?",
                   "¿Qué impacto tiene la meditación en el control de la ansiedad?",
                  ]
                  
                },{
                  titulo: "Filosofía y Ética",
                  pregunta:[
                     "¿Cuál es el significado de la libertad en la filosofía de Jean-Paul Sartre?",
                   "¿De qué manera la ética utilitarista influye en la toma de decisiones morales?",
                   "Explica el concepto de justicia según John Rawls.",
                   "¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?",
                   "¿Cómo ha evolucionado la concepción del bien común a lo largo de la historia de la filosofía?",
                   "¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?",
                  ]
                  
                },{
                  titulo: "Educación y Aprendizaje",
                  pregunta:[
                     " ¿Qué papel juega la motivación intrínseca en el aprendizaje?",
                   "¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?",
                   "¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?",
                   "¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?",
                   "¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?",
                   "¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?",
                  ]
                  
                },{
                  titulo: "Deportes y Salud",
                  pregunta:["¿Cómo influye la práctica regular de ejercicio en la salud mental?",
                   "¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?",
                   "¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?",
                   "¿De qué manera la nutrición influye en el rendimiento deportivo?",
                   "¿Cómo afecta el dopaje en la ética del deporte profesional?",
                   "¿Qué impacto tiene el deporte en la cohesión social y comunitaria?"] 
                }]

                  
    return(
        <Container>
                    {
                        cuestionarios.map((cuest)=>(
                            <Card border="primary" style={{ width: '100%' }}>
                            <Card.Body >
                              <Card.Title variant="primary">{cuest.titulo}</Card.Title>
                              <Form>
                                {
                                        cuest.pregunta.map((p)=>(
                                            <Form.Group>
                                            <Form.Label>{p}</Form.Label>
                                              <Form.Control type="text" placeholder="Escribe tu respuesta"/>
                                          </Form.Group>
                                        ))
                                }
                              </Form>
                            </Card.Body>
                          </Card>
                        ))
                    }
      </Container>
    )
}

