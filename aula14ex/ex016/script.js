
function contar(){
var ini = Number(document.getElementById('inum').value)
var fim = Number(document.getElementById('ifim').value)
var passo = Number(document.getElementById('ipas').value)
var msg = document.getElementById('ires')

/*
var ini = 0
var fim = 10
var passo = 2
*/   
       while(ini <= fim){
            msg.innerHTML = `${ini}`
        ini =+ passo
        
       }
       
    }

/*
var a = 5
var b = 12
var c = 2

while(a <= b){
    console.log(a)
    a = c+a
}
*/