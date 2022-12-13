var express = require("express");
var router = express.Router();

var produtosController = require("../controllers/produtosController");


router.get("/listarprodutos/:idEmpresa", function (req, res) {
    produtosController.listarprodutos(req, res);
});

router.get("/friosNoti/:idEmpresa", function (req, res) {
    produtosController.friosNoti(req, res);
});

router.get("/listarprodutosMercearia/:idEmpresa", function (req, res) {
    produtosController.listarprodutosMercearia(req, res);
});

router.get("/merceariaNoti/:idEmpresa", function (req, res) {
    produtosController.merceariaNoti(req, res);
});

router.get("/listarprodutosHortifruti/:idEmpresa", function (req, res) {
    produtosController.listarprodutosHortifruti(req, res);
});

router.get("/hortifrutiNoti/:idEmpresa", function (req, res) {
    produtosController.hortifrutiNoti(req, res);
});

router.get("/listarProdutosCuidados/:idEmpresa", function (req, res) {
    produtosController.listarProdutosCuidados(req, res);
});

router.get("/cuidadosNoti/:idEmpresa", function (req, res) {
    produtosController.cuidadosNoti(req, res);
});

router.get("/listarProdutosBebidas/:idEmpresa", function (req, res) {
    produtosController.listarProdutosBebidas(req, res);
});

router.get("/bebidasNoti/:idEmpresa", function (req, res) {
    produtosController.bebidasNoti(req, res);
});

router.put("/confirmarProduto/:idProduto", function (req, res) {
    produtosController.confirmarProduto(req, res);
});

router.post("/alerta", function (req, res) {
    produtosController.alerta(req, res);
});

router.get("/buscarAlerta/:idEmpresa", function (req, res) {
    produtosController.buscarAlerta(req, res);
});


module.exports = router;