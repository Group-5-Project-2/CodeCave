import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle } from "mdbreact";

const items = [
  { name: "home", label: "Home" },
  { name: "billing", label: "Billing" },
  { name: "settings", label: "Settings" },
];
const ProfileEdit3 = () => {
  return (
    <MDBRow>
        <MDBCol md="2"><MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Channel List</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                <Sidebar items={items}></Sidebar>
                </MDBDropdownMenu>
              </MDBDropdown>
          
        </MDBCol>
        <MDBCol md="8"></MDBCol>
    <MDBContainer >
      <MDBRow>
        <div style={{ marginTop: "10px", fontSize: "40px" }}>Skills</div>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <div style={{ marginTop: "10px" }}></div>
          <label htmlFor="Job2Summary" className="grey-text">
            Please separate them with commas.
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
          ></textarea>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <div style={{ marginTop: "10px", fontSize: "40px" }}>Bootcamp</div>
      </MDBRow>

      <MDBCol md="2"></MDBCol>
      <MDBCol md="8">
        <MDBRow>
          <MDBCol sm="6">
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="BootcampName" className="grey-text">
              Institution Name
            </label>
            <input type="text" id="BootcampName" className="form-control" />
          </MDBCol>

          <MDBCol sm="6">
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="BootcampCourse" className="grey-text">
              Bootcamp Course
            </label>
            <input type="text" id="BootcampCourse" className="form-control" />
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol md="2"></MDBCol>

      <MDBRow>
        <div style={{ marginTop: "10px", fontSize: "40px" }}>Education</div>
      </MDBRow>

      <MDBCol md="2"></MDBCol>
      <MDBCol md="8">
        <MDBRow>
          <MDBCol sm="6">
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="CollegeName" className="grey-text">
              Institution Name
            </label>
            <input type="text" id="CollegeName" className="form-control" />
          </MDBCol>

          <MDBCol sm="6">
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="CollegeMajor" className="grey-text">
              Major
            </label>
            <input type="text" id="CollegeMajor" className="form-control" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol sm="3">
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="CollegeStart" className="grey-text">
              Start Date
            </label>
            <input type="text" id="CollegeStart" className="form-control" />
          </MDBCol>

          <MDBCol sm="3">
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="CollegeEnd" className="grey-text">
              End Date
            </label>
            <input type="text" id="CollegeEnd" className="form-control" />
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol md="2"></MDBCol>

      <MDBRow>
        <div style={{ marginTop: "10px", fontSize: "40px" }}>Project</div>
      </MDBRow>

      <MDBCol md="2"></MDBCol>
      <MDBCol md="8">
        <MDBRow>
          <MDBCol>
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="Project1" className="grey-text">
              Project 1 URL
            </label>
            <input type="text" id="Project1" className="form-control" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="Project2" className="grey-text">
              Project 2 URL
            </label>
            <input type="text" id="Project2" className="form-control" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="Project3" className="grey-text">
              Project 3 URL
            </label>
            <input type="text" id="Project3" className="form-control" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <div style={{ marginTop: "10px" }}></div>
            <label htmlFor="Project4" className="grey-text">
              Project 4 URL
            </label>
            <input type="text" id="Project4" className="form-control" />
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol md="2"></MDBCol>

      <MDBRow end>
            <div className="text-center">
              <MDBBtn color="primary">{"Save"}</MDBBtn>
            </div>
            <div
              style={{ marginLeft: "10px", marginRight: "15px" }}
              className="text-center"
            >
              <MDBBtn color="warning">Exit</MDBBtn>
            </div>
          </MDBRow>
    </MDBContainer>
    </MDBRow>
    
  );
};

export default ProfileEdit3;
