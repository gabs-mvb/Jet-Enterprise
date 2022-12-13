var express = require("express");
var router = express.Router();

var kpigeralController = require("../controllers/kpigeralController");

// DashBoardGeral Tela principal
router.get("/kpisdashboardgeral/:idEmpresa", function (req, res) {
    kpigeralController.buscarMedidasEmTempoReal(req, res);
});

router.get("/kpiMenosAbastecido/:idEmpresa", function (req, res) {
    kpigeralController.setorMenosAbastecido(req, res);
});

router.get("/kpiStatusPredominanteMes/:idEmpresa", function (req, res){
    kpigeralController.statusPredominanteMes(req, res)
});

// Setor Frios 
router.get("/kpisdosetorFrios/:idEmpresa", function (req, res) {
    kpigeralController.KpiSetorFrios(req, res);
});

router.get("/kpiSemEstoque/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoque(req, res);
});

// Setor Marcearia
router.get("/kpisdoSetorMarcearia/:idEmpresa", function (req, res) {
    kpigeralController.kpisdoSetorMarcearia(req, res);
});

router.get("/kpiSemEstoqueMarcearia/:idEmpresa", function (req, res) {
    kpigeralController.KpiSemEstoqueMarcearia(req, res);
});


// Setor hortifruti
router.get("/kpisdosetorHortifruti/:idEmpresa", function (req, res) {
    kpigeralController.kpisdosetorHortifruti(req, res);
});

router.get("/kpiAunsenciaHortifruti/:idEmpresa", function (req, res) {
    kpigeralController.kpiAunsenciaHortifruti(req, res);
});


// Setor Cuidados Pessoais
router.get("/kpisdosetorCuidados/:idEmpresa", function (req, res) {
    kpigeralController.kpisdosetorCuidados(req, res);
});

router.get("/kpiAunsenciaCuidados/:idEmpresa", function (req, res) {
    kpigeralController.kpiAunsenciaCuidados(req, res);
});


// Setor Bebidas
router.get("/kpisdosetorBebidas/:idEmpresa", function (req, res) {
    kpigeralController.kpisdosetorBebidas(req, res);
});

router.get("/kpiAunsenciaBebidas/:idEmpresa", function (req, res) {
    kpigeralController.kpiAunsenciaBebidas(req, res);
});




module.exports = router;