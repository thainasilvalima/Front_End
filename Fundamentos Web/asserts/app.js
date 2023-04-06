
let nome = window.document.getElementById('nome');
let email = window.document.querySelector('#email'); /* O querySelector() retorna o primeiro elemento que corresponde a um CSS especificado selector(s) no documento.*/
let message = window.document.querySelector('#message');
nomeOk = false;
emailOk = false;
messageOk = false;


function adicionarNome () {

let textoNome = document.querySelector('#textoNome')
if (nome.value.length < 2) {
     textoNome.innerHTML ='Nome Inválido';
     textoNome.style.color = 'red';
    }   else {
    textoNome.innerHTML ='Nome Válido';
    textoNome.style.color = 'green';
    nomeOk = true;
    
    }
}
function adicionarEmail() {

    let textoEmail = document.querySelector('#textoEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) { /*Aqui estamos validando o email*/
        textoEmail.innerHTML ='Email Inválido';
        textoEmail.style.color = 'red';
   }   else {
       textoEmail.innerHTML ='Email Válido';
       textoEmail.style.color = 'green';
       emailOk = true;
       
   }

}

    function validaMessage (){

        let textoMessage = document.querySelector('#textoMessage');
        if (message.value.length >= 100) {

            textoMessage.innerHTML='Texto de mensagem muito grande, digite no máximo 150 caracteres'
            textoMessage.style.color = 'red';
            textoMessage.style.display='block';
            messageOk =false;
        }   else {
            textoMessage.style.display='none';
            messageOk = true; 
        }
    }

    function enviar() {

        if (nomeOk == true && messageOk == true && emailOk == true)  {
            alert('Mensagem enviada com sucesso!')
            } else { alert ('Preencha o espaço de mensagem corretamente')
        }
    }


