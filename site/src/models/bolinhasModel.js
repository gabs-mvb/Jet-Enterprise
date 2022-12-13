var database = require("../database/config");

function listarDadosFrios(idEmpresa) {
  console.log(
    "ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarDadosFrios()"
  );

  var instrucao = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `
    SELECT TOP 8 ds.statusPrateleira  as dados_frios FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucao = `
        SELECT ds.statusPrateleira as dados_frios FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
                JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                    WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 8;
        `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarDadosMercearia(idEmpresa) {
  console.log(
    "ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarDadosMercearia()"
  );

  var instrucao = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `
    SELECT TOP 10 ds.statusPrateleira as dados_mercearia FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucao = `
    SELECT ds.statusPrateleira as dados_mercearia FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
        `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarDadosHortifruti(idEmpresa) {
  console.log(
    "ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarDadosHortifruti()"
  );

  var instrucao = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `
    SELECT TOP 9 ds.statusPrateleira as dados_hortifruti FROM dados_sensor ds 
    JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
    JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
    WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucao = `
    SELECT ds.statusPrateleira as dados_hortifruti FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 9;
        `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarDadosBebidas(idEmpresa) {
  var instrucao = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `
    SELECT TOP 10 ds.statusPrateleira as dados_bebidas FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucao = `
    SELECT ds.statusPrateleira as dados_bebidas FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
        `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarDadosCuidados(idEmpresa) {
  var instrucao = "";

  if (process.env.AMBIENTE_PROCESSO == "producao") {
    instrucao = `
    SELECT TOP 7 ds.statusPrateleira as dados_cuidados FROM dados_sensor ds 
    JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
    JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
    WHERE prat.setor = 'Cuidados Pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
  } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
    instrucao = `
    SELECT ds.statusPrateleira as dados_cuidados FROM dados_sensor ds 
        JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira 
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                WHERE prat.setor = 'Cuidados Pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 7;
        `;
  } else {
    console.log(
      "\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n"
    );
    return;
  }
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listarDadosFrios,
  listarDadosMercearia,
  listarDadosHortifruti,
  listarDadosCuidados,
  listarDadosBebidas
};
