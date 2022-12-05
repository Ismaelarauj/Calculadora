function Limpar(id1,id2){
    document.getElementById(id1).value="";
    document.getElementById(id2).value="";
}
function Calcular(numero1, numero2,operacao,saida) {
    var num1 = document.getElementById(numero1).value;
    var num2 = document.getElementById(numero2).value;
    var operador = document.getElementById(operacao).options[document.getElementById(operacao).selectedIndex].value;
    var expre = num1 + operador + num2;
    resultado = eval(expre);
    switch(operador){
        case "+":
            const resp =document.querySelector("p");
            resp.innerText ='A soma de '+ num1 + ' e ' + num2 + ' é ' + resultado
           break
        case "-":
            const resp1 =document.querySelector("p");
            resp1.innerText ='A diferença entre '+ num1 + ' e ' + num2 + ' é ' + resultado
           break
        case "*":
            const resp2 =document.querySelector("p");
            resp2.innerText ='O produto  '+ num1 + ' por ' + num2 + ' é ' + resultado
            break
        case "/":
            const resp3 =document.querySelector("p");
            resp3.innerText ='O quociente de '+ num1 + '  dividido por ' + num2 + ' é ' + resultado
            break
    }
    
}