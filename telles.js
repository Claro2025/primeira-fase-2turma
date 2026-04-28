//info
let pesobrutoTotal, taradoVeiculo
let cargaKg

pesobrutoTotal = Number (prompt("informe o peso de veiculo pela carga: "))
taradoVeiculo = Number (prompt("informe somente o peso do veiculo"))

cargaKg = pesobrutoTotal - taradoVeiculo
console.log("o peso da carga que o caminhão está carregado é" + cargaKg + "Kg")

