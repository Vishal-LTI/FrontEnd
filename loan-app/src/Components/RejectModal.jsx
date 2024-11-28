import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RejectModal = ({ show, handleClose, handleSubmit }) => {
  const [reason, setReason] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(reason);
    setReason(''); // Clear the textarea after submission
    handleClose(); // Close the modal
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reason</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formReason">
            <Form.Label>Reason</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RejectModal;
