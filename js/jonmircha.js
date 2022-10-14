
// Curso de javascript Jon Mircha
console.log("Course JOnMirchA");
//Funciones

//Arreglos








// Objetos objects

let a = new String ("Hola");
// console.log(a);

const b = {};
// console.log(b);





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
    saludar:function(){     //Funciones    
        console.log("Hola :)");
    }
}

console.log(jon);
console.log(jon["nombre"]);






