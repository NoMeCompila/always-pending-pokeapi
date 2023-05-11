let sideBar = document.querySelector("#side-bar");
let abrir = document.querySelector("#menu");
let cerrar = document.querySelector("#close");

abrir.addEventListener("click", () => {
    sideBar.classList.add("active");
})

cerrar.addEventListener("click", () => {
    sideBar.classList.remove("active");
})