import axios from "axios"
import { useEffect, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';

export const AddTaskForm = ({setIsAdd}) =>{
    const [taskName, setTaskName] = useState("")
    const [taskDesciption, setTaskDescription] = useState("")
    const [taskDuration, setTaskDuration] = useState(1)

    const handleTaskDescriptionChange = (e) =>
        {
            setTaskDescription(e.target.value)
        }
    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleTaskDurationChange = (e) => {
        setTaskDuration(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
            const newTask = await axios.post("/create",{
                "task":taskName,
                "description": taskDesciption,
                "taskDuration": taskDuration
            })
            setIsAdd(false)
            alert("Task Added Successfully")
            }

            const handleClose = (e, isAdd) => {
                e.preventDefault()
                setIsAdd(false)
            }
    return (
        <div className="add-form">
            <CloseIcon onClick= {handleClose}/>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="task">Enter Task Name:</label><br></br>
                <input type="text" id="task" value={taskName} onChange = {handleTaskNameChange}></input>
                </div>
                <div>
                <label htmlFor="desc">Enter Task description:</label><br></br>
                <input type="text" id="desc" value={taskDesciption} onChange = {handleTaskDescriptionChange}></input>
                </div>
                <div>
                <label htmlFor="due">Enter Task Duration(in days):</label><br></br>
                <input type="text" id="due" value={taskDuration} onChange = {handleTaskDurationChange}></input>
                </div>
                <div className="add-btn">
                <button type="submit">Add</button>
                </div>
                
            </form>
        </div>
    )
}