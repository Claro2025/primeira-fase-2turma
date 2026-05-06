function mostrarDiaDaSemana(){
    let numero, dia
    numero = (prompt("digite o número: "))
    if(numero == 1) 
        dia = "Domingo"
    
    document.getElementById("Resultado").innerHTML = dia
}