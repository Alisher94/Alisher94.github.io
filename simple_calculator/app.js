const express = require("express")
const app = express()

const parser = require("body-parser")
app.use(parser.urlencoded({extended: true}))


app.get("", (req, res) => {
    res.sendFile(__dirname + "/SimpleAdder.html")
})

app.post("/", (req, res) => {
    var number1 = parseFloat(req.body.first);
    var number2 = parseFloat(req.body.second);
    var result = "";

    if(req.body.operation == 'add') result = number1 + number2

    if(req.body.operation == 'subtract') result = number1 - number2

    if(req.body.operation == 'multiply') result = number1 * number2

    if(req.body.operation == 'divide'){
        if(number2 == 0) result = "Division by zero";
        else result = number1 / number2
    } 

    res.send("The Answer is: " + result + "<br><a href='http://localhost:8000/'><h4>Another calculation</h4></a>")
})

app.listen(8000, res => {})