confirm("Bienvenido a TheMusicHub!\nVamos a crear tu usuario!");

class User {
  constructor(nombre, edad, mail) {
    this.nombre = nombre;
    this.edad = edad;
    this.mail = mail;
  }

  mostrarDatos() {
    alert("Usuario creado correctamente " + this.nombre + "!");
  }
  agregarAmigo() {
    confirm("Tienes una solicitud de amistad de " + this.nombre + "!");
  }
}

const user1 = new User(
  prompt("Ingresa tu nombre de Usuario"),
  prompt("Ingresa tu edad"),
  prompt("Ingresa tu dirección de mail")
);

const user2 = new User("Jonatan", 32, "jlfagnani@hotmail.com");

user1.mostrarDatos();
user2.agregarAmigo();

//Array Amigos

const usuarios = ["Emiliano", "Jonatan", "Lucas", "Sabrina"];
const amigos = usuarios.slice(1, 4);
alert(`Tu lista de amigos se ha actualizado:\n${amigos.join("\n")}`);

//Music Gender Profile

let mainGender = prompt(
  `Cual es tu genero musical favorito?\nPrueba eligiendo entre Rock - Pop - EDM - Indie.`
);
let mainGenderinput = mainGender.toLowerCase();
if (mainGenderinput === "rock") {
  alert(`Suena genial!, has elegido Rock.`);
} else if (mainGenderinput === "pop") {
  alert(`Suena genial!, has elegido Pop.`);
} else if (mainGenderinput === "edm") {
  alert(`Suena genial!, has elegido EDM.`);
} else if (mainGenderinput === "indie") {
  alert(`Suena genial!, has elegido Indie.`);
} else {
  alert(`Suena genial!, pero no esta entre las opciones\nIntenta nuevamente.`);
}
