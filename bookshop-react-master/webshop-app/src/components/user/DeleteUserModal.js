import React from "react";
import { Button, Modal } from "react-bootstrap"

function DeleteUserModal({ onHide, deleteUser, show }) {

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{ fontSize: "20px" }}>
                    Are you sure you want to delete this user?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "space-between" }}>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="danger" onClick={deleteUser}>Delete user</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default DeleteUserModal;