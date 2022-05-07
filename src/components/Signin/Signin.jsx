/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Signin.css';
import { auth } from '../../firebase-config';
import { useHistory } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

function Signin() {
	let history = useHistory();

	const [RegisterName, setRegisterName] = useState('');
	const [RegisterUsername, setRegisterUsername] = useState('');
	const [RegisterEmail, setRegisterEmail] = useState('');
	const [RegisterPhno, setRegisterPhno] = useState('');
	const [RegisterPassword, setRegisterPassword] = useState('');

	const [LoginUsername, setLoginUsername] = useState('');
	const [LoginPassword, setLoginPassword] = useState('');

	const registerfdb = async () => {
		console.log('called register firestore');
		try {
			const userfdb = await addDoc(collection(db, 'users'), {
				RegisterName,
				RegisterUsername,
				RegisterEmail,
				RegisterPhno,
			});
			console.log(userfdb);
			console.log('Document written with ID: ', userfdb.id);
		} catch (error) {
			console.log(error.message);
		}
	};

	const register = async () => {
		console.log('called register');
		console.log();
		try {
			const user = await createUserWithEmailAndPassword(
				auth,
				RegisterEmail,
				RegisterPassword
			);
			console.log(user);
			registerfdb();
			history.push('/ctf');
		} catch (error) {
			console.log(error.message);
		}
	};

	const login = async () => {
		try {
			const user = await signInWithEmailAndPassword(auth, LoginUsername, LoginPassword);
			console.log(user);
			history.push('/ctf');
		} catch (error) {
			console.log(error.message);
		}
	};

	//unused
	const logout = async () => {
		await signOut(auth);
		history.push('/Signin');
	};

	useEffect(() => {
		const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');

		signUpButton.addEventListener('click', () => {
			container.classList.add('right-panel-active');
		});

		signInButton.addEventListener('click', () => {
			container.classList.remove('right-panel-active');
		});
	});

	useEffect(() => {});
	return (
		<div className="signin">
			<br />
			<div class="container" id="container">
				<div class="form-container sign-up-container">
					<div class="form">
						<h2>Create Account</h2>
						{/* <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div> */}
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Name"
							onChange={(event) => {
								setRegisterName(event.target.value);
							}}
						/>
						<input
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							onChange={(event) => {
								setRegisterUsername(event.target.value);
							}}
						/>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Email"
							onChange={(event) => {
								setRegisterEmail(event.target.value);
							}}
						/>
						<input
							type="text"
							id="phno"
							name="phno"
							placeholder="Phone Number"
							onChange={(event) => {
								setRegisterPhno(event.target.value);
							}}
						/>
						<input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							onChange={(event) => {
								setRegisterPassword(event.target.value);
							}}
						/>
						{/*<input type="password" placeholder="Confirm Password" />*/}
						<button onClick={register}>Sign Up</button>
					</div>
				</div>
				<div class="form-container sign-in-container">
					<div class="form">
						<h1>Sign in</h1>
						{/* <div class="social-container">
              <a href="#" class="social">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-google-plus-g"></i>
              </a>
              <a href="#" class="social">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div> */}
						{/* <span>or use your account</span> */}
						<input
							type="email"
							placeholder="Username"
							onChange={(event) => {
								setLoginUsername(event.target.value);
							}}
						/>
						<input
							type="password"
							placeholder="Password"
							onChange={(event) => {
								setLoginPassword(event.target.value);
							}}
						/>
						<Link to="/forgot">
							<a href="/ForgotPassword">Forgot your password?</a>
						</Link>
						<button onClick={login}>Sign In</button>
					</div>
				</div>
				<div class="overlay-container">
					<div class="overlay">
						<div class="overlay-panel overlay-left">
							<h1>Welcome Back!</h1>
							<p>To keep connected with us please login with your personal info</p>
							<button class="ghost" id="signIn">
								Sign In
							</button>
						</div>
						<div class="overlay-panel overlay-right">
							<h1>Hello, Friend!</h1>
							<p>Enter your personal details and start journey with us</p>
							<button class="ghost" id="signUp">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Signin;
