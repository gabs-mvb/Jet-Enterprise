/* Validando os campos */

// document.getElementById("btnCadastrar").disabled = true;

var validar_usuario = false;
function validarUsuario() {
  var usuario = inputUsuario.value;
  /* Verifica se o usuario tem mais de 6 caractéres */
  if (usuario.length < 6) {
    spanErrorUser.classList.add("active");
    spanErrorUser.innerHTML = "Nome Inválido";
    validar_usuario = false;
  } else {
    spanErrorUser.classList.remove("active");
    validar_usuario = true;
  }
}
var validar_senha = false;
function validarSenha() {
  var senha = inputSenha.value;
  var fortificador =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])([0-9a-zA-Z!$*&@#]){8,}$/;
  /*
    
  (?=.*\d)         // deve conter ao menos um dígito
  (?=.*[a-z])      // deve conter ao menos uma letra minúscula
  (?=.*[A-Z])      // deve conter ao menos uma letra maiúscula
  (?=.*[$*&@#!])    // deve conter ao menos um caractere especial

  ([0-9a-zA-Z$*&@#]): é uma classe de caracteres contendo números, 
  letras e os caracteres especiais que você está considerando. 
  Eles estão dentro de parênteses para formar um grupo de captura

*/
  /* Verifica se a senha está com as requisições acima */
  if (fortificador.test(senha)) {
    spanErrorPassword.classList.remove("active");
    validar_senha = true;
    spanAviso.innerHTML = "";
  } else {
    validar_senha = false;
    spanErrorPassword.classList.add("active");
    spanErrorPassword.innerHTML = "Senha inválida";
    spanAviso.innerHTML = `<span class="spanAviso">Sua Senha deve ter no minimo 8 caracteres:<br>Uma letra Maiúscula<br>Uma letra Minuscula<br>Um numero<br>Um caracter especial</span>`;
  }
}
var validar_nome = false;
function validarNome() {
  var nome = inputNome.value;
  /* Devolve a quantidade de nomes em numeros Ex: Sherlock Homes -> vai retornar 2 */
  const nomeCompleto = nome.split(" ");
  /* Verifica se a quantidade de nomes é menor que 1, pois ninguém tem um nome completo de um nome apenas */
  if (nomeCompleto.length <= 1) {
    validar_nome = false;
    spanErrorName.classList.add("active");
    spanErrorName.innerHTML = "Nome Inválido";
  } else {
    spanErrorName.classList.remove("active");
    validar_nome = true;
  }
  /* Faz a substituição das primeiras letras dos nomes caso o usuário coloque a primeira leta do nome minuscula */
  for (let i = 0; i < nomeCompleto.length; i++) {
    nomeCompleto[i] =
      nomeCompleto[i][0].toUpperCase() + nomeCompleto[i].substr(1);
  }
  /* Junta os nomes novamente */
  nomeCompleto.join(" ");
}
var validar_email = false;
function validarEmail() {
  var email = inputEmail.value;
  var validacao = /\S+@\S+\.\S+/;
  /* Qualquer tipo de texto:
  Seguida por um caractere @ (que é obrigatório em e-mails);
  Seguido por algum outro texto, o domínio/provedor;
  E então temos a presença de um ponto, que também é obrigatório;
  E por fim mais um texto, validando tanto emails .com quanto .com.br, e outros que tenham terminologias diferentes */
  if (!validacao.test(email)) {
    spanErrorEmail.classList.add("active");
    spanErrorEmail.innerHTML = "E-mail Inválido";
    validar_email = false;
  } else {
    spanErrorEmail.classList.remove("active");
    validar_email = true;
  }
}
var validar_contato = false;
function validarContato() {
  var contato = inputContato.value;
  if (contato.length > 11) {
    // Valida números telefones celulares para contato
    spanErrorContate.classList.add("active");
    spanErrorContate.innerHTML = "Contato Inválido";
    validar_contato = false;
  } else {
    spanErrorContate.classList.remove("active");
    validar_contato = true;
  }
}

function validar_autenticacao_login() {
  if (validar_usuario && validar_senha) {
    window.location.href = "perfil-dashboard-empresa.html";
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Autenticação inválida!',
    })
  }
}

function validar_autenticacao_cadastro() {
  if (
    validar_usuario &&
    validar_senha &&
    validar_nome &&
    validar_email
  ) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Seu cadastro foi realizado com sucesso!',
      showConfirmButton: false,
      timer: 2000
    })

    setInterval(() => cadastrar(), 2000);
    // document.getElementById("btnCadastrar").disabled = false;
    // window.location.href = "login.html";
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Autenticação inválida!',
    })
  }
}




function cadastrar() {
  // aguardar();
  window.location.href = "login.html";
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var userVar = inputUsuario.value;
  var senhaVar = btoa(inputSenha.value);
  var nomeVar = inputNome.value;
  var emailVar = inputEmail.value;
  var contatoVar = inputContato.value;

  // if (userVar == "" || senhaVar == "" || nomeVar == "" || emailVar == "") {
  //     cardErro.style.display = "block"
  //     mensagem_erro.innerHTML = "(Mensagem de erro para todos os campos em branco)";

  //     finalizarAguardar();
  //     return false;
  // }
  // else {
  //     setInterval(sumirMensagem, 5000)
  // }

  // Enviando o valor da nova input
  fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          // crie um atributo que recebe o valor recuperado aqui
          // Agora vá para o arquivo routes/usuario.js
          userServer: userVar,
          senhaServer: senhaVar,
          nomeServer: nomeVar,
          emailServer: emailVar,
          contatoServer: contatoVar
      })
  }).then(function (resposta) {

      console.log("resposta: ", resposta);

      if (resposta.ok) {
          setTimeout(() => {
              window.location = "login.html";
          }, "2000")
          
          limparFormulario();
          // finalizarAguardar();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Houve um erro ao tentar realizar o cadastro!',
        })

      }
  }).catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
      // finalizarAguardar();
  });

  return false;
}

function sumirMensagem() {
  cardErro.style.display = "none"
}
