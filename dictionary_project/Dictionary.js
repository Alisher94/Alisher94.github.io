const express = require("express")
const app = express()
const db = require("./word")

const parser = require("body-parser")
app.use(parser.urlencoded({extended: true}))

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/dict.html")
})

app.get("/getData", (req, res) => {
    var searchingWord = req.query.word
    db.getData(searchingWord)
    .then(meanings=>{
        res.json(meanings);
    })
})


app.listen(8000, res => {})