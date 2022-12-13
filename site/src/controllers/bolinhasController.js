var bolinhasModel = require("../models/bolinhasModel");

function listarDadosFrios(req, res) {

    var idEmpresa = req.params.idEmpresa
   
    bolinhasModel.listarDadosFrios(idEmpresa).then(function (resultado) {
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

function listarDadosMercearia(req, res) {

    var idEmpresa = req.params.idEmpresa

    bolinhasModel.listarDadosMercearia(idEmpresa).then(function (resultado) {
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

function listarDadosHortifruti(req, res) {

    var idEmpresa = req.params.idEmpresa

    bolinhasModel.listarDadosHortifruti(idEmpresa).then(function (resultado) {
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
function listarDadosCuidados(req, res) {

    var idEmpresa = req.params.idEmpresa
   
    bolinhasModel.listarDadosCuidados(idEmpresa).then(function (resultado) {
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

function listarDadosBebidas(req, res) {

    var idEmpresa = req.params.idEmpresa
   
    bolinhasModel.listarDadosBebidas(idEmpresa).then(function (resultado) {
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
    listarDadosFrios,
    listarDadosMercearia,
    listarDadosHortifruti,
    listarDadosCuidados,
    listarDadosBebidas
};