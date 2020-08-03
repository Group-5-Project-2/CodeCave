import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBIcon } from
"mdbreact";

class TabsJustified extends Component {
state = {
  activeItemJustified: "1"
}

toggleJustified = tab => e => {
  if (this.state.activeItemJustified !== tab) {
    this.setState({
      activeItemJustified: tab
    });
  }
};

render() {
    return (
      <MDBContainer>
        <MDBNav tabs className="nav-justified" color='indigo'>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "1"} onClick={this.toggleJustified("1")} role="tab" >
              <MDBIcon icon="briefcase" /> Experience
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "2"} onClick={this.toggleJustified("2")} role="tab" >
              <MDBIcon icon="university" /> Education
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink link to="#" active={this.state.activeItemJustified === "3"} onClick={this.toggleJustified("3")} role="tab" >
            <MDBIcon icon="check" /> Skills
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent
          className="card"
          activeItem={this.state.activeItemJustified}
        >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}

export default TabsJustified;