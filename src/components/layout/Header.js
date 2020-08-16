import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBHamburgerToggler,
} from "mdbreact";

class Header extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <MDBNavbar color="mdb-color darken-3" light>
        <MDBNavbarBrand href="/">Contact Manager</MDBNavbarBrand>
        <MDBHamburgerToggler
          color="#FFFFFF"
          id="hamburger1"
          onClick={() => this.toggleSingleCollapse("collapse1")}
        />
        <MDBCollapse isOpen={this.state.collapse1} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink className="nav-link text-white" to="/">
                {" "}
                <i className="fas fa-home"></i> Home
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link text-white" to="/contact/add">
                <i className="fas fa-user-plus"></i> Add
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="nav-link text-white" to="/about">
                <i className="fas fa-info-circle"></i> About
              </MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Header;
