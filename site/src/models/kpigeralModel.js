var database = require("../database/config");


// DashBoard Geral
function buscarMedidasEmTempoReal(idEmpresa, limite_linhas) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT DISTINCT (FLOOR ((SUM(statusPrateleira) / 1.32))) as conta 
		FROM (SELECT TOP 44 ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = 1
                   ORDER BY ds.idDado DESC) as soma; `
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (44 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa}
                   ORDER BY ds.idDado DESC LIMIT ${limite_linhas}) as soma;   
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function setorMenosAbastecido(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function setorMenosAbastecido()");


    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT 
        (SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
(SELECT TOP 8 ds.statusPrateleira FROM dados_sensor ds 
JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
   JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
      WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa}
        ORDER BY ds.idDado DESC) as soma) / 0.24)) as conta) abastecimento_frios,
        
        (SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
(SELECT TOP 10 ds.statusPrateleira FROM dados_sensor ds 
JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
   JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
      WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa}
        ORDER BY ds.idDado DESC) as soma) / 0.3)) as conta) abastecimento_mercearia, 
        
        (SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
(SELECT TOP 9 ds.statusPrateleira FROM dados_sensor ds 
JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
   JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
      WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa}
        ORDER BY ds.idDado DESC) as soma) / 0.27)) as conta) abastecimento_hortifruti, 
        
        (SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
(SELECT TOP 7 ds.statusPrateleira FROM dados_sensor ds 
JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
   JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
      WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa}
        ORDER BY ds.idDado DESC) as soma) / 0.21)) as conta) abastecimento_cuidados, 
        
        (SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
(SELECT TOP 10 ds.statusPrateleira FROM dados_sensor ds 
JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
   JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
      WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa}
        ORDER BY ds.idDado DESC) as soma) / 0.3)) as conta) abastecimento_bebidas;
                `
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
            SELECT
    
            (SELECT DISTINCT ROUND (SUM(statusPrateleira) / (8 * 3) * 100) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Frios e congelados'
            ORDER BY ds.idDado DESC LIMIT 8) as wip_frios) as abastecimento_frios,
            
            (SELECT DISTINCT ROUND (SUM(statusPrateleira) / (10 * 3) * 100) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Mercearia'
            ORDER BY ds.idDado DESC LIMIT 10) as wip_mercearia) as abastecimento_mercearia,
              
            (SELECT DISTINCT ROUND (SUM(statusPrateleira) / (9 * 3) * 100) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Hortifruti'
            ORDER BY ds.idDado DESC LIMIT 9) as wip_hortifruti) as abastecimento_hortifruti,
            
            (SELECT DISTINCT ROUND (SUM(statusPrateleira) / (7 * 3) * 100) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Cuidados Pessoais'
            ORDER BY ds.idDado DESC LIMIT 7) as wip_cuidados) as abastecimento_cuidados,
            
            (SELECT DISTINCT ROUND (SUM(statusPrateleira) / (10 * 3) * 100) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Bebidas'
            ORDER BY ds.idDado DESC LIMIT 10) as wip_bebidas) AS abastecimento_bebidas ;
            `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function statusPredominanteMes(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function statusPredominanteMes()");

    var instrucao = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT CAST( ROUND (

            ((SELECT 
 (SELECT (SELECT (SUM(statusPrateleira)) FROM dados_sensor ds 
     JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
         JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
             WHERE e.idEmpresa = ${idEmpresa} AND MONTH(ds.dtPrateleira) = MONTH(getdate())) 
                 AS wip_sum))*100) /

                                     (SELECT 
 ((SELECT (SELECT (COUNT(statusPrateleira)) FROM dados_sensor ds 
     JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
         JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
             WHERE e.idEmpresa = ${idEmpresa} AND MONTH(ds.dtPrateleira) = MONTH(getdate())) 
                 AS wip_count)*3)), 2 ) AS INT) as estado_predominante_mes
                 ;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT 
        (SELECT (SELECT DISTINCT ROUND ((SUM(statusPrateleira) / (COUNT(statusPrateleira) * 3) * 100)) FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
                JOIN empresa e ON prat.fkEmpresa = e.idEmpresa
                    WHERE e.idEmpresa = ${idEmpresa} AND MONTH(ds.dtPrateleira) = MONTH(curdate())) 
                        AS wip_estado) estado_predominante_mes;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Setor Frios
function KpiSetorFrios(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar o abastecimento do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
         (SELECT TOP 8 ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC) as soma) / 0.24)) as conta;  
            `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (8 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Frios e congelados' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC LIMIT 8 ) as soma;  
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function KpiSemEstoque(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar a Ausencia de Produto.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT ( SELECT (24 - SUM(statusPrateleira)) FROM (SELECT top 8 ds.statusPrateleira FROM dados_sensor ds
            JOIN prateleira prat ON
               ds.fkPrateleira = prat.idPrateleira
                JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Frios e congelados'
                   ORDER BY ds.idDado DESC) as empresa_dados) falta_frios;
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT (SELECT (24 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Frios e congelados'
            AND ds.idDado >= (SELECT ds.idDado FROM dados_sensor ds JOIN prateleira prat on prat.idPrateleira = ds.fkPrateleira
            WHERE prat.setor = 'Frios e congelados' ORDER BY idDado DESC LIMIT 7,1))wip) falta_frios;   
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Setor Marcearia
function kpisdoSetorMarcearia(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar o abastecimento do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
         (SELECT TOP 10 ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC) as soma) / 0.3)) as conta;   
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (10 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Mercearia' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC LIMIT 10 ) as soma;  
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function KpiSemEstoqueMarcearia(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n ");

    // Select para mostrar a ausencia..
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT ( SELECT (30 - SUM(statusPrateleira)) FROM (SELECT top 10 ds.statusPrateleira FROM dados_sensor ds
            JOIN prateleira prat ON
               ds.fkPrateleira = prat.idPrateleira
                JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Mercearia'
                   ORDER BY ds.idDado DESC) as empresa_dados) falta_mercearia;   
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT (SELECT (30 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Mercearia'
            AND ds.idDado >= (SELECT ds.idDado FROM dados_sensor ds JOIN prateleira prat on prat.idPrateleira = ds.fkPrateleira
            WHERE prat.setor = 'Mercearia' ORDER BY idDado DESC LIMIT 9,1))wip) falta_mercearia; 
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Setor HortiFruti
function kpisdosetorHortifruti(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar o abastecimento do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
         (SELECT TOP 9 ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC) as soma) / 0.27)) as conta;   
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (9 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Hortifruti' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC LIMIT 9 ) as soma;    
        
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiAunsenciaHortifruti(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar a ausencia do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT ( SELECT (27 - SUM(statusPrateleira)) FROM (SELECT top 9 ds.statusPrateleira FROM dados_sensor ds
            JOIN prateleira prat ON
               ds.fkPrateleira = prat.idPrateleira
                JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Hortifruti'
                   ORDER BY ds.idDado DESC) as empresa_dados) falta_hortifruti;   
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT (SELECT (27 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Hortifruti'
            AND ds.idDado >= (SELECT ds.idDado FROM dados_sensor ds JOIN prateleira prat on prat.idPrateleira = ds.fkPrateleira
            WHERE prat.setor = 'Hortifruti' ORDER BY idDado DESC LIMIT 8,1))wip) falta_hortifruti;   
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Setor Cuidados Pessoais
function kpisdosetorCuidados(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar o abastecimento do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
         (SELECT TOP 7 ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC) as soma) / 0.21)) as conta;   
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (7 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Cuidados pessoais' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC LIMIT 7 ) as soma;    
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiAunsenciaCuidados(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar a ausencia de produtos do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT ( SELECT(21-SUM(statusPrateleira)) FROM (SELECT top 7 ds.statusPrateleira FROM dados_sensor ds
            JOIN prateleira prat ON
               ds.fkPrateleira = prat.idPrateleira
                JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Cuidados Pessoais'
                   ORDER BY ds.idDado DESC) as empresa_dados) falta_cuidados;  
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT (SELECT (21 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Cuidados Pessoais'
            AND ds.idDado >= (SELECT ds.idDado FROM dados_sensor ds JOIN prateleira prat on prat.idPrateleira = ds.fkPrateleira
            WHERE prat.setor = 'Cuidados Pessoais' ORDER BY idDado DESC LIMIT 6,1))wip) falta_cuidados;   
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Setor Bebidas
function kpisdosetorBebidas(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar o abastecimento do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        SELECT FLOOR(((SELECT (SUM(statusPrateleira)) FROM 
         (SELECT TOP 10 ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC) as soma) / 0.3)) as conta;  
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT DISTINCT (ROUND ((SUM(statusPrateleira) / (10 * 3) * 100))) as conta FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN Prateleira prat ON ds.fkPrateleira = prat.idPrateleira
               JOIN Empresa e ON prat.fkEmpresa = e.idEmpresa 
                  WHERE prat.setor = 'Bebidas' AND e.idEmpresa = ${idEmpresa}
                    ORDER BY ds.idDado DESC LIMIT 10 ) as soma;     
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiAunsenciaBebidas(idEmpresa) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal()");

    // Select para mostrar a aunsencia de produtos do setor.
    var instrucao = ''
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
       SELECT ( SELECT(30-SUM(statusPrateleira)) FROM (SELECT top 10 ds.statusPrateleira FROM dados_sensor ds
         JOIN prateleira prat ON
            ds.fkPrateleira = prat.idPrateleira
             JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Bebidas'
                ORDER BY ds.idDado DESC) as empresa_dados) falta_bebidas;  
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `
        SELECT (SELECT (30 - SUM(statusPrateleira)) FROM (SELECT ds.statusPrateleira FROM dados_sensor ds 
            JOIN prateleira prat ON ds.fkPrateleira = prat.idPrateleira
            JOIN empresa e ON prat.fkEmpresa = e.idEmpresa WHERE e.idEmpresa = ${idEmpresa} AND prat.setor = 'Bebidas'
            AND ds.idDado >= (SELECT ds.idDado FROM dados_sensor ds JOIN prateleira prat on prat.idPrateleira = ds.fkPrateleira
            WHERE prat.setor = 'Bebidas' ORDER BY idDado DESC LIMIT 9,1))wip) falta_bebidas;      
      `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    buscarMedidasEmTempoReal,
    setorMenosAbastecido,
    statusPredominanteMes,
    KpiSetorFrios,
    KpiSemEstoque,
    kpisdoSetorMarcearia,
    KpiSemEstoqueMarcearia,
    kpisdosetorHortifruti,
    kpiAunsenciaHortifruti,
    kpisdoSetorMarcearia,
    kpisdosetorCuidados,
    kpiAunsenciaCuidados,
    kpisdosetorBebidas,
    kpiAunsenciaBebidas,
}