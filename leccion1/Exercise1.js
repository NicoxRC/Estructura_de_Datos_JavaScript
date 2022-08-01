//dado un número entero N en el rango [-100,100], mostrar su cuadrado.

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const p = document.querySelector("#result");

btn.addEventListener("click", btnOnClick);

function btnOnClick(){
    if (-100 <= input.value <= 100) {
        const cuadrado = input.value * input.value;
        p.innerText = "El cuadrado es: " + cuadrado;
    }else{
        p.innerText = "Número equivocado."
    }
}


