// DATOS DE AUDÍFONOS (con más detalles e imágenes)
const audifonos = [
    // KZ
    { 
        nombre: "KZ EDX Pro", 
        precio: "$19 USD", 
        tipo: "kz", 
        desc: "Bajos potentes, excelente para reggaetón/electrónica. Muy ligeros y cómodos.", 
        enlace: "https://amzn.to/ejemplo-edx", 
        img: "img/edxpro.jpg",
        galeria: ["img/edxpro.jpg", "img/edxpro2.jpg", "img/edxpro3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Impedancia: 24Ω", "Sensibilidad: 104dB", "Cable desmontable: Sí"],
        sonido: "Bajos potentes, medios presentes, agudos brillantes"
    },
    { 
        nombre: "KZ ZSN Pro X", 
        precio: "$25 USD", 
        tipo: "kz", 
        desc: "Detalle en agudos, monitores híbridos con 2 drivers. Ideal para rock y metal.", 
        enlace: "https://amzn.to/ejemplo-zsn", 
        img: "img/zsnpro.jpg",
        galeria: ["img/zsnpro.jpg", "img/zsnpro2.jpg", "img/zsnpro3.jpg"],
        especificaciones: ["Driver híbrido: 1DD + 1BA", "Impedancia: 25Ω", "Sensibilidad: 112dB", "Cable trenzado"],
        sonido: "Agudos detallados, graves contundentes, ideal para monitoreo"
    },
    { 
        nombre: "KZ ZVX", 
        precio: "$28 USD", 
        tipo: "kz", 
        desc: "Construcción metálica, sonido cálido y natural. Muy robustos.", 
        enlace: "https://amzn.to/ejemplo-zvx", 
        img: "img/zvx.jpg",
        galeria: ["img/zvx.jpg", "img/zvx2.jpg", "img/zvx3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Construcción: Metal", "Impedancia: 32Ω", "Cable desmontable"],
        sonido: "Cálido, natural, excelente para largas sesiones"
    },
    { 
        nombre: "KZ Castor Bass Edition", 
        precio: "$22 USD", 
        tipo: "kz", 
        desc: "💥 ENFOCADO EN BAJOS. Tiene switches ajustables para potenciar el subgrave.", 
        enlace: "https://amzn.to/ejemplo-castorbass", 
        img: "img/castorbass.jpg",
        galeria: ["img/castorbass.jpg", "img/castorbass2.jpg", "img/castorbass3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Switches: 4 ajustables", "Impedancia: 24Ω", "Bass boost integrado"],
        sonido: "Subgrave potente, ideal para bassheads"
    },
    { 
        nombre: "KZ Castor Harman Edition", 
        precio: "$22 USD", 
        tipo: "kz", 
        desc: "🎵 Curva Harman neutra. Ideal para audiófilos que buscan fidelidad.", 
        enlace: "https://amzn.to/ejemplo-castorh", 
        img: "img/castorh.jpg",
        galeria: ["img/castorh.jpg", "img/castorh2.jpg", "img/castorh3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Switches: 4 ajustables", "Curva Harman", "Respuesta neutra"],
        sonido: "Balanceado, neutro, fiel a la grabación"
    },
    // CCA
    { 
        nombre: "CCA CRA", 
        precio: "$15 USD", 
        tipo: "cca", 
        desc: "🔥 BESTSELLER! Sonido en V, graves contundentes y agudos brillantes.", 
        enlace: "https://amzn.to/ejemplo-ccacra", 
        img: "img/ccacra.jpg",
        galeria: ["img/ccacra.jpg", "img/ccacra2.jpg", "img/ccacra3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Impedancia: 25Ω", "Sensibilidad: 110dB", "Costo-beneficio increíble"],
        sonido: "Divertido, enérgico, ideal para música moderna"
    },
    // Otros
    { 
        nombre: "7Hz x Crinacle Zero 2", 
        precio: "$25 USD", 
        tipo: "otros", 
        desc: "Neutral con subgrave. Favorito de audiófilos budget.", 
        enlace: "https://amzn.to/ejemplo-zero2", 
        img: "img/zero2.jpg",
        galeria: ["img/zero2.jpg", "img/zero2_2.jpg", "img/zero2_3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Impedancia: 32Ω", "Diseño: Colaboración Crinacle", "Premium económico"],
        sonido: "Neutral con subgrave, técnico y detallado"
    },
    { 
        nombre: "Moondrop Chu II", 
        precio: "$19 USD", 
        tipo: "otros", 
        desc: "Agudos detallados, cable intercambiable. Gran escena sonora.", 
        enlace: "https://amzn.to/ejemplo-chu2", 
        img: "img/chu2.jpg",
        galeria: ["img/chu2.jpg", "img/chu2_2.jpg", "img/chu2_3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Cable: Intercambiable", "Diseño: Metal", "Escena sonora amplia"],
        sonido: "Detallado, aireado, excelente para acústica"
    }
];

// Contenedor y filtros
const container = document.getElementById("cards-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");

// Función para abrir modal con detalles del audífono
function openModal(audio) {
    // Construir galería de imágenes
    let galleryHtml = '';
    if (audio.galeria && audio.galeria.length > 0) {
        galleryHtml = `
            <div class="modal-gallery">
                ${audio.galeria.map(img => `<img src="${img}" alt="${audio.nombre}" onerror="this.src='https://placehold.co/400x400?text=Imagen+2'">`).join('')}
            </div>
        `;
    }
    
    // Construir especificaciones
    let specsHtml = '';
    if (audio.especificaciones && audio.especificaciones.length > 0) {
        specsHtml = `
            <div class="modal-specs">
                <h3>📊 Especificaciones técnicas:</h3>
                <ul>
                    ${audio.especificaciones.map(spec => `<li>${spec}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    // Construir contenido del modal
    modalBody.innerHTML = `
        ${galleryHtml}
        <div class="modal-info">
            <h2>${audio.nombre}</h2>
            <div class="modal-price">${audio.precio}</div>
            <div class="modal-desc">
                <strong>🎵 Sonido:</strong> ${audio.sonido || audio.desc}
            </div>
            <div class="modal-desc">
                <strong>📝 Descripción:</strong> ${audio.desc}
            </div>
            ${specsHtml}
            <button class="modal-btn" id="modalBuyBtn">🛒 Comprar ahora - ${audio.precio}</button>
        </div>
    `;
    
    // Mostrar modal
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Evitar scroll
    
    // Evento del botón de compra en el modal
    const modalBuyBtn = document.getElementById("modalBuyBtn");
    if (modalBuyBtn) {
        modalBuyBtn.addEventListener("click", () => {
            window.open(audio.enlace, "_blank");
        });
    }
}

// Función para cerrar modal
function closeModalFunc() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

// Eventos del modal
closeModal.addEventListener("click", closeModalFunc);
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Función para renderizar tarjetas
function renderCards(filtro = "all") {
    let filtered = audifonos;
    if (filtro !== "all") {
        filtered = audifonos.filter(a => a.tipo === filtro);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results">🔍 No hay audífonos en esta categoría... ¡Pronto más!</div>';
        return;
    }
    
    // Construir HTML
    let html = "";
    for (let audio of filtered) {
        let tipoDisplay = audio.tipo.toUpperCase();
        if (audio.tipo === "kz") tipoDisplay = "🎧 KZ";
        if (audio.tipo === "cca") tipoDisplay = "🔊 CCA";
        if (audio.tipo === "otros") tipoDisplay = "🎵 OTROS";
        
        html += `
            <div class="card" data-audio-id="${audio.nombre}">
                <img src="${audio.img}" alt="${audio.nombre}" onerror="this.src='https://placehold.co/400x400?text=${encodeURIComponent(audio.nombre)}+🎧'">
                <span class="badge">${tipoDisplay}</span>
                <h3>${audio.nombre}</h3>
                <div class="price">${audio.precio}</div>
                <p class="desc">${audio.desc}</p>
                <button class="btn-buy details-btn">🔍 Ver más detalles</button>
            </div>
        `;
    }
    container.innerHTML = html;
    
    // Añadir eventos a los botones de detalles
    document.querySelectorAll(".details-btn").forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const card = btn.closest(".card");
            const nombreAudifono = card.querySelector("h3").innerText;
            const audioData = filtered.find(a => a.nombre === nombreAudifono);
            if (audioData) {
                openModal(audioData);
            }
        });
    });
}

// Eventos de filtros con animación suave
filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const filtroValor = btn.getAttribute("data-filter");
        
        container.style.opacity = "0.5";
        setTimeout(() => {
            renderCards(filtroValor);
            container.style.opacity = "1";
        }, 150);
    });
});

// Cargar todos al inicio
renderCards("all");

// Contador de visitas
if(!localStorage.getItem('visitas')) {
    localStorage.setItem('visitas', 1);
    console.log('🎧 ¡Bienvenido a AudioRank!');
} else {
    let visitas = parseInt(localStorage.getItem('visitas'));
    localStorage.setItem('visitas', visitas + 1);
}