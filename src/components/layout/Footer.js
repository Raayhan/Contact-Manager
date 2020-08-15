import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue">
      <div
        className="footer-copyright text-center py-3"
        style={{ fontSize: "10px" }}
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Developed & Maintained By:{" "}
          <a href="https://raayhan.github.io" target="_BLANK">
            {" "}
            Rayhan Ahmed Rakib{" "}
          </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
