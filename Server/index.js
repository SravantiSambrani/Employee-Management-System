import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Get input request from user")
})

app.listen(3000, () => {
    console.log("Server is running")
})