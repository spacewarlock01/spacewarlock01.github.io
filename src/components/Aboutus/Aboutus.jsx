import React from 'react';
import './Aboutus.css';
import sargam from '../Images/Sargam_profile.jpg';
import sanchit from '../Images/sanchit_profile.jpg';
import kshitij from '../Images/kshitij_profile.jpeg'
import sanya from '../Images/sanya_profile.jpeg'
import prachi from '../Images/prachi_profile.jpeg'
import yogita from '../Images/yogita_profile.png'


function Aboutus() {
	return (
		<div id="aboutus" className="aboutus_div">
			<h1>Our Team</h1>
			<div className="row">
				<div className="col">
					<img src={sargam} alt="" />
					<h3>Sargam</h3>
				</div>
				<div className="col">
					<img src={sanya} alt="" />
					<h3>Sanya</h3>
				</div>
				<div className="col">
					<img src={kshitij} alt="" />
					<h3>Kshitij</h3>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<img src={prachi} alt="" />
					<h3>Dr. Prachi (Mentor)</h3>
				</div>
				<div className="col">
					<img src={sanchit} alt="" />
					<h3>Sanchit</h3>
				</div>
				<div className="col">
					<img src={yogita} alt="" />
					<h3>Dr. Yogita (Mentor)</h3>
				</div>
			</div>
		</div>
	);
}

export default Aboutus;
