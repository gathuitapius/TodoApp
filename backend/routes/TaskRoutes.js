// import express from "express"
const express = require("express")
const con  = require("../db/db_con")
const { GetTasks, DeleteTask, CreateTask, GetSingleTask, UpdateTask, CompleteTasks, UncompleteTasks} = require("../Controllers/TaskController")

const router = express.Router()

//CREATE
router.post("/create", CreateTask)
router.get("/tasks", GetTasks)
router.get("/task/:id", GetSingleTask)
router.put("/update/:id", UpdateTask)
router.delete("/delete/:id", DeleteTask)
router.get("/complete", CompleteTasks)
router.get("/uncomplete", UncompleteTasks)

module.exports = router;