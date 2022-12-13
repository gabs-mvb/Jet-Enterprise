function verificarFuncao() {
  if (sessionStorage.FUNCAO == "Administrador" && sessionStorage.ID_EMPRESA == "null") {

      var containerGlobal = document.getElementById("container-global");

    containerGlobal.innerHTML = `<div id="titulo_2_empresa" class="titulo-2">
    <h3 id="titulo_div_empresa">Cadastre sua empresa</h3>
    <p id="subtitulo_div_empresa">
      Por favor, insira os dados da empresa que você deseja cadastrar
    </p>
  </div>

  <div class="container-pai">
    <div id="container_filho_empresa" class="container-filho">
      <div id="nome_empresa_box" class="estilo-box">
        <p id="nome_empresa_cadastro">Nome da Empresa*</p>
        <input class="input-empresa" id="inputEmpresa" placeholder="Ex: Nubank" onblur="validarEmpresa()"
          required />
      </div>

      <div id="cnpj_empresa_box" class="estilo-box">
        <p id="cnpj_empresa_cadastro">CNPJ*</p>
        <input class="input-empresa" id="inputCNPJ" placeholder="Ex: 69443724000106" onblur="validarCNPJ()"
          required />
      </div>

      <div id="logradouro_empresa_box" class="estilo-box">
        <p id="logradouro_empresa_cadastro">Logradouro*</p>
        <input class="input-empresa" id="inputLogradouro" placeholder="Ex: Rua Lago Verde"
          onblur="validarLogradouro()" required />
      </div>

      <div class="estilo-box-2">
        <div id="cidade_empresa_box" class="cidade">
          <p id="cidade_empresa_cadastro">Cidade*</p>
          <br />
          <input class="input-empresa" id="inputCidade" placeholder="Ex: Boa Vista" onblur="validarCidade()" />
        </div>

        <div id="estado_empresa_box" class="estado">
          <p id="estado_empresa_cadastro">UF*</p>
          <br />
          <select class="select-estado" id="inputUF" name="estado" onclick="validarUF()">
            <option value="none"></option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
            <option value="EX">Estrangeiro</option>
          </select>
        </div>
      </div>
    </div>

    <div class="container-filho-2">
      <div id="cep_empresa_box" class="estilo-box">
        <p id="cep_empresa_cadastro">CEP*</p>
        <input class="input-empresa" id="inputCEP" placeholder="Ex: 69313175" onblur="validarCEP()" required />
      </div>

      <div id="bairro_empresa_box" class="estilo-box">
        <p id="bairro_empresa_cadastro">Bairro</p>
        <input class="input-empresa" id="inputBairro" placeholder="Ex: Jóquei Clube" onblur="validarBairro()" />
      </div>

      <div id="complemento_empresa_box" class="estilo-box">
        <p id="complemento_empresa_cadastro">Complemento</p>
        <input class="input-empresa active" id="inputComplemento" placeholder="Empresa 1"
          onblur="validarComplemento()" />
      </div>
    </div>
  </div>

  <button id="btn_cadastrar_empresa" class="botao-registro" onclick="botao_registro()">
    CADASTRAR
  </button>`

    // ------------------ TITULO -----------------------------

    var divisoria = document.createElement("hr");
    var divTituloFunc = document.createElement("div");
    var titulo = document.createElement("h3");
    var subtitulo = document.createElement("p");

    divTituloFunc.className = "titulo-2 funcionarios";
    titulo.innerHTML = "Cadastre seus funcionários";
    subtitulo.innerHTML =
      "Por favor, insira os dados do usuario que você deseja cadastrar";

    containerGlobal.appendChild(divisoria);
    containerGlobal.appendChild(divTituloFunc);
    divTituloFunc.appendChild(titulo);
    divTituloFunc.appendChild(subtitulo);

    // -------------------------------------------------------

    // -------------- CONTAINER CADASTRO FUNC ----------------

    var containerPai = document.createElement("div");
    var containerFilho = document.createElement("div");
    var containerFilho2 = document.createElement("div");
    containerPai.className = "container-pai";
    containerFilho.className = "container-filho";
    containerFilho2.className = "container-filho-2"

    containerGlobal.appendChild(containerPai);
    containerPai.appendChild(containerFilho);
    containerPai.appendChild(containerFilho2);

    for (var i = 0; i < 3; i++) {

      var divContainer = document.createElement("div");
      var tituloContainer = document.createElement("p");
      var inputContainer = document.createElement("input");

      divContainer.className = "estilo-box";
      inputContainer.className = "input-empresa"

      if (i == 0) {
        tituloContainer.innerHTML = `Username*`;
        inputContainer.id = "inputUsuario";
        inputContainer.placeholder = "Ex: caique2022";
        inputContainer.setAttribute("onblur", "validarUsuario()");
        inputContainer.setAttribute("required", "required");
      } else if(i == 1) {
        tituloContainer.innerHTML = "Senha*";
        inputContainer.id = "inputSenha";
        inputContainer.placeholder = "Ex: Senha@123";
        inputContainer.setAttribute("onblur", "validarSenha()");
        inputContainer.type = "password";
        inputContainer.setAttribute("required", "required");
      } else if(i == 2) {
        tituloContainer.innerHTML = "Nome Completo*";
        inputContainer.id = "inputNome";
        inputContainer.placeholder = "Ex: Caique Gomes da Silva";
        inputContainer.setAttribute("onblur", "validarNome()");
        inputContainer.setAttribute("required", "required");
      }

      containerFilho.appendChild(divContainer);
      divContainer.appendChild(tituloContainer);
      divContainer.appendChild(inputContainer);
    }

    for(var a = 0; a < 3; a++) {
        var divContainer2 = document.createElement("div");
        var tituloContainer2 = document.createElement("p");
        var inputContainer2 = document.createElement("input");

        divContainer2.className = "estilo-box";
      inputContainer2.className = "input-empresa";

      if (a == 0) {
        tituloContainer2.innerHTML = `E-mail*`;
        inputContainer2.id = "inputEmail";
        inputContainer2.placeholder = "Ex: caique.gsilva@sptech.school";
        inputContainer2.setAttribute("onblur", "validarEmail()");
        inputContainer2.setAttribute("required", "required");
        divContainer2.appendChild(tituloContainer2);
        divContainer2.appendChild(inputContainer2);
      } else if(a == 1) {
        tituloContainer2.innerHTML = "Telefone";
        inputContainer2.id = "inputContato";
        inputContainer2.placeholder = "Ex: 11966193319";
        inputContainer2.setAttribute("onkeyup", "validarContato()");
        inputContainer2.type = "number";
        divContainer2.appendChild(tituloContainer2);
        divContainer2.appendChild(inputContainer2);
      } else if(a == 2) {
        divContainer2.innerHTML += `<p>Função</p>
        <select class="combo-funcao" id="inputFuncao">
          <option value="Administrador">Administrador</option>
          <option value="Usuário">Usuário</option>
        </select>`
      }
    
      containerFilho2.appendChild(divContainer2);
      
      
    }

    var buttonCadastro = document.createElement('button');
    var divisoria2 = document.createElement("hr");
    buttonCadastro.className = "botao-registro";
    buttonCadastro.setAttribute("Onclick", "cadastrarFuncionario()");
    buttonCadastro.innerHTML = "CADASTRO";
    containerGlobal.appendChild(buttonCadastro);
    containerGlobal.appendChild(divisoria2)

    var divTabelaFuncionario = document.createElement("div");
    var tituloTabelaFunc = document.createElement("h3");
    divTabelaFuncionario.className ="tabela-funcionarios"
    divTabelaFuncionario.id = "tabela_funcionarios"
    tituloTabelaFunc.innerHTML = "FUNCIONÁRIOS";

    divTabelaFuncionario.appendChild(tituloTabelaFunc);
    containerGlobal.appendChild(divTabelaFuncionario);
  }
}


// ESPERO QUE ESSE SITE EXPLODA