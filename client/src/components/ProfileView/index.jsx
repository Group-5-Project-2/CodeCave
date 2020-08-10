
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import TabsJustified from "./TabsJustified"
import { Jumbotron } from "reactstrap";
import "./style.css";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Profile extends Component {
	constructor() {
		super();
		this.state = {
			first_name: "",
			last_name: "",
			user_name: "",
			email: "",
			errors: {},
		};
	}

	componentDidMount() {
		const token = localStorage.usertoken;
		const decoded = jwt_decode(token);
		this.setState({
			first_name: decoded.first_name,
			last_name: decoded.last_name,
			user_name: decoded.user_name,
			email: decoded.email,
		});
	}

	render() {
		return (
			<div className="container">
        <div className="col-sm-8 mx-auto">
						<h1 className="text-center">PROFILE</h1>
					</div>
          <div className="btn btn-dark">
						<Link to="/profilePage" style={{color: "white"}}>Edit Your Profile</Link>
					</div>
				<div className="jumbotron mt-5">

      <div className="row">
        <div className= "col-md-3"> <img src="https://s3.amazonaws.com/media.eremedia.com/uploads/2012/07/15180646/caveman.jpg"></img></div>
        <div className= "col-md-9">
    <div>{this.state.first_name} {this.state.last_name} {this.state.job_title}{this.state.city}{this.state.state}</div>
    
    <div></div>
    <div></div>
           </div>
</div>

					
					

					{/* <table className="table col-md-6 mx-auto">
						<tbody>
							<tr>
								<td>Fist Name</td>
								<td>{this.state.first_name}</td>
							</tr>
							<tr>
								<td>Last Name</td>
								<td>{this.state.last_name}</td>
							</tr>
							<tr>
								<td>User Name</td>
								<td>{this.state.user_name}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{this.state.email}</td>
							</tr>
							<tr>
								<td>Job Title</td>
								<td>{this.state.job_title}</td>
							</tr>
							<tr>
								<td>Resume</td>
								<td>{this.state.resume}</td>
							</tr>
							<tr>
								<td>Portfolio</td>
								<td>{this.state.portfolio}</td>
							</tr>
							<tr>
								<td>City</td>
								<td>{this.state.city}</td>
							</tr>
							<tr>
								<td>State</td>
								<td>{this.state.state}</td>
							</tr>
						</tbody>
					</table> */}

          
				</div>
			</div>
		);
	}
}

export default withRouter(Profile);
  
  

// const gridExamplesPage = () => {
//   return (
//     <MDBContainer className="block-example border border-dark rounded mb-0 ">
//       {/* <MDBRow>
//         <MDBCol>
//           <ProfileHeaderTop />
//         </MDBCol>
//       </MDBRow> */}

//       <MDBRow>
//       <MDBCol md="5"> </MDBCol>
//         <MDBCol md="2">
//           Profile Pic
//           <FiguresPage />
//         </MDBCol>
//         <MDBCol md="5"> </MDBCol>
//         {/* <MDBCol md="2">
//           {" "}
//           <GitHubLink />{" "}
//         </MDBCol>
//         <MDBCol md="2">
//           {" "}
//           <Portfolio />{" "}
//         </MDBCol>
//         <MDBCol md="2">
//           {" "}
//           <Resume />{" "}
//         </MDBCol> */}
//       </MDBRow>

//       <MDBRow>
//       <MDBCol md="1"> </MDBCol>
//         <MDBCol>Name</MDBCol>
//       </MDBRow>

//       <MDBRow>
//       <MDBCol md="1"> </MDBCol>
//         <MDBCol>Job Title</MDBCol>
//       </MDBRow>

//       <MDBRow>
//       <MDBCol md="1"> </MDBCol>
//         <MDBCol>City, State</MDBCol>
//       </MDBRow>

//       <MDBRow>
        
//         <MDBCol>
//           <Jumbotron> Bio</Jumbotron>
//         </MDBCol>
//         <MDBCol md="1"></MDBCol>
//       </MDBRow>

//       <MDBRow>

//       <TabsJustified />

//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default gridExamplesPage;
