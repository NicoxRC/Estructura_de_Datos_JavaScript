var ejercicio = 5;

switch (ejercicio) {
  case 1:
    Exercise1();
    break;
  case 2:
    Exercise2();
    break;
  case 3:
    Exercise3();
    break;
  case 4:
    Exercise4();
    break;
  case 5:
    Exercise5();
    break;
}

function Exercise1() {
  //Dado un número entero N en el rango [-100,100], mostrar su cuadrado.
  var number = 10;

  if (number >= -100 && number <= 100) {
    console.log(Math.pow(number, 2));
  } else {
    console.log("Wrong number.");
  }
}
function Exercise2() {
  // Si tengo las edades de cuatro personas (todos
  // números enteros positivos menores o iguales a 100),
  // ¿Cuál es la edad promedio?
  var edades = [22, 51, 19, 31];
  var suma = 0;
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 0 && edades[i] <= 100) {
      suma += edades[i];
    } else {
      console.log("Wrong number.");
      return;
    }
  }
  console.log(suma / edades.length);
}
function Exercise3() {
  // Dado un número entero de cuatro dígitos, 
  // es decir en el rango [1000, 9999], se debe
  // mostrar la suma de sus cuatro dígitos.
  var result = 0;
  var number = 6666;
  var str = number.toString();

  for (let i = 0; i < str.length; i++) {
    result += Number(str[i]);
  }
  console.log(result);
}
function Exercise4() {
  // Dado un número entero N en el rango [1, 10000], 
  // se debe mostrar 2*N si N es par, o
  // 3*N en caso contrario.
  var n = 40;
  if (n % 2 == 0) {
    console.log(2 * n);
  } else {
    console.log(3 * n);
  }
}
function Exercise5() {
  // Dados tres números enteros, cada uno en el 
  // rango [-10000, 10000], se debe mostrar
  // cuál es el mayor de todos.
  var mayor = [-234, -17, -891];
  var count = 2;
  for (let i = 0; i < mayor.length; i++) {
    if (count > mayor[i]){
      count = mayor[i];
    }
  }
  console.log(count);
}
