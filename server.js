const express = require("express")
const path = require("path")
const utilities = require("./utilities/")
const inventoryRoute = require("./routes/inventoryRoute")
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

// Inventory routes
app.use("/inv", inventoryRoute)

/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/
app.use(async (err, req, res, next) => {
  let nav = await utilities.getNav()
  console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  
  res.render("errors/error", {
    title: err.status || 'Server Error',
    message: err.message,
    nav
  })
})

// File Not Found Route - must be last route in list
app.use(async (req, res, next) => {
  next({ status: 404, message: 'Sorry, we appear to have lost that page.' })
})


/* ***********************
Server
*************************/

const PORT = 5500

app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`)
})

const baseController = require("./controllers/baseController")