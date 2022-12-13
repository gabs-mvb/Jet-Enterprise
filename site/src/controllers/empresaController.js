var empresaModel = require("../models/empresaModel");



function cadastrarEmpresa(req, res) {

    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var empresaNome = req.body.empresaNomeServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var logradouro = req.body.logradouroServer;
    var cep = req.body.cepServer;
    var complemento = req.body.complementoVar;
    var cnpj = req.body.cnpjServer;

    // Faça as validações dos valores
    if (empresaNome == undefined) {
        res.status(400).send("O nome da empresa está undefined!");
    } else if (cnpj == undefined) {
        res.status(400).send("O CNPJ está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("O logradouro está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("A cidade está undefined!");
    }  else if (estado == undefined) {
        res.status(400).send("O estado está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("O CEP está undefined!");
    }
    else {
        
        // Passe os valores como parâmetro e vá para o arquivo empresaModel.js
        empresaModel.cadastrarEmpresa(empresaNome, estado, cidade, bairro, logradouro,
            cep, complemento, cnpj)
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


function selectEmpresa(req, res) {

    empresaModel.selectEmpresa().then(function (resultado) {
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

function buscarDadosEmpresa(req, res) {

    var idEmpresa = req.params.idEmpresa;

    empresaModel.buscarDadosEmpresa(idEmpresa).then(function (resultado) {
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
    cadastrarEmpresa,
    selectEmpresa,
    buscarDadosEmpresa
};