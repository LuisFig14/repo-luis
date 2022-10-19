
// Curso de javascript Jon Mircha
console.log("Course JOn MirchA");
//Funciones

//Arreglos








// Objetos objects

let a = new String ("Hola");
// console.log(a);

const b = {};
// console.log(b);


//Dentro de los objetos las variables se llaman atributos/propiedades
//A las funciones se les llama métodos.

const jon = {                   //Se crea el objeto
    nombre:"Luis",              //Se pueden guardar strings
    apellido:"Figueroa",        
    edad: 35,
    pasatiempos:["Correr","Hacer ejercicio","Escuchar música"], //Un arreglo dentro del objeto
    soltero:false, //Boolean
    contacto:{  //Otro objeto
        email:"fernandolic1407@gmail.com",
        twitter:"@Fer",
        movil: 3141170867   //Numeros
    },
    saludar:function(){     //Funciones  //Métodos 
        console.log("Hola :)");
    },
    decirMiNombre:function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}


// console.log(jon);//Muestra el objeto en la consola
// console.log(jon["nombre"]); //Muestra la propiedad nombre del objeto.
// console.log(jon.apellido);          //Accediendo al atributo
// console.log(jon.pasatiempos[1]);    //Accediendo al arreglo
// console.log(jon.contacto);          //Accediendo al objeto 
// console.log(jon.contacto.twitter);  //Accediendo al objeto y a su cuerpo
// console.log(jon.contacto.movil);
// jon.saludar();                       //Mandando llamar a la funcion que esta dentro del objeto
// jon.decirMiNombre();
// console.log(Object.keys(jon)); //Object.keys muestra todas las llaves del objeto
// console.log(Object.values(jon));//values noes muetra los valores del objeto en un arreglo iterable.
// console.log(jon.hasOwnProperty("nombre")); //Busca si tiene una propiedad con ese nombre y devuelve un boolean





//OPERADORES
/*Aritméticos + - * / % () */

let aa = 5 + 5 - 10 * 3 ;
let modulo = 5%2;
//Una division nos da el numero de arriba que es el cosiente
//En cuestión del módulo es el (residuo) es el numero que está abajo(solo que nos da en numero entero antes de punto decimal)
 
// console.log(aa);
// console.log(modulo)

//OPERADORES RELACIONALES > < >= <= == === != !==

// console.log (9>2);
// console.log (3<3);
// console.log (7>=7);

/* 
=   1 igual es asignación de variable
==  2 iguales es comparación de valores (solo valores)
=== 3 iguales es comparación de tipo de dato y de valor
*/

// console.log(2 == "2"); //True da verdadero
// console.log(2 === "2");//False


//OPERADORES DE INCREMENTO Y DECREMENTO
let i = 1;
i = i + 2;  //3

//Suma
let suma = 1
suma += 3;
// console.log ( suma );

//Multiplicación
let multipli = 2;
multipli *= 4;
// console.log(multipli);

//Resta
let resta = 5;
resta -= 2; //Hablado sería resta va a ser igual a resta menos 2; (resta vale 5 menos 2 //3);
// console.log(resta);


let division = 1;
division /= 3;
// console.log(division);


//Operador unario
let uno = 1;
uno++;
// console.log(uno)

//Operadores lógocos 
//!Not: Niega, es decir lo que es verdadero lo vuelve falso
//||or: Cuando tengo 2 o más condiciones con que una se cumpla es decir sea verdadera, el or validará dará verdadero
// &&and: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, para que AND se cumpla

// console.log(!false); //Lo vuelve true
// console.log(!true); //Lo convierte a falso

console.log((9 === 9) || (9 === "9"));  //TRUE
console.log((9 === 9) && (9 === "9"));    //FALSE porque lo ultimo no se cumple


