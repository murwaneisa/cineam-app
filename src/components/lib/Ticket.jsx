import React from "react";
import { Button, Col, Modal, Row, Stack } from "react-bootstrap";
import { MdOutlineClose } from "react-icons/md";

function Ticket({ show, handleClose }) {
  return (
    <>
      <Modal
        size="md"
        centered
        show={show}
        onHide={handleClose}
        animation={false}
        /*    dialogClassName="custom-modal" */
      >
        <Modal.Header closeButton>
          <Modal.Title>Movie: the chosen one</Modal.Title>
        </Modal.Header>

        <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
          <Stack>
            <p>Date and time:</p>
            <h4>Sat Aug 26 2023 19:00</h4>
          </Stack>
          <Row style={{ width: "100%" }}>
            <Col style={{ width: "33%" }}>
              <div className="d-flex  flex-column">
                <p className="ticket-sec-title">Sal</p>
                <p className="ticket-sec-info">1</p>
              </div>
              <Stack className="mt-4">
                <p className="ticket-sec-title">Ticket No</p>
                <p className="ticket-sec-info">DH923Y4KJSD9</p>
              </Stack>
            </Col>
            <Col style={{ width: "33%" }}>
              <Stack>
                <p className="ticket-sec-title">Row</p>
                <p className="ticket-sec-info">7</p>
              </Stack>
              <Stack className="mt-4">
                <p className="ticket-sec-title">Movie Screen</p>
                <p className="ticket-sec-info">3D</p>
              </Stack>
            </Col>
            <Col style={{ width: "33%" }}>
              <Stack>
                <p className="ticket-sec-title">Seat</p>
                <p className="ticket-sec-info">2,5,8,</p>
              </Stack>
              <Stack className="mt-4">
                <p className="ticket-sec-title">Price</p>
                <p className="ticket-sec-info">147 kr </p>
              </Stack>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close Modal</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Ticket;
