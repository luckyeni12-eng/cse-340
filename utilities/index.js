const invModel = require("../models/inventory-model")

// Build the navigation menu dynamically
async function getNav() {
  try {
    const classifications = await invModel.getClassifications()

    if (!Array.isArray(classifications) || classifications.length === 0) {
      return '<ul id="nav"><li><a href="/inv/">All</a></li></ul>'
    }

    let navHTML = '<ul id="nav">'
    navHTML += '<li><a href="/inv/">All</a></li>'

    classifications.forEach((cls) => {
      navHTML += `<li><a href="/inv/classification/${cls.classification_name}">${cls.classification_name}</a></li>`
    })

    navHTML += '</ul>'
    return navHTML
  } catch (err) {
    console.error("Error building navigation:", err)
    return '<ul id="nav"><li><a href="/inv/">All</a></li></ul>'
  }
}

function formatCurrency(num) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(num)
}

function formatMileage(num) {
  return new Intl.NumberFormat("en-US").format(num)
}

module.exports = {
  getNav,
  formatCurrency,
  formatMileage,

}