var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;
    
    var alerta = "digite os valores para soma corretamente!!!"
    
    if(n1 >= 1 && n2 >= 1 ){
        
        n1=Number(n1);
        n2=Number(n2);
        
        res.innerHTML ="O valor da soma é: "+(n1+n2)+"<br/>";
    }else alert(alerta)
})
/*
TODO:importante primeiro uso sozinho fun.
!for(var i = 0 ; i<=2; i++){
!    var msg = prompt("digite suas mensagem de boas vindas ")
!    mensagem.innerHTML+=(msg + "<br>")}
*/