import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState, useEffect } from "react"
import axios from "axios"
import { grey } from '@mui/material/colors';
export const CompleteTasks = () => {
    const [tasks, setTasks] = useState([])
    

    useEffect(() =>{
        FetchTasks()

    }, [])

    const FetchTasks = async() => {
        try{
            const response = await axios.get("http://localhost:4000/complete")
            console.log(response.data)
            setTasks(response.data)
            
        } catch (error) {
            console.error("Error fetching Tasks", error)
        }
    }

    const handleComplete = async (taskid) =>{
        console.log(taskid)
        const isComplete = 1
        const update = await axios.put(`/update/${taskid}`,
            {
                "is_complete": isComplete
            })
        
    }

    const handleDelete =  async (taskid,req, res) => {
        try{
            console.log(taskid)
            const task = await axios.delete(`/delete/${taskid}`)
            alert("Task Deleted Successfully")
        } catch(error) {
            alert("Error Occured")
            console.log("Error")
            
        }
    }

    return (
    <div className="tasks">
        {tasks.map((task) => (
            <div key={task.id} className="task">
                <h3>{task.task}</h3>
                <p>{task.id}</p>
                <p className='due'><small>Due Date:{task.dueDate}</small></p>
                <p>{task.slicedDescr}...</p><br></br>
                <p>{task.is_complete}</p>
                <div className="icon-action">
                    {task.is_complete === 0 ? <CheckCircleOutlineIcon onClick={() => handleComplete(task.id)} style={{
                        cursor: 'pointer',
                        fontSize: '18px',
                        color: 'grey'
                    }}/> :
                    <CheckCircleOutlineIcon style={{
                        color:'green',
                        fontSize: '18px',
                        cursor: 'pointer'
                    }}/>
                    }
                    { task.is_complete === 1 ? <DeleteForeverIcon 
                    onClick = {() => handleDelete(task.id)}
                    style={{
                        cursor: 'pointer',
                        color: 'rgb(248, 34, 81)',
                        fontSize: '18px',
                        }}/> : <DeleteForeverIcon 
                        onClick = {() => handleDelete(task.id)}
                        style={{
                            cursor: 'pointer',
                            color: 'rgb(248, 34, 81)',
                            fontSize: '18px',
                            }}/>
                    }
                </div>
                <p className='date'><small>{task.date}</small></p>
                <p className='time'><small>Created: {task.time}</small></p>
            </div>
        ))
            
        }
    </div>)
    }