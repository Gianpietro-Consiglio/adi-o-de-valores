var button = window.document.getElementById('button')
var button2 = window.document.getElementById('button2')
button.addEventListener('click',adicionar)
button2.addEventListener('click', finalizar)
var lista = []
var quadrado = window.document.getElementById('lista')
var txt1 = window.document.getElementById('txt1')
var txt2 = window.document.getElementById('txt2')
var txt3 = window.document.getElementById('txt3')
var txt4 = window.document.getElementById('txt4')
var txt5 = window.document.getElementById('txt5')

function adicionar(){
    txt1.innerHTML = ``
    txt2.innerHTML = ``
    txt3.innerHTML = ``
    txt4.innerHTML = ``
    txt5.innerHTML = ``
    let campo_numero = window.document.getElementById('numero').value
    if (String(campo_numero).length == 0 || Number(campo_numero) < 0 || Number(campo_numero) > 100){
        alert('Preencha os dados corretamente!')
    }
    
    else{
        quadrado.style.borderStyle='groove'
        if(lista.indexOf(Number(campo_numero)) != -1){
            alert('Numero ja adicionado!')
            window.document.getElementById('numero').value=''

        }else{
            lista.push(Number(campo_numero))
            quadrado.innerHTML += `Valor ${campo_numero} adicionado.<br>`
            window.document.getElementById('numero').value=''
        }
        } 
    }



function finalizar(){
    lista = lista.sort()
    soma = 0
    for(var i=0;i<lista.length;i++){
        soma += lista[i]
    }
    txt1.innerHTML = `Ao todo, temos ${lista.length} números cadastrados.<br>`
    txt2.innerHTML = `O menor número foi ${lista[0]}.<br>`
    txt3.innerHTML = `O maior número foi ${lista[lista.length - 1]}.<br>`
    txt4.innerHTML = `Somando todos os valores, temos ${soma}.<br>`
    txt5.innerHTML = `A média dos valores digitados é ${soma / lista.length}.<br>`
}