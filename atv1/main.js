var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var mensagem = document.querySelector(".mensagem").value;
    var res = document.querySelector(".res");
    var msg = `seja bem vindo ao nosso site ${mensagem}!!`;
        res.innerHTML += msg + "<br/>";
    })
/*
TODO:importante primeiro uso sozinho fun.
!for(var i = 0 ; i<=2; i++){
!    var msg = prompt("digite suas mensagem de boas vindas ")
!    mensagem.innerHTML+=(msg + "<br>")}
*/