const cardNombre = document.querySelector("#card-nombre")
const nombreInput = document.querySelector("#nombre")
const cardNumero = document.querySelector("#card-numero");
const numeroInput = document.querySelector("#numero")
nombreInput.addEventListener("input", () => {
    cardNombre.textContent = nombreInput.value || "Pepito Fulano";
})

numeroInput.addEventListener("input", () => {
    cardNumero.textContent = numeroInput.value || "0000 0000 0000 0000";

    console.log(cardNumero.textContent);
    
})