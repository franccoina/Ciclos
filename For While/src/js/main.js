//For-While

//WHILE

let nums1 = [1,2,3,4,5,6,7,8,9,10]
let i = 0

console.groupCollapsed('While as a for')
while (i<nums1.length){
    console.log(nums1[i])
    i++
} 
console.groupEnd()
console.log("")

//FOR                                          Recorrer cierto numero de veces (ITERADOR)

const listFruits = [
    "apple",
    "orange",
    "banana",
    "grape",
    "strawberry",
    "kiwi",
    "pineapple",
    "watermelon",
    "mango",
    "pear",
    "peach",
    "plum",
    "cherry",
    "blueberry",
    "raspberry",
    "blackberry",
    "lemon",
    "lime",
    "coconut",
    "pomegranate"
];

console.groupCollapsed('For')
for (let i = 0; i < listFruits.length; i++) {
    console.log(listFruits[i])
}
console.groupEnd()
console.log("")

//FOREACH FOR LISTS                             Recorrer del principio al final sin necesidad de poner un iterador

console.groupCollapsed('For-each')

console.groupCollapsed('Forma Uno')
listFruits.forEach (fruit => {
    console.log(fruit)
})
console.groupEnd()
console.groupCollapsed('Forma Dos')                 //Para generar un index
listFruits.forEach ((fruta,index) => {
    console.info("La fruta",fruta,"esta en la posición",index)
})
console.groupEnd()

console.groupEnd()
console.log("")

//A

let nombres = [
    "Serena TEVES",
    "Lola SJ",
    "Franco NOVA",
    "Aidan COSTA",
    "Lana ITO",
    "Jess KIROVA",
    "Mateo FLOROS",
    "Cris KIOKO",
    "Vera JANSEN",
    "Melissa DS",
    "Carlo CRUZ",
    "Jacob DM"
];

console.groupCollapsed('Ejercicio For')
for (let j = 0; j < nombres.length; j++) {
    console.log(nombres[j])
}
console.groupEnd()
console.log("")

console.groupCollapsed('Ejercicio Foreach')
nombres.forEach (nombre => {
    //console.log(nombre.toUpperCase())                                                             //NOMBRE APELLIDO
    let nombreSplit = nombre.split(" ")
    //console.log(nombreSplit[1])                                                                   //[Nombre, APELLIDO]
    
    //let primeraLetra = nombreSplit[0].charAt(0)
    
    let primeraLetraNombre = nombreSplit[0].charAt(0).toLowerCase()
    let primeraLetraApellido = nombreSplit[1].charAt(0).toLowerCase()
    
    //let concatNombre = primeraLetra + ". " + nombreSplit[1]
    //console.log(concatNombre)                                                                     //N. APPELLIDO
                    
    console.log(primeraLetraNombre + ". " + primeraLetraApellido + ".")                             //n. a.
})

console.groupEnd()
console.log("")

//FOREACH FOR OBJECTS, METODOS KEYS Y VALUES

const codersRiwi = {
    id: '1023592055',
    name:'David Francisco',
    lastName: 'Blandon Mena',
    gender: 'M',
    height: 191,
    weight: 87,
    birthDate: new Date('05/11/2004 23:00:00'),
    country: 'Colombia',
    email: 'franccoina@gmail.com'}

console.groupCollapsed('Foreach en Objetos')
console.table(codersRiwi)
//console.info(codersRiwi.email)
//console.info(codersRiwi['email'])

console.log(Object.keys(codersRiwi))
let keysCoderData1 = Object.keys(codersRiwi)

keysCoderData1.forEach(coderData => {
    console.log(coderData)
})
console.groupEnd()
console.log("")

//FOR-IN (OBJETOS)

console.groupCollapsed('For-in')
for (const keysCoderData2 in codersRiwi) {
    console.log(keysCoderData2)
    console.log(codersRiwi[keysCoderData2])
    console.log("")
}
console.groupEnd()
console.log("")

//FOR-OF (LISTAS)

console.groupCollapsed('For-of')
for (const coderData of keysCoderData1) {
    console.log(coderData)
}
console.groupEnd()
console.log("")

//METODO ENTRIES

let objectEntries = Object.entries(codersRiwi)
console.groupCollapsed('Metodo entries')
console.log(objectEntries)
console.groupEnd()
console.log("")

//LISTA CON OBJETOS

let listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];

console.groupCollapsed("Foreach y For-of en listas con objetos")
console.log(listaEmpleados[0].puesto)
console.log("")

listaEmpleados.forEach ( empleado => {
    document.writeln(empleado.nombre)
    console.log(empleado.nombre)
})
console.log("")
for (const empleado of listaEmpleados){
    document.writeln(empleado.nombre)
    console.log(empleado.nombre)
}
console.groupEnd()
console.log("")

//MAP

console.groupCollapsed("Map")

console.groupCollapsed("Si usaramos foreach")
const listaNumeros = [1,2,3,4,5,6,7,8,9,10]
const numeroMultiplicado1 = []

//Aqui nos tocaria ir agregando con push, ya que el foreach solo recorre

listaNumeros.forEach(numero =>{
    console.log("El numero",numero,"X 2 =",(numero*2))
    numeroMultiplicado1.push(numero*2)
})
console.info(numeroMultiplicado1)
console.groupEnd()
console.log("")

//Aqui ademas de recorrer, guarda lo que queramos de la variable inicial 
//en nuestra nueva variable nueva

console.groupCollapsed("Si usaramos map")
const numeroMultiplicado2 = listaNumeros.map(numero => {
    console.log("El numero",numero,"X 2 =",(numero*2))
    return numero * 2
})
console.info(numeroMultiplicado2)
console.groupEnd()

console.groupEnd()
console.log("")

//B

console.group('Ejercicio de lista Numeros Uno a Cien')

numerosUnoaCien = []

for (let i=0;i<100;i++){
    numerosUnoaCien.push(i+1)
}

console.log(numerosUnoaCien)
console.log("")

const numerosPares1 = numerosUnoaCien.map (numero =>{
    if ((numero%2) === 0){
        return numero
    }
})

//Tambien existe la funcion filter, que es lo mismo que map pero 
//no copia lo que le digamos que no tenga en cuenta

const numerosPares2 = numerosUnoaCien.filter (numero =>{
    if ((numero%2) === 0){
        return numero
    }
})

console.log(numerosPares1)
console.log(numerosPares2)
console.groupEnd()
console.log("")