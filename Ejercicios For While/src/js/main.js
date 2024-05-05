//Ejercicios: FOR-WHILE

// 1. if-else con uso de operadores de comparación, Operadores de asignación con
// Resta y asignación, y algún método de string:

// Enunciado del Problema: Crea un programa que tome dos números del usuario y
// utilice una estructura de control if-else para determinar si el primer número es
// mayor que el segundo. Si es así, resta el segundo número al primero y muestra el
// resultado en consola. Además, utiliza algún método de string para indicar si el
// resultado es un número positivo o negativo.

// let num1 = parseFloat(prompt("Escribe tu numero 1: "));
// let num2 = parseFloat(prompt("Escribe tu numero 2: "));

'Ejercicio 1'

// if (num1 > num2){
//     console.info("El número",num1,"es mayor que",num2)
//     let restaNums = num1 - num2
//     if (restaNums > 0){
//         console.info("La resta entre", num1, "y", num2,"es positiva");
//     }else{
//         console.info("La resta entre", num1, "y", num2, "es negativa");
//     }
// }else{
//     console.info("El número", num1, "no es mayor que", num2);
// }

"FIN"

// 2. switch case con uso de operadores de comparación, Método Math y
// Number.parseFloat(text):

// Enunciado del Problema: Desarrolla un programa que solicite al usuario
// seleccionar una operación matemática (suma, resta, multiplicación o división)
// mediante un menú. Utiliza un switch case para realizar la operación seleccionada
// en dos números ingresados por el usuario. Además, utiliza el método Math para
// redondear el resultado y conviértelo a un número decimal utilizando
// Number.parseFloat(text) antes de mostrarlo en consola.

"Ejercicio 2";

// let num1 = parseFloat(prompt("Escribe tu numero 1: "));
// let num2 = parseFloat(prompt("Escribe tu numero 2: "));
// let menu = parseInt(prompt(`MENU:
// 1. Sumar
// 2. Restar
// 3. Multiplicar
// 4. Dividir`))

// switch (menu) {
//     case 1:
//         let sumaNums = num1 + num2
//         console.info("La suma entre", num1, "y", num2, "es",Math.round(sumaNums));
//         break;
//     case 2:
//         let restaNums = num1 - num2
//         console.info("La resta entre", num1, "y", num2, "es", Math.round(restaNums));
//         break
//     case 3:
//         let multiNums = num1 * num2
//         console.info("El producto entre", num1, "y", num2, "es", Math.round(multiNums));
//         break
//     case 4:
//         if (num2 != 0){
//             let divNums = num1 / num2
//             console.info("La division entre", num1, "y", num2, "es", Math.round(divNums));
//         }else{
//             console.error("La division entre", num1, "y", num2, "no es posible");
//         }
//         break
//     default:
//         console.warn("El numero ingresado no pertenece a ninguna opcion");
//         break;
// }

"FIN"

// 3. for con uso de operadores de comparación, Método Math y toString:

// Enunciado del Problema: Implementa un programa que solicite al usuario un
// número y utilice un bucle for para imprimir la tabla de multiplicar de ese número
// del 1 al 10. Además, utiliza el método Math para calcular cada producto y
// convierte el resultado a una cadena de texto utilizando toString antes de
// mostrarlo en consola.

"Ejercicio 3"

// let tablaDelNum = parseInt(prompt("Escribe tu numero: "));

// for (i=1; i<11; i++){
//     console.info(`${tablaDelNum} x ${i} = ${(tablaDelNum*i).toString()}`);
// }

"FIN"

// 4. if-else con uso de operadores lógicos y Método Math:

// Enunciado del Problema: Crea un programa que pida al usuario su edad y la
// cantidad de horas de sueño diarias. Utiliza una estructura de control if-else con
// operadores lógicos para determinar si la persona es mayor de edad (más de 18
// años) y si duerme lo suficiente (más de 7 horas). Utiliza el Método Math para
// redondear la cantidad de horas de sueño y muestra un mensaje en consola
// indicando si la persona tiene un buen equilibrio entre edad y descanso.

"Ejercicio 4"

// let nombre = prompt("Dime tu nombre: ");
// let edad = parseInt(prompt('Dime tu edad: '));
// let horasDormidos = parseFloat(prompt("Dime tu cantidad de horas de sueño diaria: "));

// if (edad >= 18) {
//     console.log(nombre,'Sos mayor de edad. Comportáte como un adulto')
// }else{
//     console.log("Sos menor de edad. Debés contenerte unos años mas");
// }

// if (horasDormidos <= 8) {
//     console.log("Compañero, duerme mas y cuidate mucho");
// } else if (horasDormidos > 8 && horasDormidos <= 11){
//     console.log("Bien ahi, sigue durmiendo de esa manera");
// }
// else {
//     console.log("Buen descanso, pero demasiado. Bajále a la cosa, boludito");
// }

"FIN"

// 5. switch case con uso de operadores lógicos, substring y slice:

// Enunciado del Problema: Desarrolla un programa que solicite al usuario un día de
// la semana (por ejemplo, "lunes"). Utiliza un switch case con operadores lógicos
// para determinar si el día ingresado es un día laboral (de lunes a viernes) o un fin
// de semana (sábado o domingo). Luego, utiliza los métodos substring y slice de
// string para mostrar un mensaje en consola indicando si es un día hábil o de
// descanso.

"Ejercicio 5"

// let diaActual = prompt(`MENÚ DE SELECCIÓN:
// 1. lunes
// 2. martes
// 3. miercoles
// 4. jueves
// 5. viernes
// 6. sábado
// 7. domingo
// `)

// let diasSemanaLabor = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes']
// let diasSemanaFinDe = ['sabado', 'domingo']

// switch (diaActual) {
//     case diasSemanaLabor.includes(diaActual):
//         console.info("Hoy tienes que trabajar");
//         break;
//     case diasSemanaFinDe.includes(diaActual):
//         console.info("Hoy no trabajas. Feliz descanso");
//         break
//     default:
//         console.warn("El texto ingresado no pertenece a ninguna opcion");
//         break;
// }

"FIN OP 1"

// switch (diaActual) {
//     case '1':
//         console.info("Hoy tienes que trabajar");
//         break;
//     case '2':
//         console.info("Hoy tienes que trabajar");
//         break;
//     case '3':
//         console.info("Hoy tienes que trabajar");
//         break;
//     case '4':
//         console.info("Hoy tienes que trabajar");
//         break;
//     case '5':
//         console.info("Hoy tienes que trabajar");
//         break;
//     case '6':
//         console.info("Hoy NO tienes que trabajar");
//         break;
//     case '7':
//         console.info("Hoy NO tienes que trabajar");
//         break;
//     default:
//         console.warn("El valor ingresado no pertenece a ninguna opcion");
//         break;
// }

"FIN OP 2"

// 6. for con uso de operadores lógicos y Método Math:

// Actividades Modulo 3
// Elaborado: RIWI 16 de noviembre de 2023
// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// un número. Utiliza un bucle for para encontrar la suma de todos los números
// primos hasta el número ingresado. Además, utiliza operadores lógicos para
// identificar números impares y el Método Math para realizar cálculos. Muestra el
// resultado en consola.

"Ejercicio 6.1"

//let numParaImpar = parseInt(prompt("Escribe tu numero: "));
//let sumaNumsImpares = 0;
//for (let i = 0; i <= numParaImpar; i++) {
//    if (i % 2 != 0){
//        sumaNumsImpares += i;
//    }
//}
//console.log("El resultado de la suma de los primeros",numParaImpar,"numeros impares naturales es:",sumaNumsImpares);

"Ejercicio 6.2"

// let numParaPrimo = parseInt(prompt("Ingresa un numero: "));
// let sumaNumsPrimos = 0

// for (let i = 0; i <= numParaPrimo; i++) {
//     if (((i != 1)&&(i%3 != 0)&&(i%2 != 0)) || (i==2) || (i==3)){
//         sumaNumsPrimos = sumaNumsPrimos + i
//         console.log(sumaNumsPrimos);
//     }
// }
// console.log('El resultado de la suma de los primeros',numParaPrimo,'numeros primos naturales es:',sumaNumsPrimos)

"FIN"

// 7. if-else con uso de operadores de asignación, Método Math y
// Number.parseInt:

// Enunciado del Problema: Crea un programa que solicite al usuario ingresar un
// número decimal. Utiliza una estructura if-else con operadores de asignación para
// redondear el número hacia abajo utilizando el método Math.floor() y luego
// convierte el resultado a un número entero utilizando Number.parseInt. Muestra
// el número original y el número redondeado en consola.

"Ejercicio 7"

// let num = parseFloat(prompt("Ingresar el número decimal deseado:"))

// if (Number.isFinite(num)) {
//     let numRedondeado = Math.floor(num)
//     console.log("El numero original ingresado es:",num);
//     console.log("El numero redondeado hacia abajo es:",Number.parseInt(numRedondeado));
// }

"FIN"

// 8. switch case con uso de operadores de asignación, replacing y
// Number.parseInt:

// Enunciado del Problema: Desarrolla un programa que pida al usuario una frase y
// utilice un switch case para realizar diferentes operaciones en la frase.
// Dependiendo de la opción seleccionada (por ejemplo, 1 para convertir a
// mayúsculas, 2 para reemplazar espacios con guiones, etc.), realiza la operación
// correspondiente y muestra el resultado en consola. Utiliza Number.parseInt para
// manejar las opciones ingresadas por el usuario.

"Ejercicio 8"

// let frase = prompt("Escribe una frase");
// let op = parseInt(prompt(`MENU:
// 1. Convertir mayúsculas
// 2. Convettir minúsculas
// 3. Reemplazar espacios por guiones
// 4. Crear arreglo
// 5. Repetir frase dos veces
// `)
// );

// switch (op) {
//     case 1:
//         console.info(frase.toUpperCase());
//     break;
//     case 2:
//         console.info(frase.toLowerCase());
//     break;
//     case 3:
//         console.info(frase.replaceAll(" ", "-"));
//     break;
//     case 4:
//         console.info(frase.split(" "));
//     break;
//     case 5:
//         console.info(frase.repeat(2));
//     break;
//     default:
//         console.warn("El valor ingresado no pertenece a ninguna opcion");
//     break;
// } 

"FIN"

// 9. for loop con uso de operadores de asignación ToUpperCase - ToLowerCase:

// Enunciado del Problema: Implementa un programa que solicite al usuario ingresar
// una palabra. Utiliza un bucle for para alternar entre caracteres en mayúsculas y
// minúsculas en la palabra. Utiliza operadores de asignación como toUpperCase() y
// toLowerCase() para cambiar el caso de cada caracter en cada iteración del bucle.
// Muestra el resultado en consola.

"Ejercicio 9"
// let palabra = prompt("Escribe una frase").toLowerCase();

// for (let i = 0; i < palabra.length; i = i + 2) {
//     palabra = palabra.replace(palabra[i], palabra[i].toUpperCase());
// }
// console.log(palabra);

"FIN"