const con = require("../db/db_con")

//REGISTER USER
const Register = (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    console.log(userName,email)
    const sql = "INSERT INTO users(userName,email) VALUES(?, ?)"
    con.query(sql, [userName,email], (err, user) => {
        if(!err)
            {
                res.json({mssg:"User registerd Successfully!"})
                console.table(user)

            } else {
                res.json({mssg:"User registration Failed!"})
            }
    })
}
//LOGIN USER
const Login = (req, res) => {
    //const sql = "INSERT INTO users(user_name,email) VALUES(?, ?)"
    const sql = "SELECT * FROM users"
    con.query(sql, (err, user) => {
        if(!err)
            {
                res.json(user)
                console.table(user)

            } else {
                res.json(err)
            }
    })
}

//LOGOUT USER

module.exports = {
    Register,
    Login
}