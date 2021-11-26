// confirm("Bienvenido a TheMusicHub!\nVamos a crear tu usuario!");

// class User {
//   constructor(nombre, edad, mail) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.mail = mail;
//   }

//   mostrarDatos() {
//     alert("Usuario creado correctamente " + this.nombre + "!");
//   }
//   agregarAmigo() {
//     confirm("Tienes una solicitud de amistad de " + this.nombre + "!");
//   }
// }

// const user1 = new User(
//   prompt("Ingresa tu nombre de Usuario"),
//   prompt("Ingresa tu edad"),
//   prompt("Ingresa tu dirección de mail")
// );

// const user2 = new User("Jonatan", 32, "jlfagnani@hotmail.com");

// user1.mostrarDatos();
// user2.agregarAmigo();

// //Array Amigos

// const usuarios = ["Emiliano", "Jonatan", "Lucas", "Sabrina"];
// const amigos = usuarios.slice(1, 4);
// alert(`Tu lista de amigos se ha actualizado:\n${amigos.join("\n")}`);

// //Music Gender Profile

// let mainGender = prompt(
//   `Cual es tu genero musical favorito?\nPrueba eligiendo entre Rock - Pop - EDM - Indie.`
// );
// let mainGenderinput = mainGender.toLowerCase();
// if (mainGenderinput === "rock") {
//   alert(`Suena genial!, has elegido Rock.`);
// } else if (mainGenderinput === "pop") {
//   alert(`Suena genial!, has elegido Pop.`);
// } else if (mainGenderinput === "edm") {
//   alert(`Suena genial!, has elegido EDM.`);
// } else if (mainGenderinput === "indie") {
//   alert(`Suena genial!, has elegido Indie.`);
// } else {
//   alert(`Suena genial!, pero no esta entre las opciones\nIntenta nuevamente.`);
// }

//Se reemplaza prompt con inputs en HTML
function mostrarDatos() {
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("mail").value;
  if (nombre === "") {
    alert(`Completa todos los campos.`);
  } else
    alert(
      `Te has registrado correctamente ${nombre}!\nTe enviamos un mail a ${mail}. `
    );
}

//cancion de spotify desde js para usar en array

let spoty = document.createElement("iframe");
spoty.src =
  "https://open.spotify.com/embed/track/44ADyYoY5liaRa3EOAl4uf?utm_source=generator&theme=0";
width = "100%";
height = "80";
frameBorder = "0";
allowfullscreen = "";
allow =
  "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
document.body.appendChild(spoty);

//Canciones a reproducir

const playCancion = document.getElementsByClassName("play");
const stopCancion = document.getElementsByClassName("stop");
const volumen = document.querySelector(".volumen");

let audio;

for (elemento of playCancion) {
  elemento.addEventListener("click", function () {
    let cancion = this.getAttribute("id");
    audio = new Audio(`../assets/canciones/${cancion}.mp3`);
    audio.play();
  });
}

for (elemento of stopCancion) {
  elemento.addEventListener("click", function () {
    audio.pause();
  });
}

volumen.addEventListener("click", function () {
  let vol = this.value;
  audio.volume = vol;
});

// Variables
// const songs = [
//   {
//     id: 1,
//     name: "Slide Away - Miley Cyrus",
//     link: (
//       <iframe
// src="https://open.spotify.com/embed/track/44ADyYoY5liaRa3EOAl4uf?utm_source=generator&theme=0"
// width="100%"
// height="80"
// frameBorder="0"
// allowfullscreen=""
// allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//       ></iframe>
//     ),
//   }
// ];

// function showSong() {
//   songs.forEach((song) => {
//     const div = document.createElement("div");
//   });
// }
