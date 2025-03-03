const nombre = prompt("¿Cual es tu nombre?:");
const edad = prompt("¿Cuantos años tienes?");
const prog = prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre} , tienes ${edad} años y ya estás aprendiendo ${prog}`);

const eleccion = prompt(`¿Te gusta estudiar ${prog} ? Responde con el número 1 para SÍ o 2 para NO.`)
const si = "1"
const no = "2"

if (eleccion === si) {
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
} else {
    alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
}
