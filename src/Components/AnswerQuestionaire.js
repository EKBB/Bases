import React from 'react';
import { Container, Card, Form } from 'react-bootstrap';

export const AnswerQuestionaire = (props) => {
    const [questionnaire, setquestionnaire] = useState(props.questionnaire);
    
    return(
        <>
        <Card>
            <Card.Body>
                <Card.Title>{questionnaire.title}</Card.Title>
                <Card.Text>{questionnaire.description}</Card.Text>
            
                <Form>
                {
                     questionnaire.questions.map((question)=>(
                        <Form.Group>
                            <Form.Label></Form.Label>
                                {
                                        ["checkbox", "radio"].includes(question.type) && (
                                            question.options.map((option)=>(
                                            <Form.Check>
                                                type={question.type}
                                                label={option}
                                            </Form.Check>
                                            ))
                                        ) || question.type === "text" && (
                                                <Form.Control></Form.Control>

                                        ) || question.type === "select" && (
                                            <Form.Select>
                                                <option></option>
                                                {question.options.map((option)=>(
                                                    <option>{option}</option>
                                                ))}
                                            </Form.Select>
                                        )
                                        
                                    
                                }
                        </Form.Group>
                    ))
                }

                </Form>
               
            
            </Card.Body>
        </Card>
        </>
    )
}