
//Variaveis --------------------------------------------
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let email = document.querySelector('#email')
let labelEmail = document.querySelector('#labelEmail')
let validEmail = false

let celular = document.querySelector('#celular')
let labelCelular = document.querySelector('#labelCelular')
let validCelular = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let cep = document.querySelector('#cep')
let labelCep = document.querySelector('#labelCep')
let validCep = false

let endereco = document.querySelector('#endereco')
let labelEndereco = document.querySelector('#labelEndereco')
let validEndereco = false

let numero = document.querySelector('#numero')
let labelNumero = document.querySelector('#labelNumero')
let validNumero = false

let bairro = document.querySelector('#bairro')
let labelBairro = document.querySelector('#labelBairro')
let validBairro = false

let cidade = document.querySelector('#cidade')
let labelCidade = document.querySelector('#labelCidade')
let validCidade = false

let estado = document.querySelector('#estado')
let labelEstado = document.querySelector('#labelEstado')
let validEstado = false

let msgError = document.querySelector('#msgError')
let msgSucess = document.querySelector('#msgSucess')

//Funções --------------------------------------------
function cadastrar(){
  if(validNome && validEmail && validSenha && validConfirmSenha && validCep && validEndereco && validNumero && validBairro && validCidade && validEstado){
    msgSucess.setAttribute('style', 'display: block')
    msgSucess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente!</strong>'
    msgSucess.setAttribute('style', 'display: none')
    msgSucess.innerHTML = ''
  }
}


//Eventos --------------------------------------------

//Validação - Email
email.addEventListener('keyup', () => {
 // const email = document.querySelector('#email').value
  if(email.value.indexOf('@') !== -1 && email.value.indexOf('.com') !== -1) { 
    labelEmail.setAttribute('style', 'color: green')
    labelEmail.innerHTML = 'E-mail'
    email.setAttribute('style', 'border-color: green')
    validEmail = true
  } else {
    validEmail = false
    labelEmail.setAttribute('style', 'color: red')
    labelEmail.innerHTML = 'E-mail *Insira um e-mail válido!'
    email.setAttribute('style', 'border-color: red')
  }
})
//Validação - Celular
celular.addEventListener('keyup', () => {
  if(celular.value.length <=14){
    labelCelular.setAttribute('style', 'color: red')
    labelCelular.innerHTML = 'Celular *Insira um número válido'
    celular.setAttribute('style', 'border-color: red')
    validCelular = false
  } else {
    validCelular = true
    labelCelular.setAttribute('style', 'color: green')
    labelCelular.innerHTML = 'Celular'
    celular.setAttribute('style', 'border-color: green')   
  }
})


//Validação - Senha
senha.addEventListener('keyup', () => {
  if(senha.value.length <=5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    validSenha = true
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')   
  }
})

//Validação - ConfirmSenha
confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    validConfirmSenha = false
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
  } else {
    validConfirmSenha = true
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')   
  }
})

//Validação - CEP
cep.addEventListener('keyup', () => {
  if(cep.value.length <=8){
    validCep = false
    labelCep.setAttribute('style', 'color: red')
    labelCep.innerHTML = 'CEP *Insira um CEP válido'
    cep.setAttribute('style', 'border-color: red')
	endereco.value=''
	bairro.value = ''
	cidade.value = ''
	estado.value = ''
  } else {
    validCep = true
    labelCep.setAttribute('style', 'color: green')
    labelCep.innerHTML = 'CEP'
    cep.setAttribute('style', 'border-color: green')  
	   fetch(`https://viacep.com.br/ws/${lblCep.value}/json/`, options).then(
      (res) => {
         res.json().then((data) => {
            console.log(data);
            lblEndereco.value = data.logradouro;
            lblBairro.value = data.bairro;
            lblCidade.value = data.localidade;
            lblEstado.value = data.uf;
         });
      })
  }
})

//Validação - Endereço
endereco.addEventListener('keyup', () => {
  if(endereco.value.length ==''){
    validEndereco = false
    labelEndereco.setAttribute('style', 'color: red')
    labelEndereco.innerHTML = 'Endereco *Insira um Endereço válido'
    endereco.setAttribute('style', 'border-color: red')
  } else {
    validEndereco = true
    labelEndereco.setAttribute('style', 'color: green')
    labelEndereco.innerHTML = 'Endereço'
    endereco.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Número
numero.addEventListener('keyup', () => {
  if(numero.value.length ==''){
    validNumero = false
    labelNumero.setAttribute('style', 'color: red')
    labelNumero.innerHTML = 'Número *Insira um Número válido'
    numero.setAttribute('style', 'border-color: red')
  } else {
    validNumero = true
    labelNumero.setAttribute('style', 'color: green')
    labelNumero.innerHTML = 'Número'
    numero.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Bairro
bairro.addEventListener('keyup', () => {
  if(bairro.value.length ==''){
    validBairro = false
    labelBairro.setAttribute('style', 'color: red')
    labelBairro.innerHTML = 'Bairro *Insira um Bairro válido'
    bairro.setAttribute('style', 'border-color: red')
  } else {
    validBairro = true
    labelBairro.setAttribute('style', 'color: green')
    labelBairro.innerHTML = 'Bairro'
    bairro.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Cidade
cidade.addEventListener('keyup', () => {
  if(cidade.value.length ==''){
    validCidade = false
    labelCidade.setAttribute('style', 'color: red')
    labelCidade.innerHTML = 'Cidade *Insira uma Cidade válida'
    cidade.setAttribute('style', 'border-color: red')
  } else {
    validCidade = true
    labelCidade.setAttribute('style', 'color: green')
    labelCidade.innerHTML = 'Cidade'
    cidade.setAttribute('style', 'border-color: green')   
  }
})

//Validação - Estado
estado.addEventListener('keyup', () => {
  if(estado.value.length ==''){
    validEstado = false
    labelEstado.setAttribute('style', 'color: red')
    labelEstado.innerHTML = 'Número *Insira um Estado válido'
    estado.setAttribute('style', 'border-color: red')
  } else {
    validEstado = true
    labelEstado.setAttribute('style', 'color: green')
    labelEstado.innerHTML = 'Estado'
    estado.setAttribute('style', 'border-color: green')   
  }
})

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})


btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})


//API CEP
const lblCep = document.getElementById("cep");
const btnProcuraCep = document.querySelector(".icone");

const lblEndereco = document.getElementById("endereco");
const lblBairro = document.getElementById("bairro");
const lblCidade = document.getElementById("cidade");
const lblEstado = document.getElementById("estado");

const options = {
   method: "GET",
   mode: "cors",
   cache: "default",
};

console.log(lblCep.value);

