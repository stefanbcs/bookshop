import React, { useState } from "react";
import DeleteUserModal from "./DeleteUserModal"
import { Button, Card } from 'react-bootstrap'

function User({
    id,
    name,
    username,
    email,
    role,
    address,
    phone,
    getUsers
}) {

    const [idToDelete, setIdToDelete] = useState();
    const [modalShow, setModalShow] = useState(false);

    const openModal = (id) => {
        setIdToDelete(id);
    }

    const deleteUser = () => {
        fetch('http://localhost:3001/users/' + idToDelete, {
            method: 'DELETE',
        }).then(function() {
            getUsers();
        })
    }

    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-start" key={`item-${id}`}>
                <div className="ms-2 me-auto">
                    <p className="name fw-bold">{name}</p>
                    <p className="username fst-italic">#{username}</p>
                </div>
                <Button variant="outline-dark" className="btn-collapse collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls="collapseExample">
                    <i className="fas fa-chevron-circle-down"></i>
                </Button>
                {role === "admin"
                    ? ""
                    : <Button variant="outline-danger" className="btn-delete" id={id}
                        onClick={() => { setModalShow(true); openModal(id) }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </Button>}
            </li>
            <div className="collapse" id={`collapse${id}`}>
                <Card>
                    <Card.Body>
                        <p>Email: <span className="fw-light fst-italic">{email}</span></p>
                        <p>Phone: <span className="fw-light fst-italic">{phone}</span></p>
                        <p>Address: <span className="fw-light fst-italic">{address.street} street, {address.suite}, {address.zipcode}, {address.city}</span></p>
                    </Card.Body>
                </Card>
            </div>
            <DeleteUserModal
                deleteUser={deleteUser}
                onHide={() => setModalShow(false)} show={modalShow} />
        </>

    )
}

export default User;