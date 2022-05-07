import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const SpecificCardDisplay = ({ state }) => {
	return (
		// <Link to={`/ctf/${Crypto}/${state.id}`}>
		<Link to={`${window.location.pathname}/${state.id}`}>
			<div className="card">
				<h1>{state.title}</h1>
				<p>{state.desc}</p>
			</div>
		</Link>
	);
};

export default SpecificCardDisplay;
