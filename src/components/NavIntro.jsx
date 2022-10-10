import React from 'react';

// React-Bootstrap requirements imported here
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import cliffsPhoto from '../Images/matt_cliffs.jpg';


function NavIntro() {
    return(
        <div>

    {/* Full Navigation Bar and Intro Section Together */}

            <section id="NavIntro" className="nav-intro">

        {/* Navbar Section */}

                <div>
                    <Navbar className="nav-section container" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Matt.</Navbar.Brand>
                            <Nav className="ms-auto">
                                <Nav.Link href="#About">About</Nav.Link>
                                <Nav.Link href="#Projects">Projects along the Way</Nav.Link>
                                <Nav.Link href="#Skills">Skills/Experience</Nav.Link>
                                <Nav.Link href="#Testimonials">Testimonials</Nav.Link>
                                <Nav.Link href="#Contact">Contact Me</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>

        {/* Intro Section  */}
                
                <div className="row intro-section">
                    <div className="col-lg-4">
                        <img src="" alt="person"></img>
                    </div>
                    <div className="col-lg-4">
                        <h1 className="intro-title">Welcome! <br></br> I'm Matt Roger, a Software Engineer.</h1>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <img className='matt-photo' src={cliffsPhoto} alt="person" width="400" height="300"></img>
                    </div>
                </div>

            </section>
            
        </div>
    )
}

export default NavIntro;