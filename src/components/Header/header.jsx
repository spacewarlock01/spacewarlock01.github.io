import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo3 from '../Images/Logo3.png';
import './header.css';

function header() {
	return (
		<div className="header">
			<Navbar bg="light" variant="light" expand="lg">
				<Navbar.Brand href="/">
					<img src={Logo3} className="header_logo" alt="" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto header_button">
						{/* <Nav.Link href="#aboutus" className="header_button_aboutus"> */}
						{/* About Us */}
						{/* </Nav.Link> */}
						<LinkContainer to="/signin">
							<Nav.Link href="" className="header_button_Signin">
								Signin
							</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/signin">
							<Nav.Link href="" className="header_button_Signup">
								Signup
							</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default header;
