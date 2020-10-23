/*var //variavel de escopo global - o conteudo pode ser acessado 
//de qualquer lugar e nao somente dentro do escopo onde está inserido

//let //de escopo local, não pode ser acessado de qualquer lugar

//const //variavel de escopo global, porem com valor constante que não pode ser alterado

//por boas praticas se usa mais o LET

JS é casesensitive 
acesso:
por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')  //ou ('input#email')
let cidade = document.querySelector('#cidade')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let cidadeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width= "100%" //isso altera diretamente o estilo do campo nome.
email.style.width= "100%"
cidade.style.width= "100%"
assunto.style.width= "100%"

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaCidade() {
    let txtCidade = document.querySelector('#txtCidade')
    if (cidade.value.length < 2) {
        txtCidade.innerHTML = 'Cidade Inválida'
        txtCidade.style.color = 'red'
    } else {
        txtCidade.innerHTML = 'Cidade válida'
        txtCidade.style.color = 'green'
        cidadeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >=100) {
        txtAssunto.innerHTML ='Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        //txtAssunto.style.backgroundColor = 'black' --> muda a cor de fundo do texto
    } else {
        txtAssunto.style.display = 'none' //forma de não aparecer nada 
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && cidadeOk == true &&emailOk == true && assuntoOk == true) {
        alert ('Formulario enviado com sucesso!')
    } else { 
        alert ('Preencha o formulario corretamente antes de enviar.')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal () {
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}

