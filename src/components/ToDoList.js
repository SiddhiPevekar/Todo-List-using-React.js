import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const ToDoList = () => {
    const [modal, setModal] = useState(false);
//to create the card after submitting the event form
//create an empty array for it
    const [taskList, setTaskList] = useState([])

    useEffect(() =>{
        let arr = localStorage.getItem("taskList")
        if(arr){
            //but it is a json string, to convert back to array:
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])//we are passing this empty array bcz otherwise this useEffect will run again and again

    const toggle = () =>{
        setModal(!modal);
    }
    
    //to update an array
    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        //to store in local storage
        localStorage.setItem("taskList", JSON.stringify(tempList))//name, value
        //we can't store array in local storage so convert it into json string
        //but when we refresh the page we cannot see the values on the page as we haven't fetched the values from local storage, to do that we need to use useEffect hook
        setTaskList(tempList)
        
        setModal(false) //to close popup after save
    }
    //now pass this saveTask function to the popup  so that it will push the task from form to this array
    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-2" onClick= {()=> setModal(true)}>Create Task</button>
            </div>
            <div className="task-container">
                {taskList.map((obj, index) => <Card taskObj = {obj} index = {index} /> )}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save= {saveTask} />
        </>
    );
};

export default ToDoList;