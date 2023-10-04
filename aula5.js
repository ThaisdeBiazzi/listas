/*
let nomes = ["Matheus", "Ana", "João", "Cleber"]
console.log(nomes)
console.log("Tamanho do array: " +nomes.length)
console.log(nomes[1])

let listaCompras = ["Amaciante", "Farinha de trigo", "Pão de queijo", 7, true]
console.log(listaCompras)
console.log(listaCompras[2])*/

/*
let listaDeNomes = ["Mario", "Ricado", "Amanda", "Luiza"]

for(contador=0 ; contador < listaDeNomes.length; contador++){
    let mensagem = ("Boas vindas " +listaDeNomes[contador])
    console.log(mensagem)
}
*/

/*
let listaDeAprovados = [
    'Viviane',
    'Matheus',
    'Thiago',
    'Thais',
    'Letícia'
]

const enviarEmail = (nome) => {
    console.log("Bem vindo " +nome+ " você foi aprovado!")
}

listaDeAprovados.forEach((item) => {
    enviarEmail(item)
})
*/


/*

let filmes = ["Os Incrivéis", "O senhor dos anéis", "Xuxa e os trapalhões", "Procurando nemo" ]

/*filmes.push("Harry Potter")*///ADICIONAR

/*filmes.pop()*/// REMOVER ULTIMO ELEMENTO

/*filmes.shift()*/ // REMOVE O PRIMEIRO ELEMENTO

/*filmes.unshift("Velozes e Furiosos")*/ //ADICIONA O ELEMENTO NO INICIO DA LISTA

/*console.log(filmes.indexOf("O senhor do anéis"))

console.log(filmes)
*/

/*
const nums = [14, 9, 32, 50, 100, 120]

let resultado = nums.map(function(valor){
    return valor + 2
})

console.log(resultado)
*/

/*
let lista =[45,9,16,25]

let lista2 = []

lista2 = lista.filter(function(item){
    if(item < 20){
        return true
    } else {
        return false
    }
})

console.log(lista2)
*/

/*
const produtos = [
    {Nome: "Ipod", preco:200, fragil: true},
    {Nome: "Celular", preco:1500, fragil:false},
    {Nome: "Televisão", preco:4000, fragil:false},
    {Nome: "Notebook", preco:8000, fragil:false}
]

console.log(produtos.filter(function(p){
    if(p.preco > 2000 && p.fragil == false){
        return p
    }
}))
*/

/*
let nomes = [
    {Nome:"Ana Paula", idade:15, sexo:'Feminino'},
    {Nome:"Carlos", idade:17, sexo:'Masculino'},
    {Nome:"Cristiano", idade:14, sexo:'Masculino'},
    {Nome:"Aline", idade:13, sexo:'Feminino'},
    {Nome:"Pedro", idade:15, sexo:'Masculino'},
    {Nome:"Sofia", idade:12, sexo:'Feminino'},
    {Nome:"Paloma", idade:16, sexo:'Feminino'},
]

console.log(nomes.filter(function(n){
    if(n.idade >= 15 && n.idade <= 17){
        return n
    }
}))
*/

let numeros= [12,34,22,46,18,29,44,43,39]
let num2 = []

num2 = numeros.filter(function(n){
    if(n >= 18){
        return true
    } else{
        return false
    }
})

console.log(num2)