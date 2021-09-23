import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table } from "react-bootstrap";

class addNewInstitution extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institutionname: {},
      institutionaddress: {},
      institutionphone: {},
      allData: [],
    };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("/manageInstitution")
      .then((res) => res.json())
      .then((data) => this.setState({ allData: data }))
      .then(console.log(this.state.allData));
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

    window.location.reload(false);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  };

  render() {
    const { allData } = this.state;
    return (
      <div className="body">
        <header className="bodyheader">
          <h1>EDUEARTH</h1>
        </header>
        <h4>Super Admin View</h4>
        <h6>Add New Institution</h6>

        {/* for the form, you will need the name tag in the inputs. that's how this.state.### works at the top */}

        <Form className="col-lg-6 offset-lg-3 " onSubmit={this.onSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="institutionname">Institution Name:</Form.Label>
            <Form.Control
              type="text"
              name="institutionname"
              placeholder="Enter Institution Name"
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="institutionaddress">
              Institution Address:
            </Form.Label>
            <Form.Control
              type="text"
              name="institutionaddress"
              placeholder="Enter Institution Address"
              onChange={this.handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="institutionphone">
              Institution Phone:
            </Form.Label>
            <Form.Control
              type="tel"
              name="institutionphone"
              placeholder="i.e 01911223344"
              onChange={this.handleChange}
              pattern="[0-9]{11}"
              required
            />
          </Form.Group>
          <Button className="btn btn-primary" type="submit">
            Submit
          </Button>
        </Form>

        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td>ID</td>
                <td>Institution Name</td>
                <td>Address</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {allData.map((i) => (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.institutionname}</td>
                  <td>{i.institutionaddress}</td>
                  <td>{i.institutionphone}</td>
                  <td>
                    <Button className="btn btn-primary" type="submit">
                      Update
                    </Button>
                    {"  "}
                    <Button variant="outline-danger" type="submit">
                      Disable
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default addNewInstitution;
