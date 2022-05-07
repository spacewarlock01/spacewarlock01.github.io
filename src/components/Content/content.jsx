import React from 'react';
import './content.css';
import MainContent from '../MainContent/maincontent';
import Logo3 from '../Images/Logo3.png';

function Content() {
	return (
		<div className="content">
			<div>
				<img className="content_logo" src={Logo3} alt="" />
			</div>
			<MainContent />
		</div>
	);
}

export default Content;
