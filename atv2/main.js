var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var nome = document.querySelector(".mensagem").value;
    var alerta = "digite seus dados corretamente"
    var salario = document.querySelector(".number").value;
    
    

    if(salario >= 100 ){
        var msg = `${nome} seu salario por mes é: ${salario}`;
            res.innerHTML += msg + "<br/>";
    }else alert(alerta)
})
/*
TODO:importante primeiro uso sozinho fun.
!for(var i = 0 ; i<=2; i++){
!    var msg = prompt("digite suas mensagem de boas vindas ")
!    mensagem.innerHTML+=(msg + "<br>")}
*/