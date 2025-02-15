document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.querySelector(".points-container");

    // Datos de los puntos interactivos con imágenes
    const points = [
        { x: "34%", y: "78%", info: "📍 Partenón: Templo de Atenea.", link: "espacio.html#partenon", image: "images/partenon.jpg" },
        { x: "28%", y: "58%", info: "🏛 Ágora: Centro político y social.", link: "espacio.html#agora", image: "images/agora.jpg" },
        { x: "54%", y: "78%", info: "⚡ Templo de Zeus: Gran templo griego.", link: "espacio.html#templo-zeus", image: "images/templo-zeus.jpg" },
        { x: "47%", y: "78%", info: "🏘 Plaka: Barrio histórico.", link: "espacio.html#plaka", image: "images/plaka.jpg" },
        { x: "40%", y: "72%", info: "🎭 Teatro de Dionisio: Cuna del drama.", link: "espacio.html#teatro-dionisio", image: "images/teatro-dionisio.jpg" },
        { x: "74%", y: "57%", info: "🏛 Museo Bizantino: Arte religioso.", link: "espacio.html#museo-bizantino", image: "images/museo-bizantino.jpg" },
        { x: "51%", y: "12%", info: "🏺 Museo Arqueológico: Historia antigua.", link: "espacio.html#museo-arqueologico", image: "images/museo-arqueologico.jpg" }
    ];

    let activeInfoBox = null;

    // Crea los puntos interactivos
    points.forEach(point => {
        const pointElement = document.createElement("div");
        pointElement.classList.add("map-point");
        pointElement.style.left = point.x;
        pointElement.style.top = point.y;
        pointElement.textContent = "📍"; 

        // Crear un cuadro de información dentro del punto
        const infoBox = document.createElement("div");
        infoBox.classList.add("info-box");

        // Crear la imagen
        const infoImage = document.createElement("img");
        infoImage.src = point.image;
        infoImage.alt = "Imagen de " + point.info;
        infoImage.classList.add("info-image");

        // Crear el texto y el enlace
        const infoText = document.createElement("div");
        infoText.textContent = point.info;
        const infoLink = document.createElement("a");
        infoLink.href = point.link;
        infoLink.textContent = "Ver más detalles";
        infoLink.style.color = "white";
        infoLink.style.pointerEvents = "none"; // Desactiva el enlace por defecto

        // Agregar elementos al cuadro de información
        infoBox.appendChild(infoImage);
        infoBox.appendChild(infoText);
        infoBox.appendChild(infoLink);
        pointElement.appendChild(infoBox);
        mapContainer.appendChild(pointElement);

        // Evento para mostrar el cuadro al hacer hover
        pointElement.addEventListener("mouseenter", () => {
            infoBox.style.opacity = "1";
        });

        // Evento para ocultar el cuadro cuando el mouse sale
        pointElement.addEventListener("mouseleave", () => {
            if (activeInfoBox !== infoBox) {
                infoBox.style.opacity = "0";
            }
        });

        // Evento para hacer que el clic fije el cuadro abierto y active el enlace
        pointElement.addEventListener("click", (event) => {
            event.stopPropagation(); 

            if (activeInfoBox === infoBox) {
                infoBox.style.opacity = "0";
                infoLink.style.pointerEvents = "none"; 
                activeInfoBox = null;
            } else {
                document.querySelectorAll(".info-box").forEach(box => {
                    box.style.opacity = "0";
                    box.querySelector("a").style.pointerEvents = "none"; 
                });
                infoBox.style.opacity = "1";
                infoLink.style.pointerEvents = "auto"; 
                activeInfoBox = infoBox;
            }
        });
    });

    // Cerrar el cuadro si se hace clic fuera de los puntos
    document.addEventListener("click", () => {
        if (activeInfoBox) {
            activeInfoBox.style.opacity = "0";
            activeInfoBox.querySelector("a").style.pointerEvents = "none"; 
            activeInfoBox = null;
        }
    });
});
