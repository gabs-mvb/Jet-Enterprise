var btn_acionado = 0;
var td_produto = "";
function adicionar_produto(idProduto){
    if(btn_acionado == 0){
        var idProduto = document.getElementById(idProduto);
        idProduto.innerHTML = `
            <input class="input_produto" placeholder="Nome do produto*" type="text" id="input_produto" onblur="validar_produto()">
            <button class="btn_adicionar_produto" onclick="confirmar_produto()">Confirmar</button>`
        td_produto = idProduto;
        btn_acionado = 1;
    } else{
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Confirme o nome do produto!',
            })
    }
}

/*var produto = false
function validar_produto(){
    var produto_frase = input_produto.value;
    if(produto_frase.length < 3){
        produto = false;
    } else {
        produto = true;
    }
} */

/* function confirmar_produto(){
    if(produto){
        insertProduto();
    } else{
        alert("Produto deve conter mais de 2 letras")
    }
} */

/* function insertProduto(){
    btn_acionado = 0;
    var frase_produto = input_produto.value;
    td_produto.innerHTML = `
    ${frase_produto}
    <img class="icon_editar" src="./assets/svg/icon_editar.svg" alt="" onclick="adicionar_produto(${td_produto.id})">
    `;
} */

// function removerLinhaTabela(idLinhaTabela){
//     var linhaTabela = document.getElementById(idLinhaTabela);
//     linhaTabela.remove();
// }

