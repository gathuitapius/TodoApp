const TaskRoutes = require("./routes/TaskRoutes.js")
const express = require("express")
const cors = require("cors")
const con = require("./db/db_con.js")
const { Register } = require("./Controllers/UserController.js")
const UserRouter = require("./routes/UserRoutes.js")

const app = express() 
app.use(cors())
app.use(express.json())

app.use('/', TaskRoutes)
app.use('/auth', UserRouter)

app.listen(4000, (req, res) => {
    console.log("Listening on port 4000...")
})
