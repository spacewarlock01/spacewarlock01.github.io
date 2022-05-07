import React from 'react';
import AboutUS from '../Images/AboutUS.svg';
import Contact from '../Images/Contact.svg';
import Rules from '../Images/Rules.svg';
import './Cards.css';

function Cards() {
	return (
		<div className="cards">
			<div class="container1">
				<div class="card">
					<div class="box">
						<div class="cards_content">
							<h3>Rules</h3>
							<div>
								<img className="cards_image" src={Rules} alt="" />
							</div>
							<a href="# ">Download PDF</a>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="box">
						<div class="cards_content">
							<h3>Contact us</h3>
							<div>
								<img className="cards_image" src={Contact} alt="" />
							</div>
							<a href="# ">Contact</a>
						</div>
					</div>
				</div>

				<div class="card">
					<div class="box">
						<div class="cards_content">
							<h3>About us</h3>
							<div>
								<img className="cards_image" src={AboutUS} alt="" />
							</div>
							<a href="#aboutus">About Us</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cards;
