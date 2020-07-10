// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import fire from './fire';
// import Firebase from 'firebase';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			dob: '',
			aboutMe: '',
			lowPrice: '',
			highPrice: '',
			minHousemates: '',
			maxHousemates: '',
			minBed: '',
			maxBed: '',
			minBath: '',
			maxBath: '',
			wantGarage: false,
			noGarage: false,
			hasPets: false,
			noPets: false,
			route10: false,
			route15: false,
			route16: false,
			route19: false,
			route20: false,
			route22: false,
			beach: false,
			downtown: false,
			campus: false
		};
	}

	handleChange = (evt) => {
		const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		this.setState({
			...this.state,
			[evt.target.name]: value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
/*		this.setState({
			showName: true
		});
*/		console.log(this.state.firstName);
		console.log(this.state.lastName);
		console.log(this.state);
		const renterRef = fire.database().ref('renter');
		const renter = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			dob: this.state.dob,
			aboutMe: this.state.aboutMe,
			lowPrice: this.state.lowPrice,
			highPrice: this.state.highPrice,
			minHousemates: this.state.minHousemates,
			maxHousemates: this.state.maxHousemates,
			minBed: this.state.minBed,
			maxBed: this.state.maxBed,
			minBath: this.state.minBath,
			maxBath: this.state.maxBath,
			wantGarage: this.state.wantGarage,
			noGarage: this.state.noGarage,
			hasPets: this.state.hasPets,
			noPets: this.state.noPets,
			route10: this.state.route10,
			route15: this.state.route15,
			route16: this.state.route16,
			route19: this.state.route19,
			route20: this.state.route20,
			route22: this.state.route22,
			beach: this.state.beach,
			downtown: this.state.downtown,
			campus: this.state.campus
		}
		renterRef.push(renter);
		this.setState({
			firstName: '',
			lastName: '',
			dob: '',
			aboutMe: '',
			lowPrice: '',
			highPrice: '',
			minHousemates: '',
			maxHousemates: '',
			minBed: '',
			maxBed: '',
			minBath: '',
			maxBath: '',
			wantGarage: false,
			noGarage: false,
			hasPets: false,
			noPets: false,
			route10: false,
			route15: false,
			route16: false,
			route19: false,
			route20: false,
			route22: false,
			beach: false,
			downtown: false,
			campus: false
		});


//		this.setState({ text: '' });
// 		e.preventDefault();
	}

/*	state = {
		firstName: '',
		lastName: '',
		lowPrice: '',
		highPrice: '',
		minHousemates
//		showName: false
	}
*/

/*	function Form() {
		const [state, setState] = React.useState({
			firstName: "",
			lastName: ""
	})
*/

/*	const [state, setState] = React.useState({
		firstName: "",
		lastName: ""
	})
*/
/*	function handleChange(evt) {
		const value = evt.target.value;
		setState({
			...state,
			[evt.target.name]: value
		});
	}
*/

/*	displayNameHandler = (e) => {
		let first_name = e.target.value;
		let last_name = e.target.value;
		this.setState({ firstName: first_name, lastName: last_name });
		console.log(this.state);  
	}
*/

/*	handleChange = event => {
		this.setState({ firstName: event.target.value });
	};
*/
/*	handleSubmit = event => {
		event.preventDefault();
		alert('Your firstName is: ' + this.firstName.value);
	};
	onSubmit = event => {
		event.preventDefault();
		const firstName = this.firstName.value;
//		const age = this.age.value;
//		const info = {"firstName": firstName};
		const data = [{"name":firstName}];
//		data.push(info);
		this.setState({
			data: data
		});
	};
*/

	render() {
	return (
		<React.Fragment>
		<form onSubmit={this.handleSubmit}>
		<div className="App">
			<header className="Profile">
				<h1>Your Profile</h1>
			</header>
			<header className="Names">
				<label>First Name:&nbsp;</label>
				<input type = "text"
					id = "firstName"
					name = "firstName"
					onChange = {this.handleChange}
					value={this.state.firstName}
					placeholder = "First Name" />
				<label>&nbsp;&nbsp;Last Name:&nbsp;</label>
				<input type = "text"
					id = "lastName"
					name = "lastName"
					onChange = {this.handleChange}
					value = {this.state.lastName}
					placeholder = "Last Name"/>
			</header>
			<br/>
			<br/>
			<header className="DOB">
				<label>Date of Birth:</label>
				<br/>
				<input type="date"
					id = "dob"
					name = "dob"
					min = "1900-01-01"
					max = "2010-01-01"
					value = {this.state.dob}
					onChange = {this.handleChange}/>
			</header>
			<br/>
			<br/>
			<header className="AboutMe">
				<label>About Me:</label>
				<br/>
				<textarea
					id = "aboutMe"
					name = "aboutMe"
					placeholder = "Tell the landlords a little bit about yourself here"
					rows = "5"
					cols = "50"
					value = {this.state.aboutMe}
					onChange = {this.handleChange}/>
				{/*</textarea>*/}
			</header>
			<br/>
			<br/>
			<h3 className="Preferences">Please indicate your housing preferences in this section:</h3>
			<br/>
			<header className="PriceRange">
				<label>Price Range:&nbsp;$</label>
				<input
					type = "text"
					name = "lowPrice"
					id = "lowPrice"
					onChange = {this.handleChange}
					value = {this.state.lowPrice}
					placeholder = "Low End"/>
				<label>&nbsp;to&nbsp;$</label>
				<input
					type = "text"
					id = "highPrice"
					name = "highPrice"
					onChange = {this.handleChange}
					value = {this.state.highPrice}
					placeholder = "High End"/>
			</header>
			<br/>
			<br/>
			<header className="Housemates">
				<label>Number of Housemates:&nbsp;</label>
				<input
					type = "text"
					id = "minHousemates"
					name = "minHousemates"
					onChange = {this.handleChange}
					value = {this.state.minHousemates}
					placeholder = "Min # of Housemates"/>
				<label>&nbsp;to&nbsp;</label>
				<input
					type = "text"
					id = "maxHousemates"
					name = "maxHousemates"
					onChange = {this.handleChange}
					value = {this.state.maxHousemates}
					placeholder = "Max # of Housemates"/>
			</header>
			<br/>
			<br/>
			<header className="Rooms">
				<label>Number of Bedrooms:&nbsp;</label>
				<input
					type = "text"
					id = "minBed"
					name = "minBed"
					onChange = {this.handleChange}
					value = {this.state.minBed}
					placeholder = "Min # of Bedrooms"/>
				<label>&nbsp;to&nbsp;</label>
				<input
					type = "text"
					id = "maxBed"
					name = "maxBed"
					onChange = {this.handleChange}
					value = {this.state.maxBed}
					placeholder = "Max # of Bedrooms"/>
			</header>
			<br/>
			<br/>
			<header className="Bathrooms">
				<label>Number of Bathrooms:&nbsp;</label>
				<input
					type = "text"
					id = "minBath"
					name = "minBath"
					onChange = {this.handleChange}
					value = {this.state.minBath}
					placeholder = "Min # of Bathrooms"/>
				<label>&nbsp;to&nbsp;</label>
				<input
					type = "text"
					id = "maxBath"
					name = "maxBath"
					onChange = {this.handleChange}
					value = {this.state.maxBath}
					placeholder = "Max # of Bathrooms"/>
			</header>
			<br/>
			<br/>
			<header className="Garage">
				<label>Garage?&nbsp;&nbsp;</label>
				<input
					type = "checkbox"
					id = "wantGarage"
					name = "wantGarage"
					checked = {this.state.wantGarage}
					onChange = {this.handleChange}/>
				<label>Yes&nbsp;&nbsp;</label>
				<input
					type = "checkbox"
					id = "noGarage"
					name = "noGarage"
					onChange = {this.handleChange}
					checked = {this.state.noGarage}/>
				<label>No</label>
			</header>
			<br/>
			<br/>
			<header className="Pets">
				<label>Will you have any pets?&nbsp;&nbsp;</label>
				<input
					type = "checkbox"
					id = "hasPets"
					name = "hasPets"
					onChange = {this.handleChange}
					checked = {this.state.hasPets}/>
				<label>Yes&nbsp;&nbsp;</label>
				<input
					type = "checkbox"
					id = "noPets"
					name = "noPets"
					onChange = {this.handleChange}
					checked = {this.state.noPets}/>
				<label>No</label>
			</header>
			<br/>
			<br/>
			<header className="Bus">
				<label>Preferred Bus Routes:</label>
				<br/>
				<input
					type = "checkbox"
					id = "route10"
					name = "route10"
					onChange = {this.handleChange}
					checked = {this.state.route10}/>
				<label>Route 10</label>
				<br/>
				<input
					type = "checkbox"
					id = "route15"
					name = "route15"
					onChange = {this.handleChange}
					checked = {this.state.route15}/>
				<label>Route 15</label>
				<br/>
				<input
					type = "checkbox"
					id = "route16"
					name = "route16"
					onChange = {this.handleChange}
					checked = {this.state.route16}/>
				<label>Route 16</label>
				<br/>
				<input
					type = "checkbox"
					id = "route19"
					name = "route19"
					onChange = {this.handleChange}
					checked = {this.state.route19}/>
				<label>Route 19</label>
				<br/>
				<input
					type = "checkbox"
					id = "route20"
					name = "route20"
					onChange = {this.handleChange}
					checked = {this.state.route20}/>
				<label>Route 20</label>
				<br/>
				<input
					type = "checkbox"
					id = "route22"
					name = "route22"
					onChange = {this.handleChange}
					checked = {this.state.route22}/>
				<label>Route 22</label>
			</header>
			<br/>	
			<br/>
			<header className="Location">
				<label>Location:</label>
				<br/>
				<input
					type = "checkbox"
					id = "beach"
					name = "beach"
					onChange = {this.handleChange}
					checked = {this.state.beach}/>
				<label>Near the Beach</label>
				<br/>
				<input
					type = "checkbox"
					id = "downtown"
					name = "downtown"
					onChange = {this.handleChange}
					checked = {this.state.downtown}/>
				<label>Near Downtown</label>
				<br/>
				<input
					type = "checkbox"
					id = "campus"
					name = "campus"
					onChange = {this.handleChange}
					checked = {this.state.campus}/>
				<label>Near Campus</label>
			</header>
			<br/>
			<br/>
{/*			<button type="submit" className="btn btn-primary">Save</button> */}
{/*			<button type="button" onClick={this.onSubmit} className="btn">Save</button>*/}
			 <button type="submit" onClick={this.handleSubmit}>Submit</button>
{/*			{this.state.showName && <p>"FirstName: " {this.state.firstName}</p>}*/}
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
		</form>
{/*		<h1>Your name is: {this.state.firstName}</h1>*/}
		</React.Fragment>
	);
}
}
export default App;
