const express = require("express")
const path = require("path")
const expressLayouts = require("express-ejs-layouts")

const app = express()

/* ***********************
View Engines
*************************/

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(expressLayouts)
app.set("layout", "layouts/layout")

/* ***********************
Static Files
*************************/

app.use(express.static(path.join(__dirname, "public")))

/* ***********************
Routes
*************************/

app.get("/", (req, res) => {
res.render("index", {
title: "CSE Motors | Home"
})
})

/* ***********************
Server
*************************/

const PORT = 5500

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`)
})