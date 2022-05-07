import React from 'react';
import './Login2.css';

function Login2() {
	var dateobj = new Date();

	// Year from above object
	// is being fetched using getFullYear()
	var dateObject = dateobj.getFullYear();
	return (
		<div className="signin2">
			<div className="signin2_inputs">
				<div className="signin2_inputs_tomakeFlex">
					<div className="signin2_inputs_lock">
						<div>
							<i class="fas fa-lock"></i>
						</div>
					</div>
				</div>
				<div className="signin_text">
					<h3>Sign in</h3>
				</div>
				<div>
					<input
						type="text"
						name="username"
						placeholder="Username *"
						className="inputlogin2"
					/>
				</div>
				<div>
					<input
						type="text"
						name="username"
						placeholder="Password *"
						className="inputlogin2"
					/>
				</div>
				<div>
					<button className="buttonLogin2">Log in</button>
				</div>
			</div>
			<div>
				<div className="forgot_password">
					<a href=" ">Forgot Password?</a>
				</div>
				<div className="dont_signup">
					<a href=" ">Don't have an account? Sign Up</a>
				</div>
				<div className="copyright">
					<p>
						©️Copyright{' '}
						<span>
							<a href=" ">spacewarlock</a>
						</span>{' '}
						{dateObject}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login2;
