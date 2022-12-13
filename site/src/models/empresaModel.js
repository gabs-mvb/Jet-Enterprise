var database = require("../database/config");
  function cadastrarEmpresa(
  empresaNome,
  estado,
  cidade,
  bairro,
  logradouro,
  cep,
  complemento,
  cnpj
) {
  console.log(
    "ACESSEI O Empresa MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():"
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
        INSERT INTO Empresa (nomeEmpresa, cnpj, logradouro ,cidade, estado, cep, bairro, complemento) VALUES 
        ('${empresaNome}', '${cnpj}', '${logradouro}', '${cidade}', '${estado}','${cep}','${bairro}','${complemento}');

    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function selectEmpresa() {
  var instrucao = '';
  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `
    SELECT TOP 1 idEmpresa FROM empresa ORDER BY idEmpresa DESC;
      `;
  } else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
    instrucao = `
    SELECT idEmpresa FROM empresa ORDER BY idEmpresa DESC LIMIT 1;
      `;
  }

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


function buscarDadosEmpresa(idEmpresa) {
  var instrucao = `
  SELECT * FROM Empresa WHERE idEmpresa = ${idEmpresa};
    `;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}



module.exports = {
  cadastrarEmpresa,
  selectEmpresa,
  buscarDadosEmpresa
};
