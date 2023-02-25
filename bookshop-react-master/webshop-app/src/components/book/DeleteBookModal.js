import React from "react";
import { Button, Modal } from "react-bootstrap";

function DeleteBookModal({ onHide, deleteBook, show, quantity }) {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title
                    id="contained-modal-title-vcenter"
                    style={{ fontSize: "20px" }}
                >
                    Are you sure you want to delete this book?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body></Modal.Body>
            <Modal.Footer style={{ justifyContent: "space-between" }}>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        deleteBook();
                        onHide();
                    }}
                >
                    Delete Book
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteBookModal;
