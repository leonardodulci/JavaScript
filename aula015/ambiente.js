
let num = [4, 9, 6, 7]

num.push(8)
num.sort()

console.log(num)
console.log(`os vetores são ${num}`)
console.log(`e o nosso vetor tem ${num.length} posições`)

let pos = num.indexOf(4)

if(pos == -1){
    console.log('O valor não foi encontrado!!')
}else {
    console.log(`o valor está na posição ${pos}`)
}
