
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

<<<<<<< HEAD
// console.log(jon);//Muestra el objeto en la consola
// console.log(jon["nombre"]); //Muestra la propiedad nombre del objeto.



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

console.log(uno)





=======
// console.log(jon);
console.log(jon["nombre"]);         //Accediendo al atributo
console.log(jon.apellido);          //Accediendo al atributo
console.log(jon.pasatiempos[1]);    //Accediendo al arreglo
console.log(jon.contacto);          //Accediendo al objeto 
console.log(jon.contacto.twitter);  //Accediendo al objeto y a su cuerpo
console.log(jon.contacto.movil);

jon.saludar();                       //Mandando llamar a la funcion que esta dentro dl objeto

jon.decirMiNombre();
>>>>>>> a17a0c54e966bbb0d9f91042e72ae2e2eef2a7a9






