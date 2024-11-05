import React from 'react'
import { Nav } from 'react-bootstrap'

export const Header = () => {

    const user = JSON.parse(localStorage.user);
    
    return (
         <Nav>
            {
                user.rol === "administrador" &&(
                    <>
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/list-q">Lista de cuestionarios</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item>
                            <Nav.Link href="/list-users">LIsta de usuarios</Nav.Link>
                        </Nav.Item>
                    </>
                )
            }
            {
                user.rol === "client" && 
                (
                    <Nav.Item>
                            <Nav.Link href="/list-q">Home</Nav.Link>
                    </Nav.Item>
                )
            }
            
        </Nav>
      
       
  )
}