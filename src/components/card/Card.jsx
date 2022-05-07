import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ state}) => {
	return (
		<Link to={`/ctf/${state.title}`}>
			<div className="card">
				<h1>{state.title}</h1>
				<p>{state.desc}</p>
				{/* <p>{state.link}</p> */}
			</div>
		</Link>
	);
};

export default Card;
