var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
    
        n1=Number(n1);
        diasT=Number(diasT);
        total=Number(total);

        var diasT = 8*25;
        var total = n1 * diasT; 



        res.innerHTML =`seu salario esse mes é de : ${total}R$`+"<br/>";

})

