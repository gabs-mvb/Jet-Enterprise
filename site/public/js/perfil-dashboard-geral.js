
/*Script do gráfico de pizza que indica o estado atual das gôndolas do mercado (em tempo real)*/
var faltando = 0;
var estocadas = 0;
function obterPie() {
    var idEmpresa = sessionStorage.ID_EMPRESA;
    console.log("chamando função obter dados gráfico");
    fetch(`medidas/obterPie/${idEmpresa}`).then(function (resposta) {
        if (resposta.ok) {

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                estocadas = resposta[0].abastecido;
                faltando = resposta[0].nao_abastecido;
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
    canvas.id = "pizza_estado_mercado"
    container.appendChild(canvas)
    const votacao = {
        labels: [
            'Gôndolas estocadas',
            'Gôndolas com produtos em falta'
        ],
        datasets: [{
            label: 'Estoque das gôndolas',
            data: [estocadas, faltando],
            backgroundColor: [
                'rgb(93, 208, 67)',
                'rgb(246, 69, 69)',
            ],
            hoverOffset: 4
        }]
    };
    
    const config = {
        type: 'pie',
        data: votacao,
    };
    
    const graficoVotacao = new Chart(
        document.getElementById('pizza_estado_mercado'),
        config
    );
    setTimeout(() => obterPie(), 16000);
}


// const data_pizza_estado_mercado = {
//     labels: [
//         'Gôndolas estocadas',
//         'Gôndolas com produtos em falta'
//     ],
//     datasets: [{
//         label: 'Estoque das gôndolas',
//         data: [84, 16],
//         backgroundColor: [
//             'rgb(93, 208, 67)',
//             'rgb(246, 69, 69)',
//         ],
//         hoverOffset: 4
//     }]
// };

// const config_estado_mercado_pie = {
//     type: 'pie',
//     data: data_pizza_estado_mercado,
// };

// const grafico_estado_mercado = new Chart(
//     document.getElementById('pizza_estado_mercado'),
//     config_estado_mercado_pie
// );

/*Script do gráfico de linha que indica o fluxo do giro dos produtos no mercado, por mês*/

const labels_linha_fluxo_setores = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
];

const data_linha_fluxo_setores = {
    labels: labels_linha_fluxo_setores,
    datasets: [{
        label: 'Frios e congelados',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'rgb(54, 162, 235)',
        data: [55, 68, 164, 73, 81, 80, 162, 84, 66, 102, 114, 188],
    },

{
    label: 'Mercearia',
    backgroundColor: 'rgb(201, 203, 207)',
    borderColor: 'rgb(201, 203, 207)',
    data: [61, 98, 142, 129, 22, 56, 202, 69, 40, 135, 123, 230],
},

{
    label: 'Hortifruti',
    backgroundColor: 'rgb(255, 205, 86)',
    borderColor: 'rgb(255, 205, 86)',
    data: [62, 76, 119, 59, 55, 77, 144, 43, 68, 82,101, 210],
},

{
    label: 'Cuidados pessoais',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [40, 69, 99, 66, 88, 114, 120, 123, 35, 47, 80, 162],
},

{
    label: 'Bebidas',
    backgroundColor: 'rgb(75, 192, 192)',
    borderColor: 'rgb(75, 192, 192)',
    data: [70, 81, 178, 95, 85, 188, 225, 34, 77, 89, 110, 265],
}
]
};

const config_linha_fluxo_setores = {
    type: 'line',
    data: data_linha_fluxo_setores,
    options: {}
};

const grafico_linha_fluxo_setores = new Chart(
    document.getElementById('linha_fluxo_setores'),
    config_linha_fluxo_setores
);


