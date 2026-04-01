// Recopilar elementos del DOM
const display = document.querySelector("#display")
const botones = document.querySelectorAll("button")

let currentInput = "";

botones.forEach(btn => btn.addEventListener("click", () => {
   const valor = btn.textContent
   handleInput(valor)
}))

function handleInput(valor){
    if(valor === "Reset"){
        currentInput = "";
        display.textContent = "0"
        return;
    }
    if(valor === "DEL"){
        currentInput = currentInput.slice(0,-1)
        display.textContent = currentInput || 0
        return;
    }
    if(valor === "="){
        try{
            currentInput = eval(currentInput).toString()
            display.textContent = currentInput;
        }catch{
            display.textContent = "Error en la operación"
        }
        return;
    }
    
    currentInput += valor;
    display.textContent = currentInput;
}