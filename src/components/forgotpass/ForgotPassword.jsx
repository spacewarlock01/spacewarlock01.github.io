/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import './FlagQues.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

class ForgotPassword extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: '',
			ques: '',
			sol: '',
			link: '',
			saveFlagData: [],
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	getData = async () => {
		const auth = getAuth();
		sendPasswordResetEmail(auth, this.email)
			.then(() => {
				// Password reset email sent!
				console.log(this.email);
				window.alert('Password reset email sent to ' + this.email);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	handleChange(event) {
		let target = event.target;
		let value = target.type === 'checkbox' ? target.checked : target.value;
		let name = target.name;
		this.setState({
			[name]: value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.flag !== undefined) {
			this.email = this.state.flag;
			this.getData();
		}
	}
	render() {
		return (
			<div className="formCenter">
				<form className="formFields" onSubmit={this.handleSubmit}>
					<div className="formField">
						<input
							type="text"
							id="flag"
							className="formFieldInput"
							placeholder="Enter the Email:"
							name="flag"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>

					<div className="formField">
						<button className="formFieldButton">Submit</button>{' '}
					</div>
				</form>
			</div>
		);
	}
}

export default ForgotPassword;
