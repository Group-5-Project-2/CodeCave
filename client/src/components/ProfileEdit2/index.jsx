import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle } from "mdbreact";

const items = [
  { name: "home", label: "Home" },
  { name: "billing", label: "Billing" },
  { name: "settings", label: "Settings" },
];
const ProfileEdit2 = () => {
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
    <MDBContainer>
      <MDBRow>
        <div style={{ marginTop: "10px", fontSize: "40px" }}>Experience</div>
      </MDBRow>
      <MDBRow>
        <MDBCol md="2"></MDBCol>
        <MDBCol md="8">
          <MDBRow>
            <MDBCol sm="6">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1Company" className="grey-text">
                Company Name
              </label>
              <input type="text" id="Job1Company" className="form-control" />
            </MDBCol>

            <MDBCol sm="6">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1Title" className="grey-text">
                Job Title
              </label>
              <input type="text" id="Job1Title" className="form-control" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="5">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1City" className="grey-text">
                City
              </label>
              <input type="text" id="Job1City" className="form-control" />
            </MDBCol>

            <MDBCol sm="5">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1State" className="grey-text">
                State
              </label>
              <input type="text" id="Job1State" className="form-control" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="3">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1Start" className="grey-text">
                Start Date
              </label>
              <input type="text" id="Job1Start" className="form-control" />
            </MDBCol>

            <MDBCol sm="3">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1End" className="grey-text">
                End Date
              </label>
              <input type="text" id="Job1End" className="form-control" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job1Summary" className="grey-text">
                Summary
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="6">
              <div style={{ marginTop: "70px" }}></div>
              <label htmlFor="Job2Company" className="grey-text">
                Company Name
              </label>
              <input type="text" id="Job2Company" className="form-control" />
            </MDBCol>

            <MDBCol sm="6">
              <div style={{ marginTop: "70px" }}></div>
              <label htmlFor="Job2Title" className="grey-text">
                Job Title
              </label>
              <input type="text" id="Job2Title" className="form-control" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="5">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job2City" className="grey-text">
                City
              </label>
              <input type="text" id="Job2City" className="form-control" />
            </MDBCol>

            <MDBCol sm="5">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job2State" className="grey-text">
                State
              </label>
              <input type="text" id="Job2State" className="form-control" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol sm="3">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job2Start" className="grey-text">
                Start Date
              </label>
              <input type="text" id="Job2Start" className="form-control" />
            </MDBCol>

            <MDBCol sm="3">
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job2End" className="grey-text">
                End Date
              </label>
              <input type="text" id="Job2End" className="form-control" />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol>
              <div style={{ marginTop: "10px" }}></div>
              <label htmlFor="Job2Summary" className="grey-text">
                Summary
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="10"
              ></textarea>
            </MDBCol>
          </MDBRow>

          <MDBRow end>
            <div className="text-center">
              <MDBBtn color="primary">{"Save & Next"}</MDBBtn>
            </div>
            <div
              style={{ marginLeft: "10px", marginRight: "15px" }}
              className="text-center"
            >
              <MDBBtn color="warning">Exit</MDBBtn>
            </div>
          </MDBRow>
        </MDBCol>
        <MDBCol md="3"></MDBCol>
      </MDBRow>
    </MDBContainer>
    </MDBRow>
  );
};

export default ProfileEdit2;
