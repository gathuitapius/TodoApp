const con = require("../db/db_con")

//CREATE
const CreateTask = (req, res) => {
    const taskName = req.body.task
    const taskDesc = req.body.description
    const taskDuration = req.body.taskDuration
    if(taskName && taskDesc && taskDuration){ 
    //const sql = `INSERT INTO tasks(task, description) VALUES(${taskName},${taskDesc})`;
    const sql = "INSERT INTO tasks(task, description, taskDuration) VALUES(?, ?, ?)";
    con.query(sql, [taskName,taskDesc,taskDuration], (err, task) => {
                console.log("Task created successfully")
                res.json({mssg:"Task created successfully"})
            })
        } else {
            res.json({mssg: "You must enter task name and description"})
        }
    }


//READ
const GetTasks = (req, res) => {
    const sql = "SELECT id, task, SUBSTRING(description, 1, 8) AS slicedDescr, DATE_FORMAT(createdAt, '%Y-%m-%d') AS date,  DATE_FORMAT(createdAt, '%H:%i:%s') AS time, DATE_FORMAT(DATE_ADD(createdAt, INTERVAL taskDuration  DAY),'%Y-%m-%d') AS dueDate, taskDuration, is_complete FROM tasks"
    //const sql = "SELECT task, description, DATE_FORMAT(createdAt, '%Y-%m-%d') AS date, DATE_FORMAT(createdAt, '%H:%i:%s') AS time, DATE_ADD(createdAt, INTERVAL taskduration DAY) AS dueDate FROM tasks";

    con.query(sql, (err, data) => {
        if(!err)
            {
                console.table(data)
                res.json(data)
            } else {
                console.error(err)
            }
    })
}

//GET single task

const GetSingleTask = (req, res) => {
    const id = req.params.id
    console.log(id)
    const sql = `SELECT * FROM tasks WHERE id = ${parseInt(id)}`
    con.query(sql, (err, task) => {
        if(!err)
            {
                if(task.length === 0)
                    {
                        res.json({mssg: "Task Not Found"})
                    }else{
                        res.json(task)
                        console.table(task)
                    }
            } else {
                res.json({mssg:"Something went wrong"})
            }
    })

}

//GET completed Tasks
const CompleteTasks = (req, res) => {
    const sql = "SELECT id, task, SUBSTRING(description, 1, 8) AS slicedDescr, DATE_FORMAT(createdAt, '%Y-%m-%d') AS date,  DATE_FORMAT(createdAt, '%H:%i:%s') AS time, DATE_FORMAT(DATE_ADD(createdAt, INTERVAL taskDuration  DAY),'%Y-%m-%d') AS dueDate, taskDuration, is_complete FROM tasks WHERE is_complete = 1"
    //const sql = "SELECT task, description, DATE_FORMAT(createdAt, '%Y-%m-%d') AS date, DATE_FORMAT(createdAt, '%H:%i:%s') AS time, DATE_ADD(createdAt, INTERVAL taskduration DAY) AS dueDate FROM tasks";

    con.query(sql, (err, data) => {
        if(!err)
            {
                console.table(data)
                res.json(data)
            } else {
                console.error(err)
            }
    })

}

//GET uncompleted Tasks
const UncompleteTasks = (req, res) => {
    const sql = "SELECT id, task, SUBSTRING(description, 1, 8) AS slicedDescr, DATE_FORMAT(createdAt, '%Y-%m-%d') AS date,  DATE_FORMAT(createdAt, '%H:%i:%s') AS time, DATE_FORMAT(DATE_ADD(createdAt, INTERVAL taskDuration  DAY),'%Y-%m-%d') AS dueDate, taskDuration, is_complete FROM tasks WHERE is_complete = 0"
    //const sql = "SELECT task, description, DATE_FORMAT(createdAt, '%Y-%m-%d') AS date, DATE_FORMAT(createdAt, '%H:%i:%s') AS time, DATE_ADD(createdAt, INTERVAL taskduration DAY) AS dueDate FROM tasks";

    con.query(sql, (err, data) => {
        if(!err)
            {
                console.table(data)
                res.json(data)
            } else {
                console.error(err)
            }
    })

}
//UPDATE
const UpdateTask = (req, res) => {
    const id = req.params.id
    // const taskName = req.body.task
    // const taskDesc = req.body.description
    // const taskDuration = req.body.taskDuration
    // const is_complete = req.body.is_complete
    const sql = `UPDATE tasks SET is_complete = ? WHERE id = ${id}`
    //const sql_update = `SELECT * FROM tasks WHERE id=${id}`
    // con.query(sql_update, (err, task) => {
    //     if(task.length > 0) {
            con.query(sql,[1] , (err, task) => {
                if(!err)
                    {
                        console.table(task)
                        console.log("Task Updated successfully")
                        res.json({mssg:"Task Updated successfully"})                   
                    } else
                    {
                        console.log("Error");
                        res.json({
                            mssg: "Error updating"
                        })
                    }
            })
        }
//     })
// }


//DELETE
const DeleteTask = (req, res) => {
    const id = req.params.id;
    console.log(id)
    const sql = `DELETE FROM tasks WHERE id = ${id}`
    const TaskToDelete = `SELECT * FROM tasks WHERE ID = ${id}`

    con.query(TaskToDelete, (err, task) => {
        if(!err)
            { 
                console.log(task)
                if(task.length > 0) {
                    con.query(sql, (err, task) => {
                        if(!err)
                            {
                                res.json({mssg: "Task deleted Succcesfully"})
                                console.log(task)
                            } else{
                                res.json({mssg: "Somethin went wrong"})
                            }
                    })
            } else{
                res.json({mssg: "Task Not Found"})
            }
            } else{
                console.error(err)
            }
    })
    }
//}

// export default CreateTask
module.exports = {
    CreateTask,
    GetTasks,
    DeleteTask,
    GetSingleTask,
    UpdateTask,
    CompleteTasks,
    UncompleteTasks
}