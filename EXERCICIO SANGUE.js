alert ("Bem-vindo ao Sangue para todos");
let nome = prompt("Digite seu nome");
let idade = prompt(nome+ " Digite sua idade")
let peso = prompt(nome+ " Digite seu peso");

if(idade >=18 && peso >50){
 alert (nome+ " Você tem idade permitida para doar,aguarde ser chamado")
}else{
 alert(nome+ " Você não tem idade e peso para fazer a doação")
}


