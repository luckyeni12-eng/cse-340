async function getNav() {
  const data = await invModel.getClassifications()
  let nav = "<ul>"
  data.rows.forEach(row => {
    nav += `<li><a href="/inv/type/${row.classification_name}">${row.classification_name}</a></li>`
  })
  nav += "</ul>"
  return nav
}