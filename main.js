const form = document.getElementById("form")
form.style.display = "none"

const btn = document.getElementById("btn")
const doc = document.getElementById("doc")
btn.addEventListener("click", () => {
  form.style.display = "block"
  btn.style.display = "none"
  doc.style.display = "none"
})