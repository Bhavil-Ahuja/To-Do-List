const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")
const app = express()
let items = []
let workItems = []
app.use(bodyParser({ extended: true }))
app.use(express.static("public"))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    let day = date.dayToday()
    res.render("list", { kindOfDay: day, newListItems: items })
})

app.post("/", function (req, res) {
    let item = req.body.newItem
    if (req.body.button === "Work") {
        workItems.push(item)
        res.redirect("/work")
    }
    else {
        items.push(item)
        res.redirect("/")
    }
})

app.get('/work', function (req, res) {
    res.render("list", { kindOfDay: "Work List", newListItems: workItems })
})

app.listen(3000, function () {
    console.log("Server started on port 3000")
})