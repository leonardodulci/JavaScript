var ini = Number(document.getElementById('inum').value)
var fim = Number(document.getElementById('ifim').value)
var passo = Number(document.getElementById('ipas').value)
var msg = document.getElementById('ires')
var contador = 0

    function contar(){
        for(contador = ini ; contador = passo ; contador += passo){
            msg.innerHTML += `${contador} + `
        }
       
        
}

