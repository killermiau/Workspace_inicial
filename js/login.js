//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){



const loginForm  = document.getElementById("container")

loginForm.onsubmit= (e) => {
    e.preventDefault
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
}


});





