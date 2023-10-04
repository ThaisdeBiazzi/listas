/* FUNÇÃO COM PARAMETRO

function precos(caneta, lapis) {
    let total= caneta + lapis
    alert("Preço total " +total.toFixed(2)) //casas decimais
} 

precos(1.50, 2.00)
*/



/*FUNÇÃO SEM PARAMETRO

function escreva(){
    alert("Òla!")
}

escreva() 
*/


/*FUNÇÃO COM RETORNO

function multi(a, b) {
    return a * b
}
alert(multi(10, 50))
*/


/*FUNÇÃO ANONIMA

let soma= function (a, b, c) {
    return a + b + c
} 
alert(soma(10, 20, 30))
*/


/* ARROW FUNCTION 

let myFunction = (a, b) => a * b 
alert(myFunction(20, 20))


let nomeLetras = name => name.lenght
alert(nomeLetras('Thais'))



let subtracao = (a, b) => a - b
alert(subtracao(10, 5))

*/

/* EXERCICIOS

function converter(centimetros) {
    return centimetros / 100
}
alert(converter(500))


let conv =(x) => x / 100
alert(conv(parseFloat(prompt("Digite o valor para converter:"))))




let converter=(real) => real *5.62
alert(converter(parseFloat(prompt("Digite os valor em reais:"))))
*/

/*
function valores(a , b){
   if(a > b){
    alert("O maior valor digitado é " +a)
   } else {
    alert("O maior valor digitado é " +b)
   }
}
valores(100, 50)



let temperatura= (grau) => grau -32 / 1.8 
alert(temperatura(parseFloat(prompt("Digite a temperatura em fahrenheit: "))))

*/





