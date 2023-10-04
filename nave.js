
/*let contador= 1

while(contador <= 1000){
    alert(contador)
    console.log(contador)
    contador ++
}
*/





let velocidade= 0
let nave= prompt("Seja bem vindo, digite o nome da nave: ")
let opcao= true

while(opcao){
    let menu= prompt("1 - Acelerar a nave em 5km \n 2 - Desacelerar em 5Km \n 3 - Imprimir dados \n 4 - Sair ")

    if(menu == 1){
        acelerar()
    } else if(menu == 2){
        desacelerar()
    } else if(menu == 3){
        dados() 
    } else if(menu == 4){
        alert("Obrigado(a) por viajar conosco!")
        opcao = false 
    } else {
        alert("Opção inválida")
    }
} 

function acelerar(){
    velocidade += 5
    /*Velocidade + 5*/
    return alert(velocidade)
}

function desacelerar(){
    if(velocidade <= 0){
        alert("A nave já está parada!")
   } else {
    velocidade -= 5
   }
   return alert(velocidade)
}

function dados(){
    return alert("O nome da nave é " +nave+ " E a velocidade atual é " +velocidade)
}


