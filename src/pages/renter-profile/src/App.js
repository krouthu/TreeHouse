import './App.css';
import React, { Component } from 'react';
import fire from './fire';
import './custom.scss'
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

	handlePetsChange = (changeEvent) => {
  this.setState({
    hasPets: changeEvent.target.value
  });
}

handleGarageChange = (changeEvent) => {
this.setState({
	wantGarage: changeEvent.target.value
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

				<div className="container">
					<div className="row header">
						<div className="col-md-12">
							<h1>
								<a href="/#">Treehouse Tenant Signup</a>
							</h1>
							<p className="lead">Tell us about yourself!</p>
						</div>
					</div>
					<br/>

					<div className="row">
						<div className="col-md-6">
							<h3>Your Information</h3>
							<div>
								<form>
									<div>
										<div className="form-group has-error">
											<label for="id_subject">Name:&nbsp;</label>
											{/*}<input maxlength="100"
												type="text"
												name="subject"
												className="form-control"
												id="id_subject"
												placeholder="Please enter your full name here"
												ref='firstName'
											/>*/}
											<input type = "text"
												id = "firstName"
												name = "firstName"
												ref = 'firstName'
												placeholder = "First Name"
												onChange = {this.handleChange}
												value={this.state.firstName}
											/>&nbsp;&nbsp;&nbsp;
											{/*}<label>&nbsp;&nbsp;Last Name:&nbsp;</label>*/}
											<input type = "text"
												id = "lastName"
												name = "lastName"
												ref = 'lastName'
												placeholder = "Last Name"
												onChange = {this.handleChange}
												value = {this.state.lastName}
											/>
										</div>

										<div className="form-group">
											<label for="id_message">Date of Birth:&nbsp;&nbsp;&nbsp;</label>
											{/*}<input type="text"
												name="message"
												className="form-control"
												id="id_message"
												placeholder="How old are you?"
												ref='age'
											/>*/}
											<input type="date"
												id = "dob"
												name = "dob"
												min = "1900-01-01"
												max = "2010-01-01"
												ref='dob'
												value = {this.state.dob}
												onChange = {this.handleChange}
											/>
										</div>

										<div className="form-group">
											<label for="id_sender">About Me:</label>
											<textarea
												name = "aboutMe"
												className="form-control"
												id="aboutMe"
												placeholder="Tell your future landlord about yourself"
												rows = "5"
												cols = "50"
												ref='aboutMe'
												value = {this.state.aboutMe}
												onChange = {this.handleChange}
											/>

										</div>

										<div className="form-group">
											<label for="id_sender">Do you plan on living with pets?</label>
											<form>
    										<div className="radio">
      										<label>
        									<input type="radio" value="true"
                      			checked={this.state.hasPets === 'true'}
                      			onChange={this.handlePetsChange} />
        										&nbsp;Yes&nbsp;&nbsp;&nbsp;
      										</label>
      										<label>
        									<input type="radio" value="false"
                      			checked={this.state.hasPets === 'false'}
                      			onChange={this.handlePetsChange} />
        										&nbsp;No
      										</label>
    										</div>
  										</form>
											{/*}<div className="d-flex">
												<div className="form-check">
													<input className="form-check-input"
														type="radio"
														name="hasPets"
														id="hasPets"
														value="hasPets"
														checked={this.state.hasPets === 'true'}
              							onChange={this.handleChange}
													/>
													<label className="form-check-label" for="hasPets">
														Yes
													</label>
												</div>
												&nbsp;	&nbsp;	&nbsp;
												<div className="form-check">
													<input className="form-check-input"
														type="radio"
														name="noPets"
														id="noPets"
														value="noPets"
														checked={this.state.noPets === 'true'}
              							onChange={this.handleChange}
													/>
													<label className="form-check-label" for="noPets">
														No
													</label>
												</div>
											</div>*/}
										</div>

									</div>
								</form>
							</div>
						</div>

						<div className="col-md-6">
							<h3>Your Preferences</h3>
							<div>
								<form>
									<div>
										<div className="form-group has-error">
											<label for="bed">Bedrooms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
											<input type = "text"
												id = "minBed"
												name = "minBed"
												ref = 'minBed'
												placeholder = "Min # Bedrooms"
												onChange = {this.handleChange}
												value = {this.state.minBed}
											/>
											&nbsp;to&nbsp;&nbsp;&nbsp;
											{/*}<label>&nbsp;&nbsp;Last Name:&nbsp;</label>*/}
											<input type = "text"
												id = "maxBed"
												name = "maxBed"
												ref = 'maxBed'
												placeholder = "Max # Bedrooms"
												onChange = {this.handleChange}
												value = {this.state.maxBed}
											/>
											{/*<input maxlength="2"
												type="text"
												name="bed"
												className="form-control"
												id="bed"
												placeholder="Minimum # of Bedrooms Required"
												ref='bed'
											/>*/}
										</div>

										<div className="form-group">
										<label for="bed">Bathrooms:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
										<input type = "text"
											id = "minBath"
											name = "minBath"
											ref = 'minBath'
											placeholder = "Min # Bathrooms"
											onChange = {this.handleChange}
											value = {this.state.minBath}
										/>
										&nbsp;to&nbsp;&nbsp;&nbsp;
										{/*}<label>&nbsp;&nbsp;Last Name:&nbsp;</label>*/}
										<input type = "text"
											id = "maxBath"
											name = "maxBath"
											ref = 'maxBath'
											placeholder = "Max # Bathrooms"
											onChange = {this.handleChange}
											value = {this.state.maxBath}
										/>
											{/*<label for="bath">Number of Bathrooms:</label>
											<input type="text"
												name="bath"
												className="form-control"
												id="bath"
												placeholder="Minimum # of Bathrooms Required"
												ref='bath'
											/>*/}
										</div>

										<div className="form-group">
											{/*<label for="id_sender">Number of Housemates:</label>
											<input type="text"
												name="sender"
												className="form-control"
												id="id_sender"
												placeholder="Maximum # of Housemates"
												ref='housemates'
											/>*/}
											<label for="bed">Housemates:&nbsp;&nbsp;&nbsp;</label>
											<input type = "text"
												id = "minHousemates"
												name = "minHousemates"
												ref = 'minHousemates'
												placeholder = "Min # Housemates"
												onChange = {this.handleChange}
												value = {this.state.minHousemates}
											/>&nbsp;to&nbsp;&nbsp;&nbsp;
											{/*}<label>&nbsp;&nbsp;Last Name:&nbsp;</label>*/}
											<input type = "text"
												id = "maxHousemates"
												name = "maxHousemates"
												ref = 'maxHousemates'
												placeholder = "Max # Housemates"
												onChange = {this.handleChange}
												value = {this.state.maxHousemates}
											/>
										</div>

										<div className="form-group">
											<label>Price/Month:&nbsp;</label>$&nbsp;
											<input
												type = "text"
												name = "lowPrice"
												id = "lowPrice"
												onChange = {this.handleChange}
												value = {this.state.lowPrice}
												placeholder = "Low End"
											/>
											&nbsp;to&nbsp;$&nbsp;
											<input
												type = "text"
												id = "highPrice"
												name = "highPrice"
												onChange = {this.handleChange}
												value = {this.state.highPrice}
												placeholder = "High End"
											/>
											{/*<label for="id_sender">Price / Month:</label>
											<input type="text"
												name="sender"
												className="form-control"
												id="id_sender"
												placeholder="What is the maximum you are willing to pay?"
												ref='price'
											/>*/}
										</div>
									</div>
								</form>
							</div>

							<form>
								<div>
									{/*<div className="form-group">
										<label for="id_sender">Do you need a garage?</label>
										<div className="d-flex">
											<div className="form-check">
												<input className="form-check-input"
													type="radio"
													name="exampleRadios"
													id="exampleRadios1"
													value="option1"
													ref='wantGarage'
												/>
												<label className="form-check-label" for="exampleRadios1">
													Yes
												</label>
											</div>
											&nbsp;	&nbsp;	&nbsp;
											<div className="form-check">
												<input className="form-check-input"
													type="radio"
													name="noGarage"
													id="noGarage"
													value="noGarage"
													checked={this.state.noGarage === "true" || this.props.noGarage === "true"}
              						onChange={this.handleChange}
												/>
												<label className="form-check-label" for="exampleRadios2">
													No
												</label>
											</div>
										</div>
									</div>*/}
									<div className="form-group">
										<label for="id_sender">Do you need a garage?</label>
										<form>
											<div className="radio">
												<label>
												<input type="radio" value="true"
													checked={this.state.wantGarage === 'true'}
													onChange={this.handleGarageChange} />
													&nbsp;Yes&nbsp;&nbsp;&nbsp;
												</label>
												<label>
												<input type="radio" value="false"
													checked={this.state.wantGarage === 'false'}
													onChange={this.handleGarageChange} />
													&nbsp;No
												</label>
											</div>
										</form>
										{/*}<div className="d-flex">
											<div className="form-check">
												<input className="form-check-input"
													type="radio"
													name="hasPets"
													id="hasPets"
													value="hasPets"
													checked={this.state.hasPets === 'true'}
													onChange={this.handleChange}
												/>
												<label className="form-check-label" for="hasPets">
													Yes
												</label>
											</div>
											&nbsp;	&nbsp;	&nbsp;
											<div className="form-check">
												<input className="form-check-input"
													type="radio"
													name="noPets"
													id="noPets"
													value="noPets"
													checked={this.state.noPets === 'true'}
													onChange={this.handleChange}
												/>
												<label className="form-check-label" for="noPets">
													No
												</label>
											</div>
										</div>*/}
									</div>

									<div className="form-group">
										<label for="id_sender">Preferred Bus Routes:</label>
										<div className="d-flex">
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="route10"
													name="route10"
													onChange = {this.handleChange}
													checked = {this.state.route10}
												/>
												<label class="custom-control-label" for="route10">10</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="route15"
													name="route15"
													onChange = {this.handleChange}
													checked = {this.state.route15}
												/>
												<label class="custom-control-label" for="route15">15</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="route16"
													name="route16"
													onChange = {this.handleChange}
													checked = {this.state.route16}
												/>
												<label class="custom-control-label" for="route16">16</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="route19"
													name="route19"
													onChange = {this.handleChange}
													checked = {this.state.route19}
												/>
												<label class="custom-control-label" for="route19">19</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="route20"
													name="route20"
													onChange = {this.handleChange}
													checked = {this.state.route20}
												/>
												<label class="custom-control-label" for="route20">20</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="route22"
													name="route22"
													onChange = {this.handleChange}
													checked = {this.state.route22}
												/>
												<label class="custom-control-label" for="route22">22</label>
											</div>

										</div>
									</div>


									<div className="form-group">
										<label for="id_sender">Location:</label>
										<div className="d-flex">
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													id="beach"
													name = "beach"
													onChange = {this.handleChange}
													checked = {this.state.beach}
												/>
												<label class="custom-control-label" for="beach">Near the Beach</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													name = "downtown"
													id="downtown"
													onChange = {this.handleChange}
													checked = {this.state.downtown}
												/>
												<label class="custom-control-label" for="downtown">Near Downtown</label>
											</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
												<input type="checkbox"
													class="custom-control-input"
													name="campus"
													id="campus"
													onChange = {this.handleChange}
													checked = {this.state.campus}
												/>
												<label class="custom-control-label" for="campus">Near Campus</label>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>

					</div>
				</div>

				<br/><br/>

				<div className="App">
					<button className="btn btn-primary center-btn" type="submit" >Submit</button>
					<br />
					<br />
					<br />
					<br />
				</div>
			</form>
		</React.Fragment>
	);
}
}
export default App;
