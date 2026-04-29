
function calcularPrecoBrique(){
    alert("funçao foi executada")
    //info
    let precoCompra, precoVenda
    //leitura
    precoCompra = Number (prompt("Preço de compra: "))
    //processamento
    precoVenda = precoCompra * 3
    //saida
    console.log("Preço para venda: R$" + precoVenda.toFixed(2))
    alert("Preço para venda: R$" + precoVenda.toFixed(2))
    
    document.getElementById("resultado").innerHTML = "Preço para venda: R$" + precoVenda.toFixed(2)
    
}