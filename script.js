/*Predecir la desestruturacion*/
//Ejercion N° 1
/*El primer const hace que se guarde el primer leemento del array en randomCar 
en el segundo const guarda el segundo elemento del array ya que la , hace que omita el primer elemeto */
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//Ejercicio N° 2
/*lanza un error de ReferenceError: name is not defined ya que otherName no esta definido */
/*const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);*/

//Ejercicio N° 3
/* Hay una desestruturacion para password pero como no existe en el objeto tira un undefined
Pero como password es una variable global al hacerle un console.log lo muestra pantalla*/
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);

//Ejercicio N° 4
/* Guarda el valor del elemento indice 1 en first que es 1
Guarda el valor del elemento indice 3 en second que es 5
Guarda el valor del elemento indice 8 en third que es 2
Como en lo console.log hace una comparacion tira true o false */
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second); //false 2!=5
console.log(first == third);  //true 2 = 2

//Ejercicio N° 5
/*key agarra lo de key en la funcion que es value lo mismo para secondKey que en este caso seria un arreglo de numeros
willthisWork agarra el valor del array numerico en el indice 1 que es 5
imprime value, luego el array, como indica el indice 0 imprime el elelmento ahi que es 1 
luego el valor de willThisWork que es 5 */
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);



