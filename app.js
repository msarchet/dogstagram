const express = require("express")
const path = require("path")
const { GetData } = require("./data/repository")
const app = express()

const port = process.env.port || 8080
const profile = require("./api/routes/profile")

// set up some stuff
app.use(express.static(__dirname + "/public"))
app.set("view engine", "pug")
app.set("views", "./views")
app.locals.basedir = path.join(__dirname, "views")

// render our home page
app.get("/", (req, res) => {
  res.render("index", GetData())
})

// setup profile
app.use("/profile", profile)

// setup posts

// setup login

app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})
