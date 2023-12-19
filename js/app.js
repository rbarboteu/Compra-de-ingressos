function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso').value
    let quantidadeDeIngressos = parseInt(document.getElementById('qtd').value)
    
    if(tipoDeIngresso == 'pista'){
        comprarPista(quantidadeDeIngressos)
    } 

    if(tipoDeIngresso == 'inferior'){
        comprarInferior(quantidadeDeIngressos)
    }

    if(tipoDeIngresso == 'superior'){
        comprarSuperior(quantidadeDeIngressos)
    }
}

function comprarSuperior(quantidadeDeIngressos){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent)

    if(quantidadeDeIngressos < quantidadeSuperior){
        quantidadeSuperior = quantidadeSuperior - quantidadeDeIngressos
        document.getElementById('qtd-superior').textContent = quantidadeSuperior
        alert('Compra efetuada com sucesso!')
    } else {
        alert('Compra indisponível, você está excedendo o número de ingressos disponibilizado!')
    }
}

function comprarInferior(quantidadeDeIngressos){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent)

    if(quantidadeDeIngressos < quantidadeInferior){
        quantidadeInferior = quantidadeInferior - quantidadeDeIngressos
        document.getElementById('qtd-inferior').textContent = quantidadeInferior
        alert('Compra efetuada')
    } else {
        alert('Compra indisponível, você está excedendo o número de ingressos disponibilizado!')
    }
}

function comprarPista(quantidadeDeIngressos){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent)

    if(quantidadeDeIngressos < quantidadePista){
        quantidadePista = quantidadePista - quantidadeDeIngressos
        document.getElementById('qtd-pista').textContent = quantidadePista
        alert('Compra efetuada! :)')
    }else {
        alert('Compra indisponível, você está excedendo o número de ingressos disponibilizado!')
    }
}