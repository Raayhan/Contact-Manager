import React, { Component } from "react";
const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    dispatch: (action) => this.setState((state) => reducer(state, action)),
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
