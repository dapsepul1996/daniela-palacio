document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const popupImg = document.getElementById('popup-img'); // Nueva línea para la imagen del popup


    const content = {
        'quien-soy': { 
            title: '¿Quién soy?',
            text: `Concordiana de corazón con 28 años pero 18 de estos viviendo en la ciudad de la eterna primavera, soy una apasionada por el deporte, nuevas culturas y adentrarme en lugares desconocidos, como profesional, mi actitud autodidacta y amor por la lectura me han llevado a desarrollar un enfoque continuo hacia el aprendizaje, explorando nuevas áreas de conocimiento con curiosidad y entusiasmo, siempre con un objetivo, alcanzar el más alto nivel en todas las áreas de mi vida, tanto a nivel personal como profesional.`,
        img: 'img/deportes.jpeg' // Ruta de la imagen para "¿Quién soy?"
    },
    'vida-familiar': {
        title: 'Mi vida familiar',
        text: `Gracias a mi familia, he crecido como una mujer fuerte, osada y siempre dispuesta a enfrentar los desafíos de la vida con determinación, han sido y serán uno de los pilares más importantes en mi vida. 
        
Mis padres residen actualmente en Concordia, soy la menor de 4 hermanas y tengo el privilegio de contar con 6 sobrinos que enriquecen mi vida con un amor auténtico y especial.
        
En la actualidad, comparto mi vida con mi novio, Juan, quien es una fuente constante de motivación y desafío, impulsándome a mejorar y a crecer como ser humano cada día.`,
img: 'img/familia.jpeg' // Ruta de la imagen para "Mi vida familiar"
        },
        'experiencia-laboral': {
            title: 'Mi experiencia laboral',
            text: `A lo largo de mi trayectoria profesional, he tenido la oportunidad de desempeñarme en diversos entornos laborales, lo que me ha permitido no solo desarrollar mis habilidades, sino también aprender y adaptarme continuamente a nuevos desafíos.
        
Mi primera experiencia laboral fue en el área de Servicio al Cliente en la empresa Tigo, donde adquirí valiosas competencias en atención al cliente. Esta experiencia inicial me brindó una base sólida que pude aplicar y expandir al incorporarme a Bancolombia.

En Bancolombia, he acumulado 9 años de experiencia, los cuales han sido sumamente enriquecedores. Comencé como Informadora de Servicios, un rol que sirvió como una escuela en atención al cliente. Posteriormente, avancé a Supernumeraria Integral, donde no solo continué desarrollándome en la atención al cliente como Asesora de Servicios, sino que también asumí responsabilidades de liderazgo como Coordinadora de Servicios.
        
Actualmente, me desempeño como Auxiliar de la Gerencia de Crédito Constructor Profesional. En este puesto, he logrado integrar todos los aprendizajes adquiridos a lo largo de mi carrera, aprendiendo nuevas habilidades y contribuyendo a la mejora de procesos con mis conocimientos y experiencia.`,
img: 'img/laboral.jpg' // Ruta de la imagen para "Mi experiencia laboral"
},
'perfil-academico': {
    title: 'Mi perfil académico',
    text: `Soy Técnica en Sistemas y Tecnóloga en Redes y Telecomunicaciones por el SENA. Actualmente, estoy a la espera de la culminación de mi carrera en Administración de Empresas y planeo completar un segundo pregrado en Negocios Internacionales en el Politécnico Gran Colombiano.
        
Además, formo parte de la Escuela de Auxiliares, donde estoy cursando el segundo año. Actualmente, estoy realizando un Diplomado en Automatización de Pruebas con Cypress y SerenityBDD, lo que complementa y enriquece mis conocimientos técnicos y mi preparación profesional.`,
img: 'img/poli.png' // Ruta de la imagen para "Mi perfil académico"
}
};

buttons.forEach(button => {
    button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const targetContent = content[targetId];
        popupTitle.innerHTML = targetContent.title;
        popupText.innerHTML = targetContent.text;
        popupImg.src = targetContent.img;
        popup.classList.remove('fade-out');
        popup.classList.add('fade-in');
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', function () {
    popup.classList.remove('fade-in');
    popup.classList.add('fade-out');
    setTimeout(() => {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 500);
});

window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.classList.remove('fade-in');
        popup.classList.add('fade-out');
        setTimeout(() => {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 500);
    }
});
});