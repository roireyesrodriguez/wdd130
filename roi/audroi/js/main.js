// DATOS DE AUDÍFONOS CON TRES OPCIONES DE COMPRA
const audifonos = [
    {
        nombre: "KZ EDX Pro",
        precio: "$19 USD",
        tipo: "kz",
        desc: "Bajos potentes, excelente para reggaetón/electrónica. Muy ligeros y cómodos.",
        img: "img/edxpro.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-edx",
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-edx"
        },
        galeria: ["img/edxpro1.jpg", "img/edxpro2.jpg", "img/edxpro3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Impedancia: 24Ω", "Sensibilidad: 104dB", "Cable desmontable: Sí"],
        sonido: "Bajos potentes, medios presentes, agudos brillantes"
    },
    {
        nombre: "KZ ZSN Pro X",
        precio: "$25 USD",
        tipo: "kz",
        desc: "Detalle en agudos, monitores híbridos con 2 drivers. Ideal para rock y metal.",
        img: "img/zsnpro.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-zsn",
           
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-zsn"
        },
        galeria: ["img/zsnpro1.jpg", "img/zsnpro2.jpg", "img/zsnpro3.jpg"],
        especificaciones: ["Driver híbrido: 1DD + 1BA", "Impedancia: 25Ω", "Sensibilidad: 112dB", "Cable trenzado"],
        sonido: "Agudos detallados, graves contundentes, ideal para monitoreo"
    },
    {
        nombre: "KZ ZVX",
        precio: "$28 USD",
        tipo: "kz",
        desc: "Construcción metálica, sonido cálido y natural. Muy robustos.",
        img: "img/zvx.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-zvx",
            
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-zvx"
        },
        galeria: ["img/zvx1.jpg", "img/zvx2.jpg", "img/zvx3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Construcción: Metal", "Impedancia: 32Ω", "Cable desmontable"],
        sonido: "Cálido, natural, excelente para largas sesiones"
    },
    {
        nombre: "KZ Castor Bass Edition",
        precio: "$22 USD",
        tipo: "kz",
        desc: "💥 ENFOCADO EN BAJOS. Tiene switches ajustables para potenciar el subgrave.",
        img: "img/castorbass.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-castorbass",
           
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-castorbass"
        },
        galeria: ["img/castorbass1.jpg", "img/castorbass2.jpg", "img/castorbass3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Switches: 4 ajustables", "Impedancia: 24Ω", "Bass boost integrado"],
        sonido: "Subgrave potente, ideal para bassheads"
    },
    {
        nombre: "KZ Castor Harman Edition",
        precio: "$22 USD",
        tipo: "kz",
        desc: "🎵 Curva Harman neutra. Ideal para audiófilos que buscan fidelidad.",
        img: "img/castorh.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-castorh",
            
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-castorh"
        },
        galeria: ["img/castorh1.jpg", "img/castorh2.jpg", "img/castorh3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Switches: 4 ajustables", "Curva Harman", "Respuesta neutra"],
        sonido: "Balanceado, neutro, fiel a la grabación"
    },
    {
        nombre: "CCA CRA",
        precio: "$15 USD",
        tipo: "cca",
        desc: "🔥 BESTSELLER! Sonido en V, graves contundentes y agudos brillantes.",
        img: "img/ccacra.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-cca",
            
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-cca"
        },
        galeria: ["img/ccacra1.jpg", "img/ccacra2.jpg", "img/ccacra3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Impedancia: 25Ω", "Sensibilidad: 110dB", "Costo-beneficio increíble"],
        sonido: "Divertido, enérgico, ideal para música moderna"
    },
    {
        nombre: "7Hz x Crinacle Zero 2",
        precio: "$25 USD",
        tipo: "otros",
        desc: "Neutral con subgrave. Favorito de audiófilos budget.",
        img: "img/zero2.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-zero2",
            
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-zero2"
        },
        galeria: ["img/zero21.jpg", "img/zero2_2.jpg", "img/zero2_3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Impedancia: 32Ω", "Diseño: Colaboración Crinacle", "Premium económico"],
        sonido: "Neutral con subgrave, técnico y detallado"
    },
    {
        nombre: "Moondrop Chu II",
        precio: "$19 USD",
        tipo: "otros",
        desc: "Agudos detallados, cable intercambiable. Gran escena sonora.",
        img: "img/chu2.jpg",
        enlaces: {
            aliexpress: "https://s.click.aliexpress.com/tu-enlace-chu2",
            
            mercadolibre: "https://mercadolibre.com.mx/tu-enlace-chu2"
        },
        galeria: ["img/chu21.jpg", "img/chu2_2.jpg", "img/chu2_3.jpg"],
        especificaciones: ["Driver: 10mm dinámico", "Cable: Intercambiable", "Diseño: Metal", "Escena sonora amplia"],
        sonido: "Detallado, aireado, excelente para acústica"
    }
];

// Elementos del DOM
const container = document.getElementById("cards-container");
const filterBtns = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close-modal");
const optionsModal = document.getElementById("optionsModal");
const closeOptions = document.querySelector(".close-options");
const optionsProductName = document.getElementById("optionsProductName");
const optionsButtons = document.getElementById("optionsButtons");

let currentProduct = null;

// Función para mostrar opciones de compra
function showBuyOptions(audio) {
    currentProduct = audio;
    optionsProductName.textContent = audio.nombre;
    
    const enlaces = audio.enlaces;
    
    optionsButtons.innerHTML = `
        <a href="${enlaces.aliexpress}" target="_blank" class="option-btn option-aliexpress">
            <span class="tienda">🐼 AliExpress</span>
            <span class="precio">💰 Mejor precio - ${audio.precio}</span>
            <span class="tiempo">📦 Envío: 15-20 días</span>
       
        </a>
        <a href="${enlaces.mercadolibre}" target="_blank" class="option-btn option-mercadolibre">
            <span class="tienda">📦 Mercado Libre</span>
            <span class="precio">🇲🇽 Confianza local - ${audio.precio}</span>
            <span class="tiempo">📦 Envío gratis MX</span>
        </a>
    `;
    
    optionsModal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Función para abrir modal de detalles
function openModal(audio) {
    let galleryHtml = '';
    if (audio.galeria && audio.galeria.length > 0) {
        galleryHtml = `
            <div class="modal-gallery">
                ${audio.galeria.map(img => `<img src="${img}" alt="${audio.nombre}" onerror="this.src='https://placehold.co/400x400?text=Imagen+2'">`).join('')}
            </div>
        `;
    }
    
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
            <button class="modal-btn" id="showBuyOptionsBtn">🛒 Ver dónde comprar</button>
        </div>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    
    const showBuyOptionsBtn = document.getElementById("showBuyOptionsBtn");
    if (showBuyOptionsBtn) {
        showBuyOptionsBtn.addEventListener("click", () => {
            modal.style.display = "none";
            showBuyOptions(audio);
        });
    }
}

// Cerrar modales
if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
}

if (closeOptions) {
    closeOptions.addEventListener("click", () => {
        optionsModal.style.display = "none";
        document.body.style.overflow = "auto";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
    if (e.target === optionsModal) {
        optionsModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Renderizar tarjetas
function renderCards(filtro = "all") {
    let filtered = audifonos;
    if (filtro !== "all") {
        filtered = audifonos.filter(a => a.tipo === filtro);
    }
    
    if (filtered.length === 0) {
        container.innerHTML = '<div class="no-results">🔍 No hay audífonos en esta categoría... ¡Pronto más!</div>';
        return;
    }
    
    let html = "";
    for (let audio of filtered) {
        let tipoDisplay = audio.tipo.toUpperCase();
        if (audio.tipo === "kz") tipoDisplay = "🎧 KZ";
        if (audio.tipo === "cca") tipoDisplay = "🔊 CCA";
        if (audio.tipo === "otros") tipoDisplay = "🎵 OTROS";
        
        html += `
            <div class="card">
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
    
    document.querySelectorAll(".details-btn").forEach((btn) => {
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

// Filtros
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

// Inicializar
renderCards("all");

// Contador de visitas
if(!localStorage.getItem('visitas')) {
    localStorage.setItem('visitas', 1);
    console.log('🎧 ¡Bienvenido a AudioRank!');
} else {
    let visitas = parseInt(localStorage.getItem('visitas'));
    localStorage.setItem('visitas', visitas + 1);
}