var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function buscar(req, res) {
    const idPerfil = req.query.id;

    usuarioModel.buscar(idPerfil)
        .then(
            function (resultado) {
                res.json(resultado[0]);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var user = req.body.userServer;
    var senha = req.body.senhaServer;

    if (user == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(user, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("user e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}


// FUNÇÃO QUE PEGA OS VALORES SETADOS EM PERFIL-CONFIG
function confirmar_user(req, res) {
    var user = req.body.username;
    var idPerfil = req.body.idPerfil;
    if (user == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else {
        usuarioModel.confirmar_user(user, idPerfil)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}


function updateEmpresa(req, res) {
    var idEmpresa = req.body.idEmpresa;
    var idPerfil = req.body.idPerfil;

    if (idPerfil == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {
        usuarioModel.updateEmpresa(idPerfil, idEmpresa)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

// FUNÇÃO QUE PEGA OS VALORES SETADOS EM PERFIL-CONFIG
function confirmar_senha(req, res) {
    var senha = req.body.senha;
    var idPerfil = req.body.idPerfil;
    if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        usuarioModel.confirmar_senha(senha, idPerfil)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}


// FUNÇÃO QUE PEGA OS VALORES SETADOS EM PERFIL-CONFIG
function confirmar_telefone(req, res) {
    var telefone = req.body.telefone;
    var idPerfil = req.body.idPerfil;
    if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else {
        usuarioModel.confirmar_telefone(telefone, idPerfil)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var user = req.body.userServer;
    var senha = req.body.senhaServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var contato = req.body.contatoServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (user == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(user, senha, nome, email, contato)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
function adicionarImg(req, res) {
    var idPerfil = req.body.idPerfil;
    var Imagem = req.body.ImagemServer;
    if (Imagem == undefined) {
        res.status(400).send("Sua foto está undefined!");
    } else {
        usuarioModel.adicionarImg(idPerfil, Imagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    buscar,
    confirmar_user,
    confirmar_senha,
    confirmar_telefone,
    updateEmpresa,
    adicionarImg
}