let emailLogin = document.getElementById("emailLogin");
let senhaLogin = document.getElementById("senhaLogin");
let botaoEntrar = document.getElementById("botaoEntrar");
let botaoCriarContaLogin = document.getElementById("criarContaLogin");

botaoEntrar.addEventListener('click' , entrarNoSistema);

botaoCriarContaLogin.addEventListener('click' , irParaCriarConta);

function entrarNoSistema() {
    
}

function irParaCriarConta() {
    window.location.href = "pagina-cadastro.html";
}

