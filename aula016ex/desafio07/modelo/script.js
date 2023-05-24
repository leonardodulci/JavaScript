var tela = document.getElementById('inum')
var tex = document.getElementById('itex')
var resp = document.getElementById('res')

function adicionar(){ 


    if(tela.value.length == 0){
        alert('Erro no número escolhido')
    } else{
        tela.innerHTML = `o valor ${tela} adicionado `
    }
    
        
    
}