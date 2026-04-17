const invModel = require("../models/inventory-model")
const utilities = require("../utilities")

async function buildByClassification(req, res, next) {
  try {
    const classification_name = req.params.classification_name

    let data

    // ✅ Handle "All"
    if (classification_name.toLowerCase() === "all") {
      data = await invModel.getAllInventory()
    } else {
      data = await invModel.getByClassification(classification_name)
    }

    // ✅ Get classifications for nav
    const classifications = await invModel.getClassifications()

    res.render("inventory/list", {
      title: `${classification_name} vehicles`,
      classifications, // ✅ send classifications (NOT nav string)
      data
    })

  } catch (err) {
    next(err)
  }
}

module.exports = {
  buildByClassification,
}