var frios = 0;
var mercearia = 0;
var hortifruti = 0;
var cuidados = 0;
var bebidas = 0;
function obterPolar() {
    var idEmpresa = sessionStorage.ID_EMPRESA;
    console.log("chamando função obter dados gráfico");
    fetch(`medidas/obterPolar/${idEmpresa}`).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                frios = resposta[0].faltas_frios;
                mercearia = resposta[0].faltas_mercearia;
                hortifruti = resposta[0].faltas_hortifruti;
                cuidados = resposta[0].faltas_cuidados;
                bebidas = resposta[0].faltas_bebidas;
                criarGrafico();
            });

        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function criarGrafico(){
    var container = document.getElementById("grafico");
    container.innerHTML = "";
    
    var canvas = document.createElement("canvas");
    canvas.id = "polar_setor_falta_produto"
    container.appendChild(canvas)

    const data_polar_setor_falta_produto = {
        labels: [
            'Frios e congelados',
            'Mercearia',
            'Hortifruti',
            'Cuidados pessoais',
            'Bebidas'
        ],
        datasets: [{
            label: 'Faltas de produtos por setor',
            data: [frios, mercearia, hortifruti, cuidados, bebidas],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    };
    
    const config_polar_setor_falta_produto = {
        type: 'polarArea',
        data: data_polar_setor_falta_produto,
        options: {}
    };
    
    const grafico_polar_setor_falta_produto = new Chart(
        document.getElementById('polar_setor_falta_produto'),
        config_polar_setor_falta_produto
    );
    setTimeout(() => obterPolar(), 16000);
}



