function toggleMode() { 
    const html = document.body; 
    html.classList.toggle("light"); 

    const img = document.querySelector("#profile img");

    if (html.classList.contains("light")) { 
        img.setAttribute("src", "/img/lightModeProfile.jpg"); // Se estiver no modo claro, altera a imagem para "avatar2.jpg"

    } else {
        img.setAttribute("src", "/img/darkModeProfile.jpg"); // Se não estiver no modo claro (modo escuro), mantém ou coloca a imagem "avatar1.jfif"S
    }
}

function clicar1(){

const t1 = "👨‍💻 Sobre mim";

const sobreMim = `👋 Olá! Me chamo Pedro Henrique, tenho 18 anos e sou estudante de Desenvolvimento de Sistemas na ETEC de Embu. 💻📚
Atualmente, atuo como Jovem Aprendiz na Apsen Farmacêutica 💊, onde venho aprendendo e crescendo no mundo profissional.

✨ Gosto de me envolver em atividades tanto dentro de casa (como estudar, programar ou jogar) quanto ao ar livre 🌳⚽.
Tenho uma rotina bem equilibrada, sempre buscando separar o profissional do pessoal para manter o foco e o bem-estar. 🧠⚖️`;

Swal.fire({
title: t1,
text: sobreMim,
});
}

function clicar2(){

const t2 = "🎓 Minhas Formações";
const formacao = `
🎓 Ensino Médio Regular — Concluído em Dezembro/2024
📦 Técnico em Logística — Concluído em Dezembro/2024
💻 Técnico em Desenvolvimento de Sistemas — Cursando (conclusão em Julho/2026)`;

Swal.fire({
title: t2,
text: formacao,
});
}