
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
function mostrarDiaDaSemana(){
    let numero, dia
    numero = (prompt("digite o número: "))
    if(numero == 1) {
        dia = "Domingo"
}   else if(numero == 2){
        dia = "Segunda"
}   else if(numero == 3){
        dia = "Terça"
}   else if(numero == 4){
        dia = "quarta"
}   else if(numero == 5){
        dia = "Quinta"
}   else if(numero == 6){
        dia = "Sexta"
}   else if(numero == 7){
        dia = "Sábado"
}else{
    dia = "Erro #404, dia não encontrado."
}  
    document.getElementById('resultado').innerHTML = dia
}

function revelarRecreio(){
    document.getElementById("resultado").innerHTML = 
    "<br>Inicio: 20:30" + 
    "<br>Fim: 20:45"
    "<br>chamada: 20:50"
}

function calcularParImpar(){
    let n = Number (prompt("Digita número, meu consagrado: "))
    if (n%2 == 0){
        alert("Par")
    }else{
        alert("Impar")
    }
}   




