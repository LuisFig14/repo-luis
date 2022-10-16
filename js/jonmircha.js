
// Curso de javascript Jon Mircha
console.log("Course JOnMirchA");
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

// console.log(jon);
console.log(jon["nombre"]);         //Accediendo al atributo
console.log(jon.apellido);          //Accediendo al atributo
console.log(jon.pasatiempos[1]);    //Accediendo al arreglo
console.log(jon.contacto);          //Accediendo al objeto 
console.log(jon.contacto.twitter);  //Accediendo al objeto y a su cuerpo
console.log(jon.contacto.movil);

jon.saludar();                       //Mandando llamar a la funcion que esta dentro dl objeto

jon.decirMiNombre();






