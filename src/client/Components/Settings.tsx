import React, { useState, useEffect } from 'react';
import { Card, ListGroup, Button, Modal, Form, ProgressBar, Badge } from 'react-bootstrap';
import { FaExclamationTriangle } from 'react-icons/fa';
import { api, Token } from '../Services/apiServices';

const Settings: React.FC<any> = props => {
  const [show, setShow] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [showDeleting, setShowDeleting] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");

  let submitChange = async () => {
    handleClose()
    handleShowLoading()
    if (newPassword !== "" && password !== "") {
      let results = await api('/auth/emailCheck', "PUT", { Token, password, newPassword })
      if (!results) {
        handleCloseLoading();
        handleShowError();
      } else {
        handleCloseLoading()
        handleShowSuccess()
      }
    } else {
      handleCloseLoading();
      handleShowError();
    }
  }

  let submitDelete = async () => {
    handleCloseDelete()
    handleShowDeleting()
    if (password !== "") {
      let results = await api('/auth/emailCheck', "DELETE", { Token, password })
      localStorage.clear();
      window.location.reload();
    } else {
      handleCloseDeleting();
      handleShowError();
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseError = () => setShowError(false);
  const handleShowError = () => setShowError(true);

  const handleCloseLoading = () => setShowLoading(false);
  const handleShowLoading = () => setShowLoading(true);

  const handleCloseSuccess = () => setShowSuccess(false);
  const handleShowSuccess = () => setShowSuccess(true);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const handleCloseDeleting = () => setShowDeleting(false);
  const handleShowDeleting = () => setShowDeleting(true);

  return (
    <React.Fragment>
      <Modal show={showDelete} onHide={handleCloseDelete} animation={true} keyboard={true}
        autoFocus={true} restoreFocus={true} >
        <Modal.Header closeButton>
          <Modal.Title>We're Sorry to See You Go!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form>
            <Form.Group controlId="password" className="">
              <Form.Label className="my-auto px-2 py-2 bg-danger rounded">Enter Your Password To Delete Your Account</Form.Label>
              <Form.Control type="password" placeholder="Enter Your Current Password" value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="py-0">
          <Button variant="outline-danger" className="mx-auto my-0 col-sm-6"
            onClick={submitDelete}>Delete Account</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showError} onHide={handleCloseError} animation={true} keyboard={true}
        autoFocus={true} restoreFocus={true} >
        <Modal.Header closeButton>
          <Modal.Title><Badge variant="danger" pill>Uh Oh!</Badge></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Failed to update Password. Please try again and check your password!</h5>
        </Modal.Body>
      </Modal>
      <Modal show={showSuccess} onHide={handleCloseSuccess} animation={true} keyboard={true}
        autoFocus={true} restoreFocus={true} >
        <Modal.Header closeButton>
          <Modal.Title><Badge variant="success" pill>Success</Badge></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Successfully Changed Your Password!</h5>
        </Modal.Body>
      </Modal>

      <Modal show={showLoading} animation={true}
        autoFocus={true} restoreFocus={true} >
        <Modal.Header>
          <Modal.Title>Working On It...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar variant="warning" animated now={100} />
        </Modal.Body>
      </Modal>

      <Modal show={showDeleting} animation={true}
        autoFocus={true} restoreFocus={true} >
        <Modal.Header>
          <Modal.Title>Deleting Your Account...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar variant="danger" animated now={100} />
        </Modal.Body>
      </Modal>

      <Modal show={show} onHide={handleClose} animation={true} keyboard={true}
        autoFocus={true} restoreFocus={true}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Your Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="pb-0">
          <Form>
            <Form.Group controlId="password">
              <Form.Label className="my-auto px-2 py-2 bg-info rounded">Current Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Your Current Password" value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="new-password" className="mb-0 " >
              <Form.Label className="my-auto px-2 py-2 bg-info rounded">New Password</Form.Label>
              <Form.Control type="password" placeholder="Enter a New Password" value={newPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="py-0">
          <Button variant="success" className="mx-auto my-0 col-sm-6"
            onClick={submitChange}>Let's Do It!</Button>
        </Modal.Footer>
      </Modal>
      <Card.Header>
        <Card.Title className="my-auto">Settings</Card.Title>
      </Card.Header>
      <Card.Body className="mx-3">

        <Card>
          <Card.Header className="bg-warning text-dark px-2 py-2">
            <Card.Title className="my-auto"><FaExclamationTriangle className="mr-2" />Change Your Profile Settings</Card.Title>
          </Card.Header>
          <Card.Body className="px-0 pb-0">
            <ListGroup>
              <ListGroup.Item>
                <h6>Password</h6>
                <Button variant="outline-warning" onClick={handleShow}>
                  Change Password
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Delete Account</h6>
                <Button variant="outline-danger" onClick={handleShowDelete}>
                  Warning: This Will Delete Your Account!
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card.Body>
        </Card>
      </Card.Body>
    </React.Fragment>
  )
}


export default Settings;