const express = require("express")
const router = express.Router()

const invController = require("../controllers/inventoryController")

// ✅ FIXED: param name MUST match controller
router.get("/type/:classification_name", invController.buildByClassification)

module.exports = router