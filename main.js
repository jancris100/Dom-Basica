const num1 = document.querySelector(".numero1")
const num2 = document.querySelector(".numero2")
const sum = document.querySelector(".calculo")
const caalculo = document.querySelector(".calculo")
const respuesta = document.querySelector(".respuesta")





caalculo.addEventListener("click",suma);

function suma(){
     const resultado = num1.value + num2.value;
     respuesta.innerHTML = "Restultado es " + resultado;
    
}



