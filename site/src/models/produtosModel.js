var database = require("../database/config");

function listarprodutos(idEmpresa) {


    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT DISTINCT TOP 8 p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC LIMIT 8;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }               
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function friosNoti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function friosNoti()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
            SELECT DISTINCT TOP 8 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, ds.idDado, format(ds.dtPrateleira, 'HH') as dtPrat FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = ` SELECT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, date_format(ds.dtPrateleira, '%d/%m/%y') as dtPrat FROM Produto p
            JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
                JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                    JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                        JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                                WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 8;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarprodutosMercearia(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT DISTINCT TOP 10 p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC LIMIT 10;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function merceariaNoti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function merceariaNoti()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
            SELECT DISTINCT TOP 10 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, ds.idDado, format(ds.dtPrateleira, 'HH') as dtPrat FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = ` SELECT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, date_format(ds.dtPrateleira, '%d/%m/%y') as dtPrat FROM Produto p
            JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
                JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                    JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                        JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                                WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarprodutosHortifruti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function hortifrutiNoti()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT DISTINCT TOP 9 p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `SELECT DISTINCT p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC LIMIT 9;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function hortifrutiNoti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
            SELECT DISTINCT TOP 9 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, ds.idDado, format(ds.dtPrateleira, 'HH') as dtPrat FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = ` SELECT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, date_format(ds.dtPrateleira, '%d/%m/%y') as dtPrat FROM Produto p
            JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
                JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                    JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                        JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                                WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 9;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarProdutosBebidas(idEmpresa) {

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT DISTINCT TOP 10 p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC LIMIT 10;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function bebidasNoti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function bebidasNoti()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
            SELECT DISTINCT TOP 10 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, ds.idDado, format(ds.dtPrateleira, 'HH') as dtPrat FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = ` SELECT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, date_format(ds.dtPrateleira, '%d/%m/%y') as dtPrat FROM Produto p
            JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
                JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                    JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                        JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                                WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 10;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function listarProdutosCuidados(idEmpresa) {

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT DISTINCT TOP 7 p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Cuidados Pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT p.idProduto, p.nomeProduto FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY p.idProduto DESC LIMIT 7;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
         console.log("Executando a instrução SQL: \n" + instrucao);
         return database.executar(instrucao);
}

function cuidadosNoti(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function cuidadosNoti()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
            SELECT DISTINCT TOP 7 prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, ds.idDado, format(ds.dtPrateleira, 'HH') as dtPrat FROM Produto p
        JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
            JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                    JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                        JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                            WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = ` SELECT prat.setor, prat.idPrateleira, p.idProduto, p.nomeProduto, ds.statusPrateleira, date_format(ds.dtPrateleira, '%d/%m/%y') as dtPrat FROM Produto p
            JOIN Prateleira_Produto pp on pp.fkProduto = p.idProduto
                JOIN Prateleira prat on pp.fkPrateleira = prat.idPrateleira 
                    JOIN Empresa e on prat.fkEmpresa = e.idEmpresa
                        JOIN Perfil pf on pf.fkEmpresa = e.idEmpresa
                            JOIN dados_sensor ds on ds.fkPrateleira = prat.idPrateleira
                                WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa} ORDER BY ds.idDado DESC LIMIT 7;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}

function confirmarProduto(idProduto, nome){

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function ListarProdutosFrioseCongelados()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        update produto set nomeProduto = '${nome}' where idProduto = ${idProduto};
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        update produto set nomeProduto = '${nome}' where idProduto = ${idProduto};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function alerta(idPrat, tipo){

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function alerta()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        INSERT INTO historico_alerta (dtHistorico, tipo, fkPrateleira) VALUES (getdate(), '${tipo}', '${idPrat}')
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        INSERT INTO historico_alerta (dtHistorico, tipo, fkPrateleira) VALUES (now(), '${tipo}', '${idPrat}')
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscarAlerta(idEmpresa) {

    console.log("ACESSEI O PRODUTOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n \n function cuidadosNoti()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT ha.tipo, ha.fkPrateleira, format(ha.dtHistorico, 'HH') as dtHist FROM historico_alerta ha
            JOIN prateleira prat ON prat.idPrateleira = ha.fkPrateleira
                WHERE fkEmpresa = ${idEmpresa};
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = ` 
            SELECT ha.tipo, ha.fkPrateleira, date_format(ha.dtHistorico, '%d/%m/%y') as dtHist FROM historico_alerta ha
                JOIN prateleira prat ON prat.idPrateleira = ha.fkPrateleira
                   WHERE fkEmpresa = ${idEmpresa};
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }  
        console.log("Executando a instrução SQL: \n" + instrucao);
        return database.executar(instrucao);
}


module.exports = {
    listarprodutos,
    confirmarProduto,
    listarprodutosMercearia,
    listarprodutosHortifruti,
    listarProdutosBebidas,
    listarProdutosCuidados,
    alerta,
    hortifrutiNoti,
    merceariaNoti,
    friosNoti,
    cuidadosNoti,
    bebidasNoti,
    buscarAlerta,
}