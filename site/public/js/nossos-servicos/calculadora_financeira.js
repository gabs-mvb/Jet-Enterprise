function validarCalculadoraTotal() {
  if (
    Number(input_receita_total.value) &&
    Number(input_custo_variavel.value) &&
    Number(input_custo_fixo.value)
  ) {
    calcular_tudo();
  } else {
    alert('Insira os dados corretamente na calculadora de lucros');
  }
}
function validarCalculadoraPerda() {
    if (
        input_preco_unidade.value &&
        input_quantidade_abastecimento.value
    ) {
       calcular_perda(); 
    }else{
        alert('Insira os dados corretamente na calculadora de perdas');
    }
}

function calcular_tudo() {
  var receita_total = Number(input_receita_total.value);
  var custo_total =
    Number(input_custo_variavel.value) + Number(input_custo_fixo.value);
  var lucro_liquido = receita_total - custo_total;
  var margem_lucro = (lucro_liquido / receita_total) * 100;
  var prejuizo_mensal = lucro_liquido * 0.1;
  var lucro_com_empresa = lucro_liquido * 1.1;
  var aumento_lucro_anual = prejuizo_mensal * 12;
  var lucro_total_anual = aumento_lucro_anual * 12;
  var lucro_anual_inicial = lucro_liquido * 12;

  div_resultado_total.innerHTML = ` <br>
Sua margem de <u>lucro líquido mensal</u> hoje é de <b>${margem_lucro.toFixed(2)}%</b>. <br>
O <u>lucro líquido mensal</u> da sua empresa atualmente é <b>${lucro_liquido.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b>. <br> O <u>lucro anual</u> da sua empresa atualmente é <b>${lucro_anual_inicial.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b>. <br> <br>
De acordo com a ABRAS (Associação Brasileira de Supermercados), o seu mercado está <b class="vermelho">perdendo</b> em média <b class="vermelho">${prejuizo_mensal.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b> (10%) por mês. Ao contratar o nosso serviço, a probabilidade é de que seu <u>lucro líquido</u> <b class="verde">aumente</b> para <b class="verde">${lucro_com_empresa.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b> mensais, que resulta em um <b class="verde">aumento</b> de <b class="verde">${aumento_lucro_anual.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b> por ano e fará o seu lucro líquido total ser <b class="verde">${lucro_total_anual.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b>.
<br> <br>
`;
}

function calcular_perda() {
  var calculo =
    Number(input_preco_unidade.value) *
    Number(input_quantidade_abastecimento.value);
  var media_calculo = calculo * 60;

  div_resultado.innerHTML = `
Quando o seu mercado não tem estoque de <u>${
    input_nome_produto.value
  }</u> disponibilizado ao cliente, o seu comércio <b class="vermelho">perde</b> a oportunidade de fazer até <b class="verde">${calculo.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b> de <b class="verde">receita</b> apenas com este produto, por dia! Se o seu mercado ficar apenas 5 dias sem estoque de <u>${
    input_nome_produto.value
  }</u> por mês, em um ano você terá perdido a chance de <b class="verde">aumentar a sua receita</b> em até <b class="verde">${media_calculo.toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</b>, apenas com a venda de <u>${input_nome_produto.value}</u>!
`;
}
