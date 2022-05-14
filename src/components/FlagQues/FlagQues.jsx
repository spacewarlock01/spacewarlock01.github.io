/* eslint-disable no-unused-vars */
import React, { Component, useState } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
//import './FlagQues.css';
import { Link } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import Logo3 from '../Images/Logo3.png';
//import background_flag_image from './background_flag_image.jpg';
// import {imagebackground} from './background_flag_image.jpg';
// import background from "./background_flag_image.jpg";
import backbutton from './backbutton';

class FlagQues extends Component {
	// const {id} = useParams();
	// const ques = [
	//     {1:"ques1"},
	//     {2:"ques2"},

	// ]

	

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

	componentDidMount() {
		this.id = /[^/]*$/.exec(window.location.pathname)[0];
		this.getData();
	}
	getData = async () => {
		const querySnapshot = await getDocs(collection(db, 'flags'));
		querySnapshot.forEach((doc) => {
			// eslint-disable-next-line eqeqeq
			if (doc.data()['id'] == this.id) {
				this.saveFlagData = doc.data();
				this.ques = this.saveFlagData['question'];
				this.sol = this.saveFlagData['solution'];
				this.link = '//' + this.saveFlagData['link'];
			}
		});
		this.setState({});
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
		console.log(event.id);
		if (this.state.flag === this.sol) {
			window.alert('Well Done! Correct Answer');
		} else {
			window.alert('Thats a wrong answer Try it again!');
		}
	}

	handleBack(event) {
		event.preventDefault();
		let url = window.location.href;	
		window.location.href = url.slice(0, url.lastIndexOf('/'));
	}

	formSubmit() {
		console.log("Form submitted");
	}


	render() {
    

		const myStyle = {
			backgroundImage:
				"url('https://www.androidguys.com/wp-content/uploads/2015/11/earth-space-hd-wallpaper-2560x1600-9560.jpg')",
			height: '1000px',
			width: '1550px',
			marginTop: '-140px',
			fontSize: '50px',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
		};
		return (
			<div className="formCenter"
				style={myStyle}
			// style={{
			// 	backgroundColor: 'lightblue',
			// 	width: '1550px',
			// 	height: '900px',
			// }}
			>
		    <Link to={'/ctf'}>
			<div style={{}}>
				<img src={Logo3} className="header_logo" style={{width: 200, marginRight:1800, paddingTop:0, }} alt="" />
			</div>
			</Link>
			
				{/* <img src={Logo3} className="header_logo" style={{width: 200, marginRight:1800, }} alt="" /> */}
				<form className="formFields" onSubmit={this.formSubmit}>
					<div className="formField" style={{marginTop:100}} >
						<Link to={this.link || '//localhost:3000/ctf'} target="_blank">
							<label className="formFieldLabel" style={{ color: "RebeccaPurple", textTransform: 'capitalize', fontSize: 25, fontFamily: "serif"}}>
								<b>Question: {this.ques || 'Loading...'}</b>
							</label>
						</Link>
						<input
							type="text"
							id="flag"
							className="formFieldInput"
							style={{ fontSize: 20, color: "white" }}
							placeholder="Format to submit the flag: flag{Submit_Like_This}"
							name="flag"
						/>
					</div>

					{/* <button className='back'> back </button> */}
					{/* <button className="formFieldButton" style={{fontSize:15, marginRight:500}}>Back</button>{' '} */}

					<div className="formField">
						{/* <a href="C:\Users\kshitij mehta\Desktop\Space Warlock" target="_blank" ><button type='button'>DownLoad</button></a> */}
						<button  className="formFieldButton" onClick={this.handleBack} style={{ fontSize: 15, marginRight: 50 }}>Back</button>{' '}
						<button className="formFieldButton" onClick={this.handleSubmit} style={{ fontSize: 15 }}>Submit</button>{' '}
					</div>
				</form>

			</div>
		);
	}
}

// Get a list of cities from your database

export default FlagQues;
