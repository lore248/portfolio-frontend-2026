/*
==================================================
ROADMAP FRONTEND DEVELOPER 2026

Archivo:
app.js

Objetivo:
Gestionar el progreso del roadmap.

Funciones:

- Guardar tareas completadas.
- Recuperar tareas.
- Guardar notas personales.
- Mostrar progreso.
- Actualizar título de la página.

==================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*
    ==================================================
    ELEMENTOS DEL DOM
    ==================================================
    */

    const tareas = document.querySelectorAll(
        'input[type="checkbox"]'
    );

    const textarea = document.querySelector(
        "textarea"
    );

    /*
    ==================================================
    CREAR CONTADOR DE PROGRESO
    ==================================================
    */

    const progreso = document.createElement("div");

    progreso.id = "progreso";

    progreso.style.margin = "20px 0";

    progreso.style.padding = "15px";

    progreso.style.background = "#dbeafe";

    progreso.style.borderRadius = "10px";

    progreso.style.fontWeight = "bold";

    progreso.style.color = "#1d4ed8";

    const main = document.querySelector("main");

    main.prepend(progreso);

    /*
    ==================================================
    CARGAR CHECKBOXES
    ==================================================
    */

    tareas.forEach((tarea, indice) => {

        const guardada = localStorage.getItem(
            `tarea-${indice}`
        );

        if (guardada === "true") {

            tarea.checked = true;

        }

        tarea.addEventListener("change", () => {

            localStorage.setItem(

                `tarea-${indice}`,

                tarea.checked

            );

            actualizarProgreso();

        });

    });

    /*
    ==================================================
    GUARDAR NOTAS PERSONALES
    ==================================================
    */

    if (textarea) {

        const notas = localStorage.getItem("notas");

        if (notas !== null) {

            textarea.value = notas;

        }

        textarea.addEventListener("input", () => {

            localStorage.setItem(

                "notas",

                textarea.value

            );

        });

    }

    /*
    ==================================================
    ACTUALIZAR PROGRESO
    ==================================================
    */

    function actualizarProgreso() {

        const total = tareas.length;

        const completadas = document.querySelectorAll(
            'input[type="checkbox"]:checked'
        ).length;

        const porcentaje = Math.round(

            (completadas / total) * 100

        );

        progreso.innerHTML =

            `
            <strong>Progreso del Roadmap</strong><br><br>

            ${completadas} de ${total} tareas completadas
            (${porcentaje}%)
            `;

        document.title =
            `(${porcentaje}%) Roadmap Frontend Developer 2026`;

        console.log(

            `Progreso: ${completadas}/${total}`

        );

    }

    /*
    ==================================================
    NAVEGACIÓN DEL ROADMAP
    ==================================================
    */


    window.mostrarFase = function(idFase) {

        const fases =
            document.querySelectorAll(
                ".fase-oculta"
            );


        const tareas =
            document.querySelectorAll(
                ".tarea-oculta"
            );


        fases.forEach((fase) => {

            fase.style.display = "none";

        });


        tareas.forEach((tarea) => {

            tarea.style.display = "none";

        });


        const faseSeleccionada =
            document.getElementById(idFase);


        if (faseSeleccionada) {

            faseSeleccionada.style.display = "block";


            faseSeleccionada.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    };


    /*
    ==================================================
    MOSTRAR UNA TAREA
    ==================================================
    */


    window.mostrarTarea = function(idTarea) {

        const tareas =
            document.querySelectorAll(
                ".tarea-oculta"
            );


        tareas.forEach((tarea) => {

            tarea.style.display = "none";

        });


        const tareaSeleccionada =
            document.getElementById(idTarea);


        if (tareaSeleccionada) {

            tareaSeleccionada.style.display = "block";


            tareaSeleccionada.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    };


    /*
    ==================================================
    VOLVER A UNA FASE
    ==================================================
    */


    window.volverFase = function(event, idFase) {

        event.preventDefault();


        mostrarFase(idFase);

    };


    /*
    ==================================================
    VOLVER AL INICIO
    ==================================================
    */


    window.volverInicio = function(event) {

        event.preventDefault();


        const fases =
            document.querySelectorAll(
                ".fase-oculta"
            );


        const tareas =
            document.querySelectorAll(
                ".tarea-oculta"
            );


        fases.forEach((fase) => {

            fase.style.display = "none";

        });


        tareas.forEach((tarea) => {

            tarea.style.display = "none";

        });


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };


    /* ==================================================
    PROYECTO FINAL - FASE 2
    FUNCIONES ADICIONALES
    ================================================== */


    /*
    ==================================================
    FORMULARIO DE CONTACTO
    ==================================================
    */

    const formulario =
        document.querySelector("#contacto form");


    if (formulario) {

        formulario.addEventListener(
            "submit",
            (evento) => {

                evento.preventDefault();

                alert(
                    "Formulario enviado correctamente."
                );

                formulario.reset();

            }
        );

    }


    /*
    ==================================================
    NAVEGACIÓN INTERNA
    ==================================================
    */

    const enlacesNavegacion =
        document.querySelectorAll(
            'nav a[href^="#"]'
        );


    enlacesNavegacion.forEach(
        (enlace) => {

            enlace.addEventListener(
                "click",
                (evento) => {

                    const destino =
                        enlace.getAttribute("href");


                    if (
                        destino &&
                        destino !== "#"
                    ) {

                        const elemento =
                            document.querySelector(destino);


                        if (elemento) {

                            evento.preventDefault();

                            elemento.scrollIntoView({
                                behavior: "smooth"
                            });

                        }

                    }

                }
            );

        }
    );


    /*
    ==================================================
    COMPROBACIÓN DE RECURSOS MULTIMEDIA
    ==================================================
    */

    const imagenes =
        document.querySelectorAll("img");


    imagenes.forEach(
        (imagen) => {

            imagen.addEventListener(
                "error",
                () => {

                    console.warn(
                        "No se ha podido cargar la imagen:",
                        imagen.src
                    );

                }
            );

        }
    );


    const audios =
        document.querySelectorAll("audio");


    audios.forEach(
        (audio) => {

            audio.addEventListener(
                "error",
                () => {

                    console.warn(
                        "No se ha podido cargar el archivo de audio."
                    );

                }
            );

        }
    );


    const videos =
        document.querySelectorAll("video");


    videos.forEach(
        (video) => {

            video.addEventListener(
                "error",
                () => {

                    console.warn(
                        "No se ha podido cargar el archivo de vídeo."
                    );

                }
            );

        }
    );


    /*
    ==================================================
    MENSAJE DE COMPROBACIÓN
    ==================================================
    */

    console.log(
        "Proyecto final de la Fase 2 cargado correctamente."
    );

    /*
    ==================================================
    INICIALIZAR
    ==================================================
    */

    actualizarProgreso();

});