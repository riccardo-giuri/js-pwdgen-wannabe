const firstName = prompt("Inserire il proprio nome");
const lastName = prompt("Inserire il proprio cognome");
const color = prompt("Inserire il proprio colore preferito");
const age = prompt("Inserire la propria età");


document.getElementById("psw_base").innerHTML = `La password è ${firstName}${lastName}${color}21`;
document.getElementById("psw_bonus").innerHTML = `La password è ${firstName}${lastName}${color}${21 + parseInt(age)}`;