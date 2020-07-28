import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Ahmed Rayhan",
        email: "rayhan.rakib@northsouth.edu",
        phone: "01717272999",
      },
      {
        id: 2,
        name: "Shariar Rahman",
        email: "shahriar@gmail.com",
        phone: "01675613100",
      },
      {
        id: 3,
        name: "Mahbubul Haque",
        email: "m.haque@northsouth.edu",
        phone: "01528954412",
      },
    ],
  };

  deleteContact = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: newContacts
    })

  }
  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map((contact) => (
          <Contact key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
