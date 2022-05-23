let labelNomeCadastro = document.getElementById ("labelNomeCadastro");
let nomeCadastro = document.getElementById ("nomeCadastro");
nomeCadastro.addEventListener('keyup', verificaNome);
function verificaNome () {
    if(nomeCadastro.value.length < 3) {
        labelNomeCadastro.setAttribute ('style', 'color: red')
        labelNomeCadastro.innerHTML = 'NOME OU APELIDO:  *O nome deve ter no minimo 3 letras!'
    } else {
        labelNomeCadastro.setAttribute ('style', 'color: blue')  
        labelNomeCadastro.innerHTML = 'NOME OU APELIDO:'
    }
}

let labelEmailCadastro = document.getElementById ("labelEmailCadastro");
let emailCadastro = document.getElementById ("emailCadastro");
emailCadastro.addEventListener('keyup' , verificaEmail);
function verificaEmail () {
    if (emailCadastro.value.length < 10) {
        labelEmailCadastro.setAttribute ('style', 'color: red ; font-size: small')
        labelEmailCadastro.innerHTML = 'INFORME UM E-MAIL PARA CADASTRO: *O e-mail deve ter no mínimo 10 caracteres!*'
    } else {
        labelEmailCadastro.setAttribute ('style', 'color: blue')
        labelEmailCadastro.innerHTML = 'INFORME UM E-MAIL PARA CADASTRO:'
    }
}

let labelSenhaCadastro = document.getElementById("labelSenhaCadastro");
let senhaCadastro = document.getElementById ("senhaCadastro");
senhaCadastro.addEventListener('keyup' , verificaSenha)
function verificaSenha () {
    if(senhaCadastro.value.length < 6) {
        labelSenhaCadastro.setAttribute ('style', 'color: red')
        labelSenhaCadastro.innerHTML = 'CRIE UMA SENHA: *A senha deve ter no mínimo 6 caracteres!*'
    } else {
        labelSenhaCadastro.setAttribute ('style', 'color: blue')
        labelSenhaCadastro.innerHTML = 'CRIE UMA SENHA:'
    }
}


let labelConfirmaSenhaCadastro = document.getElementById("labelConfirmaSenhaCadastro");
let confirmaSenhaCadastro = document.getElementById ("confirmaSenhaCadastro");
confirmaSenhaCadastro.addEventListener('keyup' , igualdadeDeSenha)
function igualdadeDeSenha () {
    if (confirmaSenhaCadastro.value === senhaCadastro.value) {
        labelConfirmaSenhaCadastro.setAttribute ('style', 'color: blue')
        labelConfirmaSenhaCadastro.innerHTML = 'CONFIRME A SENHA:'
    } else {
        labelConfirmaSenhaCadastro.setAttribute ('style', 'color: red')
        labelConfirmaSenhaCadastro.innerHTML = 'CONFIRME A SENHA: *As senhas não correspondem!*'
    }
}

//------------------BOTÕES------------//
let botaoCriarConta = document.getElementById("criarConta");
botaoCriarConta.addEventListener('click', criarConta);
function criarConta() {

}

let botaoVoltarLogin = document.getElementById("voltarLogin");
botaoVoltarLogin.addEventListener('click', voltarLogin);
function voltarLogin() {
    window.location.href  = "pagina-login.html"
}


