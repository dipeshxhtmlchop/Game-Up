/* eslint-disable no-useless-concat */
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/images/logo.png';

export default function Header() {
    const [navIcon, setNavIcon] = useState(false)
    const navIconToggle = () => {
        setNavIcon(!navIcon)
    }
    const navItemsTrigger = () => {
        if (window.screen.width <= 991) {
            document.getElementsByClassName('navbar-toggler')[0].click();
        }
    }
    let location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
    }, [location])
    return (
        <>
            <div>
                <Navbar bg="dark" expand="lg" className={navIcon ? 'nav-active-custom' : '' + 'py-3'}>
                    <Container>
                        <Link to="/">
                            <img className="logo" src={Logo} alt="Logo" />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navIconToggle} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto d-flex justify-content-between align-items-center w-100 px-5 text-uppercase" onClick={navItemsTrigger}>
                                <div>
                                    <Link to="/about">About Us</Link>
                                </div>
                                <div className='login-signup'>
                                    <Link to="/login" className='login-btn px-md-5 px-3 py-2'>{location.pathname === '/query' ? 'Log Out'
                                        : location.pathname === '/results' ? 'Log Out'
                                            : location.pathname === '/profile' ? 'Log Out'
                                                : location.pathname === '/player-dash' ? 'Log Out'
                                                    : 'log in'}
                                    </Link>
                                    <Link to="/joingame" className='joingame-btn px-md-5 px-3 py-2 ms-3'>Join Gameup</Link>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    )
}