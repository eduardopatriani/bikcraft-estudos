// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(event) {
    const url = location.href;
    const href = event.href;

    if(url.includes(href)){
        event.classList.add('ativo');
    }
}
links.forEach(ativarLink);

// Ativar itens do orcamento [seguro e bicicletas]
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametroUrl) {
    const elemento = document.getElementById(parametroUrl)
    // console.log(elemento)
    if (elemento) {
        elemento.checked = true;
    }
}
parametros.forEach(ativarProduto);

// Perguntas frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    // console.log(pergunta);/*mostra a pergunta posicionada*/

    const controls =  pergunta.getAttribute('aria-controls');
    // console.log(controls);/*mostra a pergunta pelo [id] posicionado*/

    const resposta = document.getElementById(controls)
    // console.log(resposta);/*mostra a resposta pelo [id] posicionado*/

    resposta.classList.toggle('ativa'); /*Adiciona a classe para mostra a resposta quando clicado*/
    const ativa = resposta.classList.contains('ativa'); /*Verifica se existe a class 'ativa' */
    pergunta.setAttribute("aria-expanded",ativa) /* Seta true ou false pela classe ativa */

}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de bicicletas
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
    const imgAtual = event.currentTarget;
    const mediaQuery = window.matchMedia('(min-width: 1000px)').matches; /*verifica o tam a tela */
    if(mediaQuery) {
        galeriaContainer.prepend(imgAtual); /*coloca a imagem a atual clicada */
    }
}

function eventosGaleria(imagem) {
    imagem.addEventListener('click',trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
