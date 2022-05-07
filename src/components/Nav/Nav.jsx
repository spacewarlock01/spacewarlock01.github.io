import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo3 from '../Images/Logo3.png';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Aboutus from '../Aboutus/Aboutus';
// import profile from '../../assets/user.png'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { useHistory } from 'react-router-dom';

function Nav1() {
	let history = useHistory();

	const logout = async () => {
		await signOut(auth);
		history.push('/Signin');
	};

	return (
		<div>
			<div className="header">
				<Navbar bg="light" variant="light" expand="lg" fixed="top">
					<Navbar.Brand href="/ctf">
						<img src={Logo3} className="header_logo" alt="" />
					</Navbar.Brand>
					<h1>Capture The Flag</h1>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto header_button">
							{/* <Nav.Link href="#aboutus" className="header_button_aboutus"> */}
							{/* About Us */}
							{/* </Nav.Link> */}
							<LinkContainer to="/Aboutus">
								{/* <Link to="/AboutUs"> */}
								{/* <a href="/ForgotPassword">Forgot your password?</a> */}

								<Nav.Link href="/src/components/Aboutus/Aboutus.jsx" className="header_button_Signin">
									About us
								</Nav.Link>
								{/* </Link> */}
							</LinkContainer>
							<LinkContainer onClick={logout} to="#">
								<Nav.Link className="header_button_Signup">
									Logout
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
			<h1 className='hello'>hello</h1>
		</div>

	);
}
export default Nav1;
