import { useState } from "react"
import { AddTaskForm } from "./AddTaskForm"

export const TaskActions = ({isComplete, setIsComplete}) => {
    const [isAdd, setIsAdd] = useState(false)
    const taggleAddForm = () => {
        setIsAdd(!isAdd)
    }

    const CheckCompleted = (e) => {
        setIsComplete(true)
        console.log(isComplete)
        
    }
    const handleUncomplete = () => {
        setIsComplete(false)
        console.log(isComplete)
    }

    return <div className="actions">
        <div>
        <button className="new" onClick={taggleAddForm}>new</button>
        </div>
        <div>
        <button className="complete" onClick={CheckCompleted}>completed</button>
        </div>
        <div>
        <button className="uncomplete" onClick={handleUncomplete}>uncompleted</button>
        </div>
    

    {isAdd && 
    <div className="form-pop">
    <AddTaskForm setIsAdd = {setIsAdd}/>
    </div>}
    </div>
}