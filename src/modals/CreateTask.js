import React, {useState} from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTask = ({modal, toggle, save}) => { //modal, save, toggle destructured
  
    // we need to create a state to store the information of this form
    // first is to save task name and next is handler to update it
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    // to associate these parameters with the form fill values in form fields and to change the values in input fields we need to have the handler in it

    //now create the handleChange function here with default parameter event
    //give the names to form fileds so that whenever we submit the form these names will get pass
    const handleChange = (e) => {
      // const name = e.target.name
      // const value = e.target.value

      // option 
      const {name, value} = e.target //extracting name and value from this object target

      //now update the values
      if(name==="taskName"){
        setTaskName(value)
      }else{
        setDescription(value)
      }
    }

    //to save the task in array
    const handleSave = () =>{
      let taskObj = {}
      taskObj["Name"] = taskName //from hooks
      taskObj["Description"] = description
      //now call the function save from ToDOList.js as we have destructured it
      save(taskObj) // this function will push this obj in taskList in ToDOList.js
    }

    return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add New Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input type="text" className="form-control" value= {taskName} onChange={handleChange} name="taskName"/>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea rows="5" className="form-control" value= {description} onChange={handleChange} name="description" ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Create</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
};

export default CreateTask;