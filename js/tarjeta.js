const cardNombre = document.querySelector("#card-nombre")
const nombreInput = document.querySelector("#nombre")

nombreInput.addEventListener("input", () => {
    cardNombre.textContent = nombreInput.value
    
})