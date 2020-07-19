//import { AppComponent } from './app.component';
import './App.css';
import React, { Component } from 'react';
//import fire from 'firebase';
import fire from './fire';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			aboutMe: '',
			price: '',
			gender: '',
			housemates: '',
			bed: '',
			bath: '',
			garage: '',
			hasPets: false,

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
		// const value = evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
		// this.setState({
		// ...this.state,
		// [evt.target.name]: value
		// });
	}
	handleSubmit = (e) => {
		e.preventDefault();
		const landlordRef = fire.database().ref('landlord');
		console.log(this.refs.name.value)
		const landlords = this.state


		landlords.name = this.refs.name.value
		landlords.age = this.refs.age.value
		landlords.aboutMe = this.refs.aboutMe.value
		landlords.price = this.refs.price.value
		landlords.gender = this.refs.gender.value
		landlords.housemates = this.refs.housemates.value
		landlords.bed = this.refs.bed.value
		landlords.bath = this.refs.bath.value
		landlords.garage = this.refs.garage.value
		landlords.hasPets = this.refs.hasPets.checked
		landlords.route10 = this.refs.route10.checked
		landlords.route15 = this.refs.route15.checked
		landlords.route16 = this.refs.route16.checked
		landlords.route19 = this.refs.route19.checked
		landlords.route20 = this.refs.route20.checked
		landlords.route22 = this.refs.route22.checked
		landlords.beach = this.refs.beach.checked
		landlords.downtown = this.refs.downtown.checked
		landlords.campus = this.refs.campus.checked
		this.setState(landlords)


		// this.setState({
		// 	//name: this.refs.name.value,
		// 	name: "abc",
		// 	age: this.refs.age.value,
		// 	aboutMe: this.refs.aboutMe.value,
		// 	price: this.refs.price.value,
		// 	gender: this.refs.gender.value,
		// 	housemates: this.refs.housemates.value,
		// 	bed: this.refs.bed.value,
		// 	bath: this.refs.bath.value,
		// 	garage: this.refs.garage.value,
		// 	hasPets: this.refs.hasPets.checked,
		// 	route10: this.refs.route10.checked,
		// 	route15: this.refs.route15.checked,
		// 	route16: this.refs.route16.checked,
		// 	route19: this.refs.route19.checked,
		// 	route20: this.refs.route20.checked,
		// 	route22: this.refs.route22.checked,
		// 	beach: this.refs.beach.checked,
		// 	downtown: this.refs.downtown.checked,
		// 	campus: this.refs.campus.checked

		// })
		console.log(this.state.name)
		console.log(this.state.age)
		//this.state.name=this.refs.name.value
		//this.state.age=this.refs.age.value


		const landlord = {
			name: this.state.name,
			age: this.state.age,
			aboutMe: this.state.aboutMe,
			price: this.state.price,
			gender: this.state.gender,
			housemates: this.state.housemates,
			bed: this.state.bed,
			bath: this.state.bath,
			garage: this.state.garage,
			hasPets: this.state.hasPets,

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
		console.log(landlord.name)
		console.log(landlord.age)
		landlordRef.push(landlord);


		/*this.refs.name.value = ''
		this.refs.age.value = ''
		this.state.aboutMe = ''
		this.state.price = ''
		this.state.gender = ''
		this.state.housemates = ''
		this.state.bed = ''
		this.state.bath = ''
		this.state.garage = ''
		this.state.hasPets = false

		this.state.route10 = false
		this.state.route15 = false
		this.state.route16 = false
		this.state.route19 = false
		this.state.route20 = false
		this.state.route22 = false
		this.state.beach = false
		this.state.downtown = false
		this.state.campus = false*/





		//this.setState({
		//name: '',
		//age: '',
		//aboutMe: '',
		// price: '',
		// gender: '',
		// housemates: '',
		// bed: '',
		// bath: '',
		// wantGarage: false,
		// noGarage: false,
		// hasPets: false,

		// route10: false,
		// route15: false,
		// route16: false,
		// route19: false,
		// route20: false,
		// route22: false,
		// beach: false,
		// downtown: false,
		// campus: false
		//});
	}
	render() {
		const landlords = this.state;
		return (
			<React.Fragment>

				<form onSubmit={this.handleSubmit}>






					<div className="container">
						<div className="row header">
							<div className="col-md-12">
								<h1>
									<a href="#">Treehouse User Signup</a>
								</h1>
								<p className="lead">Please submit your information here.</p>
							</div>
						</div>


						<div className="row">
							<div className="col-md-6">
								<h3>Identity</h3>
								<div>
									<div className="form-group">
										<p>
											<b>Select Your Identity</b>
										</p>
										<select class="form-control">
											<option>landlord</option>
											<option>renter</option>
										</select>
									</div>
								</div>

								<h3>House information</h3>
								<div>
									<form>
										<div>
											<div className="form-group has-error">
												<label for="bed">Number of Bedrooms:</label>
												<input maxlength="100"
													type="text"
													name="bed"
													className="form-control"
													id="bed"
													ref='bed' />
											</div>
											<div className="form-group">
												<label for="bath">Number of Bathrooms:</label>
												<input type="text"
													name="bath"
													className="form-control"
													id="bath"
													ref='bath'
												/>
											</div>
											<div className="form-group">
												<label for="id_sender">Number of Parking Lots:</label>
												<input type="text"
													name="garage"
													className="form-control"
													id="garage"
													ref='garage'

												/>
											</div>
											<div className="form-group">
												<label for="id_sender">Number of Housemates:</label>
												<input type="text"
													name="sender"
													className="form-control"
													id="id_sender"
													ref='housemates'
												/>
											</div>
											<div className="form-group">
												<label for="id_sender">Price / Month:</label>
												<input type="text"
													name="sender"
													className="form-control"
													id="id_sender"
													ref='price'
												/>
											</div>



										</div>
									</form>
								</div>

							</div>

							{/* 右边 */}
							<div className="col-md-6">
								<h3>Personal information</h3>
								<div>
									<form>
										<div>
											<div className="form-group has-error">
												<label for="id_subject">Name:</label>
												<input maxlength="100"
													type="text"
													name="subject"
													className="form-control"
													id="id_subject"
													ref='name'
												/>
											</div>
											<div className="form-group">
												<label for="id_message">Age:</label>
												<input type="text" name="message" className="form-control" id="id_message" ref='age' />
											</div>
											<div className="form-group">
												<label for="id_sender">Gender:</label>
												<input type="text" name="sender" className="form-control" id="id_sender" ref='gender' />
											</div>
											<div className="form-group">
												<label for="id_sender">AboutMe:</label>
												<input type="text" name="sender" className="form-control" id="id_sender" ref='aboutMe' />
											</div>
										</div>
									</form>
								</div>


								<form>
									<div>
										<div className="form-group">
											<label for="id_sender">Pets:</label>
											<div className="d-flex">
												<div className="form-check">
													<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" ref='hasPets' checked />
													<label className="form-check-label" for="exampleRadios1">
														Yes
													</label>
												</div>
												&nbsp;	&nbsp;	&nbsp;
												<div className="form-check">
													<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
													<label className="form-check-label" for="exampleRadios2">
														No
													</label>
												</div>
											</div>
										</div>

										<div className="form-group">
											<label for="id_sender">Nearby Bus Routes:</label>
											<div className="d-flex">
												<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck10" ref='route10' />
													<label class="custom-control-label" for="customCheck10">10</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck15" ref='route15' />
													<label class="custom-control-label" for="customCheck15">15</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck16" ref='route16' />
													<label class="custom-control-label" for="customCheck16">16</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck19" ref='route19' />
													<label class="custom-control-label" for="customCheck19">19</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck20" ref='route20' />
													<label class="custom-control-label" for="customCheck20">20</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="customCheck22" ref='route22' />
													<label class="custom-control-label" for="customCheck22">22</label>
												</div>

											</div>
										</div>


										<div className="form-group">
											<label for="id_sender">Location:</label>
											<div className="d-flex">
												<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="Beach" ref='beach'/>
													<label class="custom-control-label" for="Beach">Near the Beach</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="Downtown" ref='downtown'/>
													<label class="custom-control-label" for="Downtown">Near Downtown</label>
												</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="Campus" ref='campus'/>
													<label class="custom-control-label" for="Campus">Near Campus</label>
												</div>
											</div>
										</div>
									</div>
								</form>
							</div>





						</div>
					</div>









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
