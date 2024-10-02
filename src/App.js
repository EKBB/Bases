import { useState } from "react";
import { Button, Card, Container, Form} from "react-bootstrap";

const App = () =>{
  const title = "Bienvenidos a las bases de REACT";
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [data, setData] =useState({})

  const onChangeregister = (e)=>{
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;
    setData(nData);
    console.log(nData);
  }

  const onSubmit= () => {
    /* Enviar data al server */
    console.log(data)
  }

  const onChange = (e)=>{
    e.preventDefault();
    if(e.target.name === "email"){
      setemail(e.target.value)
    } else if(e.target.name === "password"){
      setpassword(e.target.value)
    }
    
    console.log(e.target.name)
    console.log(e.target.value)
  }

  return(
    <Container className="mt-3">
    <Card>
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Coreo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Ingresa tu correo electronico" name="email" onChange={onChange}/>
          </Form.Group>
          <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password" onChange={onChange}/>
          </Form.Group>
          <Button variant="primary" type="submit">Ingresar</Button>
        </Form>
        <p>{email}</p>
        <p>{password}</p>
      </Card.Body>
    </Card>

    <Card>
      <Card.Body>
        <Card.Title>Formulario Para registro de Usuarios</Card.Title>
        <Form>
            <Form.Group>
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="name" placeholder="Ingresa tu Nombre" onChange={onChangeregister}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control name="last_name" placeholder="Ingresa tus Apellidos"  onChange={onChangeregister}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo</Form.Label>
              <Form.Control name="email" type="email" placeholder="Ingresa tu Correo"  onChange={onChangeregister}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="password" type="password" placeholder="Ingresa tu Contraseña"  onChange={onChangeregister}/>
            </Form.Group>
            <Button variant="secondary" type="submit"  onClick={() =>onSubmit()}>Aceptar</Button>
          </Form>
      </Card.Body>
    </Card>

   </Container>

  );

};


export default App;
