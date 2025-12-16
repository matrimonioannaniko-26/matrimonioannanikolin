const translations = {
    it: {
        hero_date: "24 . 08 . 2026",
        days: "Giorni", hours: "Ore", minutes: "Min", scroll: "Scorri",
        story_title: "La nostra storia",
        story_full_1: "a nostra storia è iniziata nell’estate del 2020, in un luogo che mai avremmo pensato potesse cambiare le nostre vite: il ristorante Daroberta’s a Salthill, Irlanda. Tra un turno e l’altro, tra sguardi e risate, qualcosa di magico è nato senza che ce ne accorgessimo davvero. È stato amore a prima vista, di quelli che ti sorprendono e ti restano nel cuore.",
        story_full_2: "All’inizio il nostro legame era un piccolo segreto, nascosto tra complicità e sorrisi rubati. Poi, nell’agosto di quello stesso anno, abbiamo deciso di non nasconderlo più e di vivere pienamente ciò che avevamo trovato l’uno nell’altra. Da allora sono passati anni di avventure, di sfide e di sogni condivisi. Ogni ostacolo ci ha resi più forti, ogni giorno insieme ci ha ricordato quanto il nostro amore sia vero.",
        story_quote: "\"Oggi, sei anni dopo quel primo incontro, celebriamo la nostra unione circondati dalle persone che amiamo, grati per un amore nato quasi per caso, ma che ha trovato nel tempo la sua certezza più grande: noi.\"",
        program_title: "Il Programma", ceremony_title: "Celebrazione Matrimonio", ceremony_desc: "Parrocchia di Santa Maria Nascente",
        following: "A seguire", reception_title: "Ricevimento", reception_desc: "Tenuta Acquaviva",
        night_title: "Pernottamento", night_desc: "Disponibile presso Tenuta Acquaviva. Contattateci per il codice sconto.",
        rsvp_title: "Ci sarai?", rsvp_desc: "Facci sapere se potrai festeggiare con noi.", rsvp_btn: "Conferma Presenza"
    },
    en: {
        hero_date: "24 . 08 . 2026",
        days: "Days", hours: "Hours", minutes: "Mins", scroll: "Scroll",
        story_title: "Our Story",
        story_full_1: "ur story began in the summer of 2020 at Da Roberta’s restaurant in Salthill, Ireland. Between shifts, glances, and laughter, something magical was born before we even realized it. It was love at first sight, the kind that surprises you and stays in your heart forever.",
        story_full_2: "At first, our bond was a little secret. Then, in August of that year, we decided not to hide anymore and to fully live what we had found in each other. Years of adventures and shared dreams have passed since then. Every obstacle made us stronger, reminding us how true and deep our love is.",
        story_quote: "\"Today, six years after that first meeting, we celebrate our union surrounded by the people we love, grateful for a love that began almost by chance but has become our greatest certainty: us.\"",
        program_title: "Wedding Day", ceremony_title: "Wedding Ceremony", ceremony_desc: "Parish of Santa Maria Nascente",
        following: "Following", reception_title: "Reception", reception_desc: "Tenuta Acquaviva",
        night_title: "Accommodation", night_desc: "Available at Tenuta Acquaviva. Contact us for the discount code.",
        rsvp_title: "Will you come?", rsvp_desc: "Let us know if you can celebrate with us.", rsvp_btn: "RSVP"
    },
    sq: {
        hero_date: "24 . 08 . 2026",
        days: "Ditë", hours: "Orë", minutes: "Min", scroll: "Shkroll",
        story_title: "Historia Jonë",
        story_full_1: "istoria jonë filloi në verën e vitit 2020 në restorantin Da Roberta’s në Salthill, Irlandë. Midis turneve, shikimeve dhe të qeshurave, lindi diçka magjike pa e kuptuar vërtet. Ishte dashuri me shikim të parë, ajo që të befason dhe të mbetet në zemër.",
        story_full_2: "Në fillim, lidhja jonë ishte një sekret i vogël. Pastaj, në gusht, vendosëm të mos fshiheshim më dhe të jetonim plotësisht atë që kishim gjetur tek njëri-tjetri. Kanë kaluar vite aventurash dhe ëndrrash të përbashkëta. Çdo pengesë na bëri më të fortë dhe na kujtoi se dashuria jonë është e vërtetë.",
        story_quote: "\"Sot, gjashtë vjet pas atij takimi të parë, festojmë bashkimin tonë të rrethuar nga njerëzit që duam, mirënjohës për një dashuri që lindi pothuajse rastësisht, por që gjeti sigurinë më të madhe: ne.\"",
        program_title: "Programi", ceremony_title: "Ceremonia e Martesës", ceremony_desc: "Kisha Parrocchia di Santa Maria Nascente",
        following: "Më pas", reception_title: "Darka dhe Festa", reception_desc: "Tenuta Acquaviva",
        night_title: "Akomodimi", night_desc: "E disponueshme në Tenuta Acquaviva. Na kontaktoni për kodin.",
        rsvp_title: "A do të jeni?", rsvp_desc: "Na tregoni nëse mund të festoni me ne.", rsvp_btn: "Konfirmoni"
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerText = translations[lang][key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`button[onclick="setLanguage('${lang}')"]`).classList.add('active');
}

// COUNTDOWN
function startCountdown() {
    const weddingDate = new Date("August 24, 2026 15:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const dist = weddingDate - now;
        document.getElementById("days").innerText = Math.floor(dist / (1000 * 60 * 60 * 24));
        document.getElementById("hours").innerText = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        document.getElementById("minutes").innerText = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    }, 1000);
}

// ANIMAZIONI
document.addEventListener("DOMContentLoaded", () => {
    setLanguage('it');
    startCountdown();

    setTimeout(() => {
        const loader = document.querySelector('.preloader');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 1000);
    }, 1000);

    gsap.registerPlugin(ScrollTrigger);
    
    const lenis = new Lenis({ duration: 1.2, smooth: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const tl = gsap.timeline({ delay: 1.5 });

    tl.to(".reveal-img", {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        duration: 2.5,
        stagger: 0.2, 
        ease: "power2.out"
    });

    tl.from(".reveal-text", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=1.5");

    gsap.utils.toArray('.fade-up').forEach(elem => {
        gsap.from(elem, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: elem,
                start: "top 85%"
            }
        });
    });

    const dot = document.querySelector('.cursor-dot');
    const outline = document.querySelector('.cursor-outline');
    window.addEventListener("mousemove", e => {
        dot.style.left = `${e.clientX}px`; dot.style.top = `${e.clientY}px`;
        outline.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 500, fill: "forwards" });
    });
    
    document.querySelectorAll('a, button').forEach(link => {
        link.addEventListener('mouseenter', () => {
            outline.style.transform = "translate(-50%, -50%) scale(1.5)";
            outline.style.borderColor = "var(--accent-sage)";
        });
        link.addEventListener('mouseleave', () => {
            outline.style.transform = "translate(-50%, -50%) scale(1)";
            outline.style.borderColor = "var(--accent-gold)";
        });
    });
});