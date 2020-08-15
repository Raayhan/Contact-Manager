import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { MDBAnimation } from "mdbreact";
class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <MDBAnimation type="slideInLeft" duration="700ms">
              <div className="card card-body card_list mb-3">
                <h6>
                  {name}{" "}
                  <i
                    onClick={() =>
                      this.setState({
                        showContactInfo: !this.state.showContactInfo,
                      })
                    }
                    className="fas fa-sort-down"
                    style={{ cursor: "pointer" }}
                  />
                  <i
                    className="fas fa-times"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "white",
                    }}
                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  />
                  <Link to={`contact/edit/${id}`}>
                    <i
                      className="fas fa-pencil-alt"
                      style={{
                        cursor: "pointer",
                        float: "right",
                        color: "white",
                        marginRight: "1rem",
                      }}
                    />
                  </Link>
                </h6>

                {showContactInfo ? (
                  <ul className="list-group">
                    <li className="list-group-item">Email: {email}</li>
                    <li className="list-group-item">Phone : {phone}</li>
                  </ul>
                ) : null}
              </div>
            </MDBAnimation>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default Contact;
