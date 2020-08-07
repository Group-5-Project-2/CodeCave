import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import FiguresPage from "./Figure";
// import GitHubLink from "./GitHubLink";
// import Portfolio from "./Portfolio";
// import Resume from "./Resume";
// import ProfileHeaderTop from "./ProfileHeaderTop";
import TabsJustified from "./TabsJustified"
import { Jumbotron } from "reactstrap";
import "./style.css";
const gridExamplesPage = () => {
  return (
    <MDBContainer className="block-example border border-dark rounded mb-0 ">
      {/* <MDBRow>
        <MDBCol>
          <ProfileHeaderTop />
        </MDBCol>
      </MDBRow> */}

      <MDBRow>
      <MDBCol md="5"> </MDBCol>
        <MDBCol md="2">
          Profile Pic
          <FiguresPage />
        </MDBCol>
        <MDBCol md="5"> </MDBCol>
        {/* <MDBCol md="2">
          {" "}
          <GitHubLink />{" "}
        </MDBCol>
        <MDBCol md="2">
          {" "}
          <Portfolio />{" "}
        </MDBCol>
        <MDBCol md="2">
          {" "}
          <Resume />{" "}
        </MDBCol> */}
      </MDBRow>

      <MDBRow>
      <MDBCol md="1"> </MDBCol>
        <MDBCol>Name</MDBCol>
      </MDBRow>

      <MDBRow>
      <MDBCol md="1"> </MDBCol>
        <MDBCol>Job Title</MDBCol>
      </MDBRow>

      <MDBRow>
      <MDBCol md="1"> </MDBCol>
        <MDBCol>City, State</MDBCol>
      </MDBRow>

      <MDBRow>
        
        <MDBCol>
          <Jumbotron> Bio</Jumbotron>
        </MDBCol>
        <MDBCol md="1"></MDBCol>
      </MDBRow>

      <MDBRow>

      <TabsJustified />

      </MDBRow>
    </MDBContainer>
  );
};

export default gridExamplesPage;
