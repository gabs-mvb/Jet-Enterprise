var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

router.get("/listar", function (req, res) {
    empresaController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de empresaController.js
router.post("/cadastrarEmpresa", function (req, res) {
    empresaController.cadastrarEmpresa(req, res);
});

router.get("/selectEmpresa", function (req, res) {
    empresaController.selectEmpresa(req, res);
});

router.get("/buscarDadosEmpresa/:idEmpresa", function (req, res) {
    empresaController.buscarDadosEmpresa(req, res);
});


module.exports = router;