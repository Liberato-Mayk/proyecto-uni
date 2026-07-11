const cursos = [

{
    tech:"python",
    titulo:"Python desde Cero",
    canal:"Soy Dalto",
    youtube:"https://www.youtube.com/watch?v=nKPbfIU442g"
},

{
    tech:"python",
    titulo:"Curso Completo de Python",
    canal:"MoureDev by Brais Moure",
    youtube:"https://www.youtube.com/watch?v=Kp4Mvapo5kc&list=PLNdFk2_brsRdgQXLIlKBXQDeRf3qvXVU_"
},

{
    tech:"c#",
    titulo:"C# desde Cero",
    canal:"MoureDev by Brais Moure",
    youtube:"https://www.youtube.com/watch?v=L-f8u0hwi4Y"
},

{
    tech:"c++",
    titulo:"C++ desde Cero",
    canal:"Programación ATS",
    youtube:"https://www.youtube.com/watch?v=jS6wb263CIM"
},

{
    tech:"html",
    titulo:"HTML Completo",
    canal:"MoureDev by Brais Moure",
    youtube:"https://www.youtube.com/watch?v=MJkdaVFHrto"
}

];

// BOTONES

const botones=document.querySelectorAll(".tech-item");
const contenedor=document.getElementById("cursosResultado");
let filtros=[];

// EXTRAER MINIATURA
function obtenerMiniatura(url){
    const id=url.split("v=")[1].split("&")[0];
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// MOSTRAR CURSOS
function mostrarCursos(lista){
    contenedor.innerHTML="";
    lista.forEach(curso=>{
        contenedor.innerHTML+=`
        <div class="curso-card">
            <img src="${obtenerMiniatura(curso.youtube)}">
            <div class="curso-info">
                <h3>${curso.titulo}</h3>
                <p>${curso.canal}</p>
                <a href="${curso.youtube}"
                target="_blank">
                    Ver Curso
                </a>
            </div>
        </div>
        `;
    });
}


// INICIO
mostrarCursos(cursos);

// FILTROS
botones.forEach(boton=>{
    boton.addEventListener("click",()=>{
        const tech=boton.dataset.tech;
        boton.classList.toggle("activo");
        if(filtros.includes(tech)){
            filtros=filtros.filter(t=>t!==tech);
        }
        else{
            filtros.push(tech);
        }
        if(filtros.length==0){
            mostrarCursos(cursos);
            return;
        }
        const resultado=cursos.filter(curso=>{
            return filtros.includes(curso.tech);
        });
        mostrarCursos(resultado);
    });
});