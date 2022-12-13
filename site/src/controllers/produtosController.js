var produtosModel = require("../models/produtosModel");


function listarprodutos(req, res) {

    var idEmpresa = req.params.idEmpresa
   
    produtosModel.listarprodutos(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function friosNoti(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.friosNoti(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarprodutosMercearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.listarprodutosMercearia(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function merceariaNoti(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.merceariaNoti(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarprodutosHortifruti(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.listarprodutosHortifruti(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function hortifrutiNoti(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.hortifrutiNoti(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarProdutosBebidas(req, res) {

    var idEmpresa = req.params.idEmpresa
   
    produtosModel.listarProdutosBebidas(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function bebidasNoti(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.bebidasNoti(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarProdutosCuidados(req, res) {

    var idEmpresa = req.params.idEmpresa
   
    produtosModel.listarProdutosCuidados(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cuidadosNoti(req, res) {

    var idEmpresa = req.params.idEmpresa

    produtosModel.cuidadosNoti(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function confirmarProduto(req, res) {
    var idProduto = req.params.idProduto;
    var nome = req.body.nome;
   
    produtosModel.confirmarProduto(idProduto, nome).then(function (resultado) {
        if (resultado == undefined) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }

        console.log(resultado.status)
        console.log(res.status)
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function alerta(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idPrat = req.body.idPrat;
    var tipo = req.body.tipo;

    // Faça as validações dos valore
    if (idPrat == undefined) {
        res.status(400).send("Seu user está undefined!");
    } else if (tipo == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        produtosModel.alerta(idPrat, tipo)
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

function buscarAlerta(req, res) {
    var idEmpresa = req.params.idEmpresa

    produtosModel.buscarAlerta(idEmpresa).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    listarprodutos,
    confirmarProduto,
    listarprodutosMercearia,
    listarprodutosHortifruti,
    listarProdutosCuidados,
    listarProdutosBebidas,
    alerta,
    hortifrutiNoti,
    merceariaNoti,
    friosNoti,
    cuidadosNoti,
    bebidasNoti,
    buscarAlerta,
}