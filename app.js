// =======================
// app.js
// =======================

const express = require('express');
const path = require('path');
const app = express();
const inventoryRoute = require("./routes/inventoryRoute")

// Set view engine
app.set("view engine", "ejs")

// =======================
// Middleware
// =======================

//  Static files 
app.use('/images', express.static(path.join(__dirname, 'public/images')));
app.use(express.static("public"))

// Form data
app.use(express.urlencoded({ extended: true }))

// =======================
// Routes
// =======================

app.use("/inv", inventoryRoute)

// Home route
app.get("/", (req, res) => {
  res.redirect("/inv/type/all")
})

// =======================
// Error Handlers
// =======================

// 404 handler
app.use((req, res, next) => {
  res.status(404).render("error", { message: "Page not found" })
})

// 500 handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).render("error", { message: "Server Error" })
})

// =======================
// Server
// =======================

const PORT = 5500

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`)
})