var express = require("express");
var router = express.Router();

var funcionarioController = require("../controllers/funcionarioController");

router.get("/", function (req, res) {
    funcionarioController.buscar(req, res);
});

router.get("/listarFuncionario/:idEmpresa", function (req, res) {
    funcionarioController.listarFuncionario(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de funcionarioController.js
router.post("/cadastrarFuncionario/:idEmpresa", function (req, res) {
    funcionarioController.cadastrarFuncionario(req, res);
})

router.post("/autenticar", function (req, res) {
    funcionarioController.entrar(req, res);
});

router.delete("/removerusuario/:idPerfil", function (req, res) {
    funcionarioController.removerfuncionario(req, res)
});

module.exports = router;