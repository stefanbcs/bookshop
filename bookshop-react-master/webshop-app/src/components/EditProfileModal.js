import { Form, Modal, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../css/Modal.css";
import { BASE_URL } from "../Constants";

function EditProfileModal(props) {
  const [validated, setValidated] = useState(false);
  const [profileToEdit, setProfileToEdit] = useState({
    name: props.name,
    username: props.username,
    email: props.email,
    password: props.password,
    role: props.role,
    street: props.street,
    suite: props.suite,
    city: props.city,
    zipcode: props.zipcode,
    phone: props.phone,
  });

  const handleChangeEditProfile = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setProfileToEdit({
      ...profileToEdit,
      [name]: value,
    });
  };

  const editProfile = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity()) {
      fetch(`${BASE_URL}/users/${props.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: profileToEdit.name,
          username: profileToEdit.username,
          email: profileToEdit.email,
          password: profileToEdit.password,
          role: profileToEdit.role,
          address: {
            street: profileToEdit.street,
            suite: profileToEdit.suite,
            city: profileToEdit.city,
            zipcode: profileToEdit.zipcode,
          },
          phone: profileToEdit.phone,
        }),
      }).then((data) => {
        if (data.status === 201) {
          console.log("profile edited");
          props.getProfile();
          props.onHide();
        } else {
          console.log("error");
        }
      });
    }
    setValidated(true);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div
          id="edit-user-container"
          className="edit-user d-flex justify-content-center flex-column align-items-center text-left"
        >
          <Form
            onSubmit={(e) => editProfile(e)}
            className="edit-user-form"
            noValidate
            validated={validated}
          >
            <h4 className="mb-3 text-center">Address</h4>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label column sm="3">
                Street*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="street"
                  defaultValue={props.street}
                  onChange={handleChangeEditProfile}
                  placeholder="ex. : Kulas Light"
                  aria-label="ex. : Kulas Light"
                  pattern="(^[A-Za-z]{2,30})([ ]{0,1})([A-Za-z]{2,30}[ ]{0,1}){0,3}"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid street name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom02"
            >
              <Form.Label column sm="3">
                Suite*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="suite"
                  defaultValue={props.suite}
                  onChange={handleChangeEditProfile}
                  placeholder="ex. : Apt. 556"
                  aria-label="ex. : Apt. 556"
                  pattern="^[.0-9a-zA-Z\s,-]+$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid suite format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom03"
            >
              <Form.Label column sm="3">
                City*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="city"
                  defaultValue={props.city}
                  onChange={handleChangeEditProfile}
                  placeholder="ex. : Gwenborough"
                  aria-label="ex. : Gwenborough"
                  pattern="(^[A-Za-z]{2,30})([ ]{0,1})([A-Za-z]{2,30})"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid city name.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom04"
            >
              <Form.Label column sm="3">
                Zip code*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="zipcode"
                  defaultValue={props.zipcode}
                  onChange={handleChangeEditProfile}
                  placeholder="ex. : 929987"
                  aria-label="ex. : 929987"
                  pattern="^[0-9]{6}$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid zip code format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <h4 className="mb-3 text-center">Phone</h4>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="validationCustom05"
            >
              <Form.Label column sm="3">
                Phone number*
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  type="text"
                  name="phone"
                  defaultValue={props.phone}
                  onChange={handleChangeEditProfile}
                  placeholder="ex. : 0712345678"
                  aria-label="ex. : 0712345678"
                  pattern="^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Invalid phone number format.
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="add-new-buttons d-flex justify-content-between">
          <Button variant="danger" onClick={editProfile}>
            Save changes
          </Button>
          <Button onClick={props.onHide}>Cancel</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProfileModal;
