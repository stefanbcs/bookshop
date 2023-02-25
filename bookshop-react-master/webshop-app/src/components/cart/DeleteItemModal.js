import { Modal, Button } from "react-bootstrap";
function DeleteItemModal({deleteCartItemAndModalClose, ...props}) {
  return (
    <Modal
      {...props}
      size="m"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure you want to delete this item?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="danger" onClick={deleteCartItemAndModalClose}>
          Delete item
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteItemModal;
