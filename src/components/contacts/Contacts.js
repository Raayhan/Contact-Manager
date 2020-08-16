import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <div style={{ paddingBottom: "10%" }}>
                <h2 className="display-4 mb-2">
                  <span className="text-danger">Contact</span>
                  <span className="text-white"> List</span>
                </h2>
                <div style={{ paddingBottom: "5%" }}>
                  <span className="text-white">
                    Contacts Data are being fetched from API :&nbsp;
                  </span>
                  <a
                    className="text-warning"
                    href="https://jsonplaceholder.typicode.com"
                    target="_blank"
                  >
                    https://jsonplaceholder.typicode.com
                  </a>
                </div>
                {contacts.map((contact) => (
                  <Contact key={contact.id} contact={contact} />
                ))}
              </div>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
