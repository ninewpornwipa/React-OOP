import React from "react";
import {Navbar,Container,Nav,Dropdown} from "react-bootstrap"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {Link} from "react-router-dom"

var MyFont = {
    color:'#FFFFFF',
    fontSize: '120%',
    fontFamily:'Bakbak One',
};

export const NavBar = () =>{
    return(
        <Navbar bg="dark" sticky='top' expand="md">
            <Container>
                <Navbar.Brand>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" alt="" height="20"></img>
                    <babel style={MyFont}>PORNWIPA KORNSUWAN</babel>
                </Navbar.Brand>
                    <Nav className='me-auto'>
                            
                            
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Root of Equation</Dropdown.Toggle>    
                        <Dropdown.Menu>
                            <Dropdown.Item href="/Bisection">Bisection</Dropdown.Item>
                            <Dropdown.Item href="/False">False Position</Dropdown.Item>
                            <Dropdown.Item href="/Onepoint">Onepoint Iteration</Dropdown.Item>
                            <Dropdown.Item href="/Newton">Newton Raphson</Dropdown.Item>
                            <Dropdown.Item href="/Secant">Secant Method</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Linear Algebraic Equation</Dropdown.Toggle>    
                        <Dropdown.Menu>
                            <Nav.Link as ={Link} to="/Bisection">Cramer's Rule</Nav.Link>
                            <Nav.Link as ={Link} to="/False">Guass Elimination Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Onepoint">Guass-Jordan Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Newton">Matrix Inversion Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Secant">LU Decomposition Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Secant">Cholesky Decomposition Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Secant">Jacobi Iteration Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Secant">Guass-Seidel Iteration Method</Nav.Link>
                            <Nav.Link as ={Link} to="/Secant">Conjugate Gradient Method</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="Dropdownbtn">
                        <Dropdown.Toggle variant="dark" id="dropdown-basic">Interpolation And Extrapolation</Dropdown.Toggle>    
                        <Dropdown.Menu>
                            <Nav.Link as ={Link} to="/Bisection">Newton's divided-differences</Nav.Link>
                            <Nav.Link as ={Link} to="/False">Lagrange polynomials</Nav.Link>
                            <Nav.Link as ={Link} to="/Onepoint">Spline interpolation</Nav.Link>
                        </Dropdown.Menu>
                    </Dropdown>                
                    </Nav>
                
            </Container>
        </Navbar>
    )
}