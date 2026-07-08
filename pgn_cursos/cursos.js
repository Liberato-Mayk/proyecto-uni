const cursosPorTech = {
    python: [
        {
            titulo: "Python desde Cero",
            descripcion: "Aprende los fundamentos de Python paso a paso.",
            canal: "Canal Ejemplo",
            youtubeId: "ID_DEL_VIDEO"
        },
        // más cursos...
    ],
    sql: [
        {
            titulo: "SQL para principiantes",
            descripcion: "Consultas, joins y bases de datos relacionales.",
            canal: "Canal Ejemplo",
            youtubeId: "ID_DEL_VIDEO"
        }
    ],
    // fastapi, postgres, html, js...
};

const botones = document.querySelectorAll('.tech-item');
const resultado = document.getElementById('cursosResultado');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        botones.forEach(b => b.classList.remove('activo'));
        btn.classList.add('activo');

        const tech = btn.dataset.tech;
        mostrarCursos(cursosPorTech[tech] || []);
    });
});

function mostrarCursos(cursos) {
    resultado.innerHTML = '';

    if (cursos.length === 0) {
        resultado.innerHTML = '<p>Próximamente cursos para esta tecnología.</p>';
        return;
    }

    cursos.forEach(curso => {
        const card = document.createElement('div');
        card.classList.add('curso-card');
        card.innerHTML = `
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/${curso.youtubeId}" 
                    allowfullscreen></iframe>
            </div>
            <div class="info">
                <h3>${curso.titulo}</h3>
                <p>${curso.descripcion}</p>
                <span class="canal">📺 ${curso.canal}</span>
            </div>
        `;
        resultado.appendChild(card);
    });
}