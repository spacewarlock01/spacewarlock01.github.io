import React from 'react';
import './footer.css';

function Footer() {
	var dateobj = new Date();

	// Year from above object
	// is being fetched using getFullYear()
	var dateObject = dateobj.getFullYear();
	return (
		<div>
			<section id="footer">
				<div className="footer_div">
					<a href=" ">
						<i class="fab fa-facebook fa-2x font-awesome-copyright"></i>
					</a>
					<a href=" ">
						<i class="fab fa-instagram fa-2x font-awesome-copyright"></i>
					</a>
					<a href=" ">
						<i class="fab fa-linkedin fa-2x font-awesome-copyright"></i>
					</a>
					<a href=" ">
						<i class="fab fa-twitter fa-2x font-awesome-copyright"></i>
					</a>
				</div>

				<div className="footer_div_companyname">
					<p class="Copyright">
						©️Copyright {dateObject} <span>spacewarlock</span>
					</p>
				</div>
			</section>
		</div>
	);
}

export default Footer;
