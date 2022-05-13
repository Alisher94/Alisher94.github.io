// list of questions
const questionArray = [
    "3, 1, 4, 1, 5",
    "1, 1, 2, 3, 5",
    "1, 4, 9, 16, 25",
    "2, 3, 5, 7, 11",
    "1, 2, 4, 8, 16"
]
// list of answers
const answers = [9, 8, 36, 13, 32] 

// import packages
const express = require("express")
const session = require("express-session")
const bodyParser = require("body-parser")
const app = express()

// setting views
app.set('view engine','pug');
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({secret: "Alisher Abdullaev"}))

//i nitial page
app.get("/", (req, res) => {
    req.session.rightAnswers = 0
    req.session.counterQuestion = 0
    res.render("view", {
        question: questionArray[0],
        correct: 0
    })
})

// checking answers
app.post('/',(req,res)=>{   
    if(req.session){
        var index = parseInt(req.session.counterQuestion)
        var answer = parseInt(req.body.answer)
        if(answer === parseInt(answers[index])){
            req.session.rightAnswers++
        }
        req.session.counterQuestion++
        if(req.session.counterQuestion < questionArray.length){
            res.render('view',{ // view for each test
                question: questionArray[++index],
                correct: req.session.rightAnswers
            });
        }else{
            res.render('finish',{ // view for final result
                question: ++index,
                correct: req.session.rightAnswers
            });
        }
        
    }
});

app.listen(3000)
