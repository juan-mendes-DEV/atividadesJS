var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;
    var n3 = document.querySelector(".n3").value;
    var n4 = document.querySelector(".n4").value;

        n1=Number(n1);
        n2=Number(n2);
        n3=Number(n3);
        n4=Number(n4);
        n5r=((n1+n2+n3+n4)/4).toFixed(2);

    if(n5r<=3){
        res.innerHTML ="O valor da soma é: " + n5r + "voce foi reprovado"+ "<br/>";
    }
    else if(n5r >=4 || n5r<=5 || n5r<=6){
        res.innerHTML ="O valor da soma é: "+ n5r + "voce esta de recuperação"+"<br/>";
    }
    else if(n5r>=7){
        res.innerHTML ="O valor da soma é: "+ n5r + " voce foi aprovado"+"<br/>";
    }
})

