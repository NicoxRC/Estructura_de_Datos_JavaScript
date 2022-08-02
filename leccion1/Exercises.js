var ejercicio = 2;

switch (ejercicio) {
  case 1:
    Ejercicio1();
    break;
  case 2:
    Ejercicio2();
    break;
}

function Ejercicio1() {
  //Dado un número entero N en el rango [-100,100], mostrar su cuadrado.
  var number = 10;

  if (number >= -100 && number <= 100) {
    console.log(Math.pow(number, 2));
  } else {
    console.log("Numero erroneo.");
  }
}
function Ejercicio2() {
  // Si tengo las edades de cuatro personas (todos
  // números enteros positivos menores o iguales a 100),
  // ¿Cuál es la edad promedio?
  var edades = [22, 51, 19, 31];
  var suma = 0;
  var promedio;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 0 && edades[i] <= 100) {
      suma += edades[i];
    } else {
      console.log("Número erroneo.");
      return;
    }
  }
  console.log(suma / edades.length);
}
