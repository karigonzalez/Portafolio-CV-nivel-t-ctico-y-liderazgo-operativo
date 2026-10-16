/* ==========================================================================
   JavaScript - Portafolio Yeiny Karine Gonzalez Cifuentes
   Funcionalidades: Menú Responsive, Scroll Suave y Animaciones
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Menú Hamburguesa para Dispositivos Móviles ---
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navToggleIcon = navToggle ? navToggle.querySelector('i') : null;

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Cambiar ícono entre barras y X
            if (navToggleIcon) {
                if (navLinks.classList.contains('active')) {
                    navToggleIcon.classList.remove('fa-bars');
                    navToggleIcon.classList.add('fa-xmark');
                } else {
                    navToggleIcon.classList.remove('fa-xmark');
                    navToggleIcon.classList.add('fa-bars');
                }
            }
        });

        // Cerrar menú al hacer clic en cualquier enlace
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (navToggleIcon) {
                    navToggleIcon.classList.remove('fa-xmark');
                    navToggleIcon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- 2. Sombra Dinámica en la Barra de Navegación al Hacer Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.style.boxShadow = '0 4px 20px rgba(168, 85, 111, 0.12)';
            navbar.style.padding = '14px 0';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.padding = '18px 0';
        }
    });

    // --- 3. Animación Suave de Aparición al Hacer Scroll (Fade In) ---
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Seleccionar elementos para animar
    const animatedElements = document.querySelectorAll('.kpi-card, .timeline-item, .portfolio-card, .skill-category, .contact-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        fadeInObserver.observe(el);
    });

});