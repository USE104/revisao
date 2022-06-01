let nome = prompt("Olá, seja Bem-vindo a Calculadora Simple \n Digite seu nome")

let n1 = prompt (nome+ " Digite um numero")
let n2 = prompt(nome+ " Digite outro numero")
alert (nome+" ATENÇÃO DIGITE \n 1 = SOMA \n 2 = SUBTRAIR \n 3 = DIVIDIR \n 4 = MULTIPLICAR ")
let codigo=parseInt(prompt(nome+" Digite opção de operação a ser feita com os números digitados "))



switch(codigo){
    case 1:
        somar = parseInt (n1)+ parseInt(n2)
        alert(" O resultado da soma é " +somar)
        break
    
     case 2:
        subtrair = parseInt (n1) - parseInt(n2)    
        alert(" O Resultado da subtração é " +subtrair)
        break

    case 3:  
        dividir = parseInt (n1) / parseInt (n2)
        alert(" O Resultado da divisão  é " + dividir)
        break

    case 4: 
        multiplicar = parseInt (n1) * parseInt(n2)
       alert("O Resultado da multiplicação é " + multiplicar)              
        break

    default:
        alert("Opção invalida")

    }       
