var express = require("express");
var router = express.Router();

var bolinhasController = require("../controllers/bolinhasController");

router.get("/listarDadosFrios/:idEmpresa", function (req, res) {
    bolinhasController.listarDadosFrios(req, res);
});

router.get("/listarDadosMercearia/:idEmpresa", function (req, res) {
    bolinhasController.listarDadosMercearia(req, res);
});

router.get("/listarDadosHortifruti/:idEmpresa", function (req, res) {
    bolinhasController.listarDadosHortifruti(req, res);
});

router.get("/listarDadosCuidados/:idEmpresa", function (req, res) {
    bolinhasController.listarDadosCuidados(req, res);
});

router.get("/listarDadosBebidas/:idEmpresa", function (req, res) {
    bolinhasController.listarDadosBebidas(req, res);
});


module.exports = router;