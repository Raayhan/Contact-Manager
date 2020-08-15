import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MDBAnimation } from "mdbreact";
const Header = (props) => {
  const { branding } = props;
  return (
    <MDBAnimation type="slideInDown">
      <nav className="navbar navbar-expand-sm mb-3 py-0 ">
        <div className="container">
          <a href="/" className="navbar-brand">
            {branding}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact/add">
                  <i className="fas fa-user-plus"></i> Add
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </MDBAnimation>
  );
};

Header.defaultProps = {
  branding: "Contact Manager",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
