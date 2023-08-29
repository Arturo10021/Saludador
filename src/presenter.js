import {botSaludos} from "./saludador.js";

    const nombre = document.querySelector("#nombre");
    const form = document.querySelector("#botSaludos-form");
    const div = document.querySelector("#resultado-div");
    
    form.addEventListener('submit', function (event) {
      event.preventDefault();
        const botSaludos = new botSaludos();
        div.innerHTML = "<p>"+botSaludos.saludar(nombre.value)+"</p>";
    }
);