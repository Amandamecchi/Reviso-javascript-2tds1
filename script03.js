// Se a altura da pessoa for maior ou igual a altura mínima: Permitido, se não: Não Permitido. 
//let alturaPessoa = 1.70;
//let alturaMinima = 1.40;
//let alturaMaxima = 2.01;

//if (alturaPessoa >= alturaMinima && alturaPessoa < alturaMaxima){
 //console.log("Permitido!");
//} else {
// console.log("Não Permitido!");
//}

//Atividade 2

//let quantidadedeIngresos = 9;

//let batatasPromocao = 0;

//let nome = "Amanda";

//for (let i = 1; i <= quantidadedeIngresos; i++) {
    //if (i % 3 === 0){
    //    batatasPromocao++;
   // }
//}

//console.log(
  //  "UOU! "  +  nome + " voce ganhou "  +  batatasPromocao  +  " batatas da promoção "
//);




//Atividade 3


//let idadeMinima = 7;
//let idadeAluno = 7;
//let sala1 = 7;
//let sala2 = 14;

//if (idadeAluno >= idadeMinima)
   
   // console.log ("Matrícula realizada com sucesso");

//else {
   // console.log ("Você ainda não pode ser matriculado");
//}
//if (idadeAluno >= 10);
//console.log ("Você está matriculado na sala 1");

//do {

//} while (idadeAluno >= 7); if (idadeAluno <= 14); {
    
   // console.log (" Você está matriculado na sala 2");
//} 
    
//Atividade 4

//let quantidadeDePalmas = 10; 

//for (let i = 1; i <= quantidadeDePalmas; i++) {
    //console.log ("👏");
    //Validação |(if)
   // if (i % 5 === 0){
    //    console.log ("🎉");
//}
//}



let paes = ["Pão Australiano", "Pão Brioche🍔", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburguer = [];

hamburguer.push(paes[1]);
hamburguer.push(molhos[0]);
hamburguer.push(saladas[1]);
hamburguer.push(carnes[1]);
hamburguer.push(queijos[2]);

for (let i = 0; i < hamburguer.length; i++){ //primeiro passo do for é o "i"
    console.log(hamburguer[i]);
} 
