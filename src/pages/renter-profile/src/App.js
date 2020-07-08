// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import fire from './fire';

class App extends Component {
	render() {
	return (
		<div className="App">
			<header className="Profile">
				<h1>Your Profile</h1>
			</header>
			<header className="Names">
				<label>First Name:&nbsp;</label>
				<input type = "text"
					id = "firstName"
					placeholder = "First Name" />
				<label>&nbsp;&nbsp;Last Name:&nbsp;</label>
				<input type = "text"
					id = "lastName"
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
					max = "2010-01-01"/>
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
					cols = "50">
				</textarea>
			</header>
			<br/>
			<br/>
			<h3 className="Preferences">Please indicate your housing preferences in this section:</h3>
			<br/>
			<header className="PriceRange">
				<label>Price Range:&nbsp;$</label>
				<input
					type = "text"
					id = "lowPrice"
					placeholder = "Low End"/>
				<label>&nbsp;to&nbsp;$</label>
				<input
					type = "text"
					id = "highPrice"
					placeholder = "High End"/>
			</header>
			<br/>
			<br/>
			<header className="Housemates">
				<label>Number of Housemates:&nbsp;</label>
				<input
					type = "text"
					id = "minHousemates"
					placeholder = "Min # of Housemates"/>
				<label>&nbsp;to&nbsp;</label>
				<input
					type = "text"
					id = "maxHousemates"
					placeholder = "Max # of Housemates"/>
			</header>
			<br/>
			<br/>
			<header className="Rooms">
				<label>Number of Bedrooms:&nbsp;</label>
				<input
					type = "text"
					id = "minRooms"
					placeholder = "Min # of Bedrooms"/>
				<label>&nbsp;to&nbsp;</label>
				<input
					type = "text"
					id = "maxRooms"
					placeholder = "Max # of Bedrooms"/>
			</header>
			<br/>
			<br/>
			<header className="Bathrooms">
				<label>Number of Bathrooms:&nbsp;</label>
				<input
					type = "text"
					id = "minBath"
					placeholder = "Min # of Bathrooms"/>
				<label>&nbsp;to&nbsp;</label>
				<input
					type = "text"
					id = "maxBath"
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
					value = "Yes"/>
				<label>Yes&nbsp;&nbsp;</label>
				<input
					type = "checkbox"
					id = "noGarage"
					name = "noGarage"
					value = "No"/>
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
					value = "Yes"/>
				<label>Yes&nbsp;&nbsp;</label>
				<input
					type = "checkbox"
					id = "noPets"
					name = "noPets"
					value = "No"/>
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
					value = "route10"/>
				<label>Route 10</label>
				<br/>
				<input
					type = "checkbox"
					id = "route15"
					name = "route15"
					value = "route15"/>
				<label>Route 15</label>
				<br/>
				<input
					type = "checkbox"
					id = "route16"
					name = "route16"
					value = "route16"/>
				<label>Route 16</label>
				<br/>
				<input
					type = "checkbox"
					id = "route19"
					name = "route19"
					value = "route19"/>
				<label>Route 19</label>
				<br/>
				<input
					type = "checkbox"
					id = "route20"
					name = "route20"
					value = "route20"/>
				<label>Route 20</label>
				<br/>
				<input
					type = "checkbox"
					id = "route22"
					name = "route22"
					value = "route22"/>
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
					value = "beach"/>
				<label>Near the Beach</label>
				<br/>
				<input
					type = "checkbox"
					id = "downtown"
					name = "downtown"
					value = "downtown"/>
				<label>Near Downtown</label>
				<br/>
				<input
					type = "checkbox"
					id = "campus"
					name = "campus"
					value = "campus"/>
				<label>Near Campus</label>
			</header>
			<br/>
			<br/>
			<input type="submit" onclick="getProfileInfo();"/>
			<br/>
			<br/>
			<br/>
			<br/>
		</div>
	);
}
}
export default App;
