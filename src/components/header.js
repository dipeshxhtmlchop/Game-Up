import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo.png'

export default function Header() {
    const [navIcon, setNavIcon] = useState(true)
    const navIconToggle = () => {
        setNavIcon(!navIcon)
        console.log('-=-=-=-=-=-=-=', navIcon)
    }
    return (
        <>
            <div>
                <Navbar bg="dark" expand="lg" className="py-3">
                    <Container>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navIconToggle} />
                        {/* {navIcon === true ?
                            <span className='text-white'>true</span> :
                            <span className='text-white'>false</span>
                        } */}
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex justify-content-between align-items-center w-100 px-5 text-uppercase">
                                <div>
                                    <Link to="/about">About</Link>
                                </div>
                                <div>
                                    <Link to="/login" className='login-btn px-5 py-2'>log in</Link>
                                    <Link to="/joingame" className='joingame-btn px-5 py-2 ms-3'>Join Gameup</Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}