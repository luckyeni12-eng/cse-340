/* ******************************************
 * CSE Motors Application Server
 * ******************************************/

const express = require("express")
const path = require("path")

const app = express()

/* ******************************************
 * View Engine
 * ******************************************/
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

/* ******************************************
 * Static Files
 * ******************************************/
app.use(express.static(path.join(__dirname, "public")))

/* ******************************************
 * Index Route
 * ******************************************/
app.get("/", (req, res) => {
  res.render("index", { title: "CSE Motors | Home" })
})

/* ******************************************
 * Server Information
 * ******************************************/
const PORT = 5500
const HOST = "localhost"

app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`)
})