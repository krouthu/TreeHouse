import React from "react";
import "./App.css";
import Firebase from "firebase";
import config from "./config";

class App extends React.Component {
	constructor(props) {
		super(props);
		Firebase.initializeApp(config);

		this.state = {
			developers: []
		};
	}

	componentDidMount() {
		this.getUserData();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState !== this.state) {
			this.writeUserData();
		}
	}

	writeUserData = () => {
		Firebase.database()
			.ref("/")
			.set(this.state);
		console.log("DATA SAVED");
	};

	getUserData = () => {
		let ref = Firebase.database().ref("/");
		ref.on("value", snapshot => {
			const state = snapshot.val();
			this.setState(state);
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		//need update

		//let role = this.refs.role.value;
		let uid = this.refs.uid.value;

		let name = this.refs.name.value
		let age = this.refs.age.value
		let aboutMe = this.refs.aboutMe.value
		let price = this.refs.price.value
		let gender = this.refs.gender.value
		let housemates = this.refs.housemates.value
		let bed = this.refs.bed.value
		let bath = this.refs.bath.value
		let garage = this.refs.garage.value
		let hasPets = this.refs.hasPets.checked
		let route10 = this.refs.route10.checked
		let route15 = this.refs.route15.checked
		let route16 = this.refs.route16.checked
		let route19 = this.refs.route19.checked
		let route20 = this.refs.route20.checked
		let route22 = this.refs.route22.checked
		let beach = this.refs.beach.checked
		let downtown = this.refs.downtown.checked
		let campus = this.refs.campus.checked





		if (uid && name && age) {
			const { developers } = this.state;
			const devIndex = developers.findIndex(data => {
				return data.uid === uid;
			});

			//need update
			developers[devIndex].name = name;
			//;

			developers[devIndex].age = age;
			developers[devIndex].garage = garage;
			developers[devIndex].aboutMe = aboutMe;
			developers[devIndex].hasPets = hasPets;
			developers[devIndex].price = price;
			developers[devIndex].route10 = route10;
			developers[devIndex].gender = gender;
			developers[devIndex].route15 = route15;
			developers[devIndex].housemates = housemates;
			developers[devIndex].route16 = route16;
			developers[devIndex].bed = bed;
			developers[devIndex].route19 = route19;
			developers[devIndex].bath = bath;
			developers[devIndex].route20 = route20;
			developers[devIndex].campus = campus;
			developers[devIndex].route22 = route22;

			developers[devIndex].beach = beach;

			developers[devIndex].downtown = downtown;





			this.setState({ developers });
		} else if (name && age) {
			const uid = new Date().getTime().toString();
			const { developers } = this.state;
			developers.push({ uid, name, age, aboutMe, price, gender, housemates, bed, bath, garage, hasPets, route10, route15, route16, route19, route20, route22 , downtown, campus, beach});
			this.setState({ developers });
		}

		//need update
		this.refs.name.value = "";
		//this.refs.role.value = "";
		this.refs.uid.value = "";

		this.refs.age.value = '';
		this.refs.aboutMe.value = '';
		this.refs.price.value = '';
		this.refs.gender.value = '';
		this.refs.housemates.value = '';
		this.refs.bed.value = '';
		this.refs.bath.value = '';
		this.refs.garage.value = '';
		this.refs.hasPets.value = false;

		this.refs.route10.value = false;
		this.refs.route15.value = false;
		this.refs.route16.value = false;
		this.refs.route19.value = false;
		this.refs.route20.value = false;
		this.refs.route22.value = false;
		this.refs.beach.value = false;
		this.refs.downtown.value = false;
		this.refs.campus.value = false;


	};

	removeData = developer => {
		const { developers } = this.state;
		const newState = developers.filter(data => {
			return data.uid !== developer.uid;
		});
		this.setState({ developers: newState });
	};

	updateData = developer => {

		//need update
		this.refs.uid.value = developer.uid;
		this.refs.name.value = developer.name;
		//this.refs.role.value = developer.role;

		this.refs.age.value = developer.age;
		this.refs.gender.value = developer.gender;
		this.refs.price.value = developer.price;
		this.refs.aboutMe.value = developer.aboutMe;

		this.refs.housemates.value = developer.housemates;
		this.refs.bed.value = developer.bed;
		this.refs.bath.value = developer.bath;


		this.refs.garage.value = developer.garage;
		this.refs.hasPets.value = developer.hasPets;
		this.refs.route10.value = developer.route10;

		this.refs.route15.value = developer.route15;
		this.refs.route16.value = developer.route16;
		this.refs.route19.value = developer.route19;
		this.refs.route20.value = developer.route20;
		this.refs.route22.value = developer.route22;
		this.refs.campus.value = developer.campus;

		this.refs.downtown.value = developer.downtown;
		this.refs.beach.value = developer.beach;






	};

	render() {
		const { developers } = this.state;
		return (
			<React.Fragment>
				<div className="bg flex-center">
					<h1>Treehouse</h1>
					<p>Find your best housing options in Santa Cruz</p>
				</div>
				<div className="container">
					<div className="row">
						{/* 第一行 */}
						<div className="col-xl-12">
							<h1>
								<a href="#">Treehouse Listings</a>
							</h1>
							<p className="lead">Find the listings information here.</p>
						</div>
					</div>
					<div className="row">
						{/* 第二行 */}
						<div className="col-xl-12">
              {developers.map(developer => (
							<div
								key={developer.uid}
								className="card float-left"
								style={{ width: "18rem", margin: "1rem" }}
							>
								<div className="card-body card-margin">
									<div className="card-body">
										<h5 className="card-title text-center">{developer.name}</h5>

										<p className="card-text text-center">{'Age:'}{developer.age}</p>
										<p className="card-text text-center">{'Gender:'}{developer.gender}</p>
										<p className="card-text text-center">{'Aboutme:'}{developer.aboutMe}</p>
										<p className="card-text text-center">{'Price:$'}{developer.price}</p>
										<p className="card-text text-center">{developer.bed}{' beds'},{developer.bath}{' bath'},{developer.garage}{' parking spaces'},</p>
										<p className="card-text text-center">{developer.housemates}{' housemates'},{String(developer.hasPets)}{' pets'}</p>
										<p className="card-text text-center">{'Bus: '}{String(developer.route10)}{' route10'},{String(developer.route15)}{' route15'},{String(developer.route16)}{' route16'},{String(developer.route19)}{' route19'},{String(developer.route20)}{' route20'},{String(developer.route22)}{' route22'}</p>
										<p className="card-text text-center">{'Location: '}{String(developer.beach)}{' beach'},{String(developer.downtown)}{' downtown'},{String(developer.campus)}{' campus'}</p>
									</div>
								</div>
							</div>
						))}
						</div>
					</div>
					<div className="row">
						{/* 第三行 */}
						<div className="col-xl-12">
							{/* 表单 */}
							<form onSubmit={this.handleSubmit}>
								<div className="row header">
									<div className="col-md-12">
										<input type="hidden" ref="uid" />
										<h1>
											<a href="#">Treehouse User Signup</a>
										</h1>
										<p className="lead">Please submit your information here.</p>
									</div>
								</div>


								<div className="row">




									<div className="col-md-6">




										<h3>House information</h3>
										<div>
											<form>
												<div>
													<div className="form-group has-error">
														<label for="id_subject">Number of Bedrooms:</label>
														<input maxlength="100" type="text" name="subject" className="form-control" id="id_subject" ref='bed' />
													</div>
													<div className="form-group">
														<label for="id_message">Number of Bathrooms:</label>
														<input type="text" name="message" className="form-control" id="id_message" ref='bath' />
													</div>
													<div className="form-group">
														<label for="id_sender">Number of Parking Lots:</label>
														<input type="text" name="sender" className="form-control" id="id_sender" ref='garage' />
													</div>
													<div className="form-group">
														<label for="id_sender">Number of Housemates:</label>
														<input type="text" name="sender" className="form-control" id="id_sender" ref='housemates' />
													</div>
													<div className="form-group">
														<label for="id_sender">Price:</label>
														<input type="text" name="sender" className="form-control" id="id_sender" ref='price' />
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
														<input maxlength="100" type="text" name="subject" className="form-control" id="id_subject" ref='name' />
													</div>
													<div className="form-group">
														<label for="id_message">Age:</label>
														<input type="text" name="message" className="form-control" id="id_message" ref='age' />
													</div>
													<div className="form-group">
														<label for="id_sender">gender:</label>
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
															<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked ref='hasPets' />
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
															<input type="checkbox" class="custom-control-input" id="Beach" ref='beach' />
															<label class="custom-control-label" for="Beach">Near the Beach</label>
														</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
															<input type="checkbox" class="custom-control-input" id="Downtown" ref='downtown' />
															<label class="custom-control-label" for="Downtown">Near Downtown</label>
														</div>
											&nbsp;&nbsp;&nbsp;
											<div class="custom-control custom-checkbox">
															<input type="checkbox" class="custom-control-input" id="Campus" ref='campus' />
															<label class="custom-control-label" for="Campus">Near Campus</label>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
									<button className="btn btn-primary center-btn">Submit</button>
								</div>
							</form>
						</div>
					</div>
					<div className="footer"></div>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
