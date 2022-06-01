let nome = prompt ("Qual seu nome")
var x;
var r=confirm (nome+" Nosso site coleta alguns dados seu você aceita compartilhar com conosco ?");
if (r==true){

  x= nome+" você pressionou OK!";
  alert (nome+" Obrigado, pode avançar")
  }else{
  x=" você pressionou Cancelar!";
    alert (nome+" Tudo bem,entendemos sua decisão.Porém a página não será carregada")
  }
let n1   = prompt (nome+" Digite um número")


let triplo = parseInt(n1)*3
let dobro = parseInt(n1)*2

alert (" O triplo do seu número é " +triplo+ " e o dobro é " +dobro) 
