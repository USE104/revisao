let nome = prompt ("Qual seu nome ?")
let n1 = prompt (nome+" Digite um número para A")
let n2 = prompt (nome+" Digite um número para B")


alert (nome+" Lembre-se A é igual "+n1+" B é igual a " +n2)

var x;
var r=confirm (nome+" Está pronto para a mágica");
if (r==true){

  x= nome+ " você pressionou OK!";
  alert (nome+ " Obrigado, pode avançar veja ela")
  }else{
  x=" você pressionou Cancelar!";
    alert (nome+" Tudo bem,entendemos sua decisão.Mas, isso impede de continuar")
  }

  let n3 = n1
  n1 = n2
  n2 = n3

  alert(nome+` Se invertemos os valores de A e B teremos A:${n1} e B:${n2}`)