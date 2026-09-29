document.addEventListener("DOMContentLoaded", function() {
    const botoes = document.querySelectorAll(".botao-aba");
    const conteudos = document.querySelectorAll(".conteudo-item");

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", () => {
            // 1. Remove a classe 'ativo' de todos os botões
            botoes.forEach(b => b.classList.remove("ativo"));
            
            // 2. Adiciona a classe 'ativo' no botão clicado
            botao.classList.add("ativo");

            // 3. Esconde todos os conteúdos das abas
            conteudos.forEach(conteudo => conteudo.style.display = "none");

            // 4. Mostra apenas o conteúdo correspondente ao botão clicado
            conteudos[index].style.display = "block";
        });
    });
});