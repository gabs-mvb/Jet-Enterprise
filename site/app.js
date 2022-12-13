// process.env.AMBIENTE_PROCESSO = "desenvolvimento";
process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var funcionarioRouter = require("./src/routes/funcionario");
var empresaRouter = require("./src/routes/empresa");
var produtosRouter = require("./src/routes/produtos");
var notificacoesRouter = require("./src/routes/avisos");
var kpigeralRouter = require("./src/routes/kpigeral");
var medidas = require("./src/routes/medidas");
var bolinhas = require("./src/routes/bolinhas")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/empresa", empresaRouter);
app.use("/produtos", produtosRouter);
app.use("/avisos",notificacoesRouter);
app.use("/kpigeral", kpigeralRouter);
app.use("/medidas", medidas);
app.use("/funcionario",funcionarioRouter);
app.use("/bolinhas", bolinhas);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});
