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
    }
}
function validaCidade() {
    let txtCidade = document.querySelector('#txtCidade')
    if (cidade.value.length < 2) {
        txtCidade.innerHTML = 'Cidade Inválida'
        txtCidade.style.color = 'red'
    } else {
        txtCidade.innerHTML = 'Cidade inválida'
        txtCidade.style.color = 'green'
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
    }
}

