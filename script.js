// Archivo JS para mejorar la usabilidad de la app

// Función para ocultar "index.html" en la URL y mostrar "/"
function hideIndexHtml() {
    if (window.location.pathname === '/index.html') {
        history.replaceState(null, '', '/');
    }
}

// Función para cambiar el título de la pestaña dinámicamente
function setDynamicTitle() {
    const path = window.location.pathname;
    let title = 'Raquel | Mi Historia';

    if (path.includes('deportes')) {
        title = 'Raquel | Deportes';
    } else if (path.includes('amigos')) {
        title = 'Raquel | Amigos';
    } else if (path.includes('estudios')) {
        title = 'Raquel | Estudios';
    } else if (path.includes('ranking')) {
        title = 'Raquel | Ranking de Competiciones';
    }

    document.title = title;
}

// Función para animaciones de entrada en elementos (simplificada)
function addEntranceAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, .card, .ranking-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// Función para mejorar accesibilidad
function enhanceKeyboardNavigation() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('keydown', e => {
            if (e.key === 'Enter') link.click();
        });
    });
}

// Función para móvil
function handleMobileOptimizations() {
    if (window.innerWidth < 768) {
        document.body.classList.add('mobile');
    }
}

// Función simplificada para fondo animado (menos esferas)
function createAnimatedBackground() {
    const body = document.body;
    for (let i = 0; i < 10; i++) { // Reducido a 10
        const sphere = document.createElement('div');
        sphere.classList.add('animated-sphere');
        sphere.style.left = Math.random() * 100 + '%';
        sphere.style.top = Math.random() * 100 + '%';
        sphere.style.width = (Math.random() * 200 + 100) + 'px';
        sphere.style.height = sphere.style.width;
        sphere.style.animationDuration = (Math.random() * 20 + 30) + 's';
        sphere.style.animationDelay = (Math.random() * 10) + 's';
        body.appendChild(sphere);
    }
}

// Agregar estilos CSS para animaciones (se inyectan dinámicamente)
const style = document.createElement('style');
style.textContent = `
    html {
        background: #f0f0f0;
        scroll-behavior: smooth;
    }
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    .mobile nav ul {
        flex-direction: column;
        gap: 10px;
    }
    .animated-sphere {
        position: fixed;
        border-radius: 50%;
        background: rgba(138, 43, 226, 0.1);
        filter: blur(80px);
        pointer-events: none;
        z-index: -1;
        animation: float 40s infinite ease-in-out;
    }
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
        }
        25% {
            transform: translate(var(--moveX1, 20px), var(--moveY1, -20px)) scale(1.1);
        }
        50% {
            transform: translate(var(--moveX2, -10px), var(--moveY2, 10px)) scale(0.9);
        }
        75% {
            transform: translate(var(--moveX3, -20px), var(--moveY3, -10px)) scale(1.05);
        }
    }
`;
document.head.appendChild(style);

// Ejecutar funciones al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    createAnimatedBackground();
    hideIndexHtml();
    setDynamicTitle();
    addEntranceAnimations();
    enhanceKeyboardNavigation();
    handleMobileOptimizations();
});
