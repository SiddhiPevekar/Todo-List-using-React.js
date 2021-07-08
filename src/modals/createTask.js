import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const createTask = ({modal, toggle}) => {
    return (
    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group"></div>
            <div className="form-group"></div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Create</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
};

export default createTask;