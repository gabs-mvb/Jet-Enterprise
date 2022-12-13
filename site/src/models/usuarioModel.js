var database = require("../database/config")

function listar() {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM Perfil;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar(idPerfil) {
    const instrucao = `SELECT * FROM Perfil WHERE idPerfil = ${idPerfil}`;
    return database.executar(instrucao);
  }

function entrar(user, senha) {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", user, senha)
    var instrucao = `
        SELECT * FROM Perfil WHERE username = '${user}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);    
}


//FUNCÃO QUE EXECUTA A ALTERAÇÃO DAS INFORMAÇÕES NO BANCO DE DADOS
async function confirmar_user(username, idPerfil) {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Perfil SET Perfil.username = '${username}'
    WHERE idPerfil = ${parseInt(idPerfil)}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

//FUNCÃO QUE EXECUTA A ALTERAÇÃO DAS INFORMAÇÕES NO BANCO DE DADOS
async function confirmar_senha(senha, idPerfil) {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Perfil SET Perfil.senha = '${senha}'
    WHERE idPerfil = ${parseInt(idPerfil)}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

//FUNCÃO QUE EXECUTA A ALTERAÇÃO DAS INFORMAÇÕES NO BANCO DE DADOS
async function confirmar_telefone(telefone, idPerfil) {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function alterar(): ")

    var instrucao = `UPDATE Perfil SET Perfil.telefone = '${telefone}'
    WHERE idPerfil = ${parseInt(idPerfil)}`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return await database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(user, senha, nome, email, contato) {
    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", user,senha,nome,email,contato);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Perfil (username, senha, nome ,email, telefone) VALUES ('${user}', '${senha}', '${nome}', '${email}', '${contato}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updateEmpresa(idPerfil, idEmpresa) {

    console.log("ACESSEI O Perfil MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function updateEmpresa():");  

    var instrucao = `
        UPDATE Perfil SET fkEmpresa = ${idEmpresa} WHERE idPerfil = ${idPerfil};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function adicionarImg(idPerfil, Imagem){
    var instrucao = `
    UPDATE Perfil SET urlImagem = '${Imagem}' WHERE idPerfil = ${idPerfil};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    buscar,
    confirmar_user,
    confirmar_senha,
    confirmar_telefone,
    updateEmpresa,
    adicionarImg
};