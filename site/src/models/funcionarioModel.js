var database = require("../../../site/src/database/config");

async function buscar(idEmpresa) {
  const instrucao = `SELECT * FROM Empresa WHERE idEmpresa = ${idEmpresa}`;
  return database.executar(instrucao);
}

function listarFuncionario(idEmpresa) {
  console.log(
    "ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM Perfil where fkEmpresa = ${idEmpresa};
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarFuncionario(
  user,
  senha,
  nome,
  email,
  contato,
  funcao,
  idEmpresa
) {
  console.log(
    "ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    user,
    senha,
    nome,
    email,
    contato,
    funcao
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO Perfil (username, senha, nome ,email, telefone, funcao, fkEmpresa) 
        VALUES ('${user}', '${senha}', '${nome}', '${email}', '${contato}', '${funcao}', ${idEmpresa});
    `;
  // console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function removerfuncionario(idPerfil) {
  console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function removerfuncionario(): ",idPerfil);
  var instrucao = `
      DELETE FROM Perfil WHERE idPerfil = ${idPerfil};
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  cadastrarFuncionario,
  listarFuncionario,
  removerfuncionario
};
