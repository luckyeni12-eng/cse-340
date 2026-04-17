const tabs = document.querySelectorAll(".tab")
const cards = document.querySelectorAll(".card")

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const type = tab.dataset.type

    tabs.forEach(t => t.classList.remove("active"))
    tab.classList.add("active")

    cards.forEach(card => {
      if (type === "all" || card.dataset.type === type) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })
})