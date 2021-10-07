import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Table, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class addNewInstitution extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      institutionName: "",
      institutionAddress: "",
      institutionPhone: "",
      allData: [],
      showHideInstitutionAdd: false,
      showHideInstitutionUpdate: false,
      institutionId: null,
      institutionDataWithID: {},
    };
    this.onFormSubmit = this.handleSubmit.bind(this);
    this.onFormSubmitUpdate = this.handleSubmitUpdate.bind(this);
  }

  // This will call the api and get the data
  componentDidMount() {
    fetch("/manageInstitution")
      .then((res) => res.json())
      .then((data) => this.setState({ allData: data }));
  }

  // This will POST the data to db based on the query
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      institutionName: this.state.institutionName,
      institutionAddress: this.state.institutionAddress,
      institutionPhone: this.state.institutionPhone,
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

  // This will PUT for update institution
  handleSubmitUpdate(event) {
    event.preventDefault();
    const data = {
      institutionName: this.state.institutionName,
      institutionAddress: this.state.institutionAddress,
      institutionPhone: this.state.institutionPhone,
      id: this.state.institutionDataWithID.id,
    };

    fetch("/manageInstitution/update?", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error: ", error))
      .then((response) => console.log("Success: ", response));

    window.location.reload(false);
  }

  // This will record any change in the new institute form.
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value.trim(),
    });
  }

  // This will help to open or close the modal to Add
  handleModalShowHide() {
    this.setState({
      showHideInstitutionAdd: !this.state.showHideInstitutionAdd,
    });
  }

  InstitutionAddForm = () => {
    return (
      <div>
        <Button variant="primary" onClick={() => this.handleModalShowHide()}>
          Add New Institution
        </Button>

        <Modal show={this.state.showHideInstitutionAdd}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <h5>Add New Institution</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="col-lg-6 offset-lg-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="institutionName">
                  Institution Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="institutionName"
                  placeholder="Enter Institution Name"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="institutionAddress">
                  Institution Address:
                </Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="institutionAddress"
                  placeholder="Enter Institution Address"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="institutionPhone">
                  Institution Phone:
                </Form.Label>
                <Form.Control
                  type="tel"
                  size="sm"
                  name="institutionPhone"
                  placeholder="i.e 01911223344"
                  pattern="[0-9]{3}"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button
                variant="outline-dark"
                onClick={() => this.handleModalShowHide()}
              >
                Close
              </Button>
              {"  "}
              <Button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => this.onFormSubmit(e)}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  InstitutionTable = () => {
    const { allData } = this.state;
    return (
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
                <td>{i.institutionName}</td>
                <td>{i.institutionAddress}</td>
                <td>{i.institutionPhone}</td>
                <td>
                  <Button
                    className="btn-primary"
                    type="submit"
                    defaultValue={i}
                    onClick={() => {
                      this.getSingleDataWithID(i.id);
                      this.handleModalShowHideToUpdate(i.id);
                    }}
                  >
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
    );
  };

  // handle the modal of update institution
  handleModalShowHideToUpdate(id) {
    this.setState({
      showHideInstitutionUpdate: !this.state.showHideInstitutionUpdate,
    });
  }

  //Get a single data with the ID from allData array
  getSingleDataWithID(id) {
    this.state.allData.forEach((e) => {
      if (e.id === id) {
        console.log(e);
        this.setState({ institutionDataWithID: e });
        console.log(this.state.institutionDataWithID.institutionAddress);
      }
    });
  }

  // modal form for update
  InstitutionUpdate = () => {
    return (
      <div>
        <Modal show={this.state.showHideInstitutionUpdate}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <h5>Add New Institution</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="col-lg-6 offset-lg-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="institutionName">
                  Institution Name:
                </Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="institutionName"
                  defaultValue={
                    this.state.institutionDataWithID.institutionName
                  }
                  placeholder="Enter Institution Name"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="institutionAddress">
                  Institution Address:
                </Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  name="institutionAddress"
                  defaultValue={
                    this.state.institutionDataWithID.institutionAddress
                  }
                  placeholder="Enter Institution Address"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="institutionPhone">
                  Institution Phone:
                </Form.Label>
                <Form.Control
                  type="tel"
                  size="sm"
                  name="institutionPhone"
                  defaultValue={
                    this.state.institutionDataWithID.institutionPhone
                  }
                  placeholder="Enter Institution Address"
                  onChange={(e) => this.handleChange(e)}
                  required
                />
              </Form.Group>
            </Form>
            <Modal.Footer>
              <Button
                variant="outline-dark"
                onClick={() => this.handleModalShowHideToUpdate()}
              >
                Close
              </Button>
              {"  "}
              <Button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => this.onFormSubmitUpdate(e)}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Modal>
      </div>
    );
  };

  // All components render
  render() {
    return (
      <div className="body">
        <h4>Super Admin View</h4>
        <this.InstitutionAddForm />
        <br />
        <this.InstitutionTable />
        <this.InstitutionUpdate />
      </div>
    );
  }
}

export default addNewInstitution;
