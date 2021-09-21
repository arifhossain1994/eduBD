import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

class addNewInstitution extends React.Component {
  constructor() {
    super();

    this.state = {
      institutionname: {},
      institutionaddress: {},
      institutionphone: {},
    };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      institutionname: this.state.institutionname,
      institutionaddress: this.state.institutionaddress,
      institutionphone: this.state.institutionphone,
    };

    fetch("/manageInstitution", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error))
      .then((response) => console.log("Success: ", response));
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  render() {
    return (
      <div class="body">
        <header class="bodyheader">
          <h1>EDUEARTH</h1>
        </header>
        <h4>Super Admin View</h4>
        <h6>Add New Institution</h6>

        {/* for the form, you will need the name tag in the inputs. that's how this.state.### works at the top */}

        <form class="form" onSubmit={this.onSubmit}>
          <label htmlFor="institutionname">
            Institution Name:
            <input
              id="institutionname"
              name="institutionname"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="institutionaddress">
            Address:
            <input
              id="institutionaddress"
              name="institutionaddress"
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="institutionphone">
            Phone:
            <input
              id="institutionphone"
              name="institutionphone"
              type="tel"
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <br></br>
        <table class="table">
          <thead>
            <tr>
              <td>Institution Name</td>
              <td>Address</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  }
}

export default addNewInstitution;
