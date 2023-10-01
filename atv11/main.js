var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var a = document.querySelector(".n1").value;

        a=Number(a);
        desconto=Number(desconto);
        var desconto = a * (5/100);
        
        res.innerHTML =`O valor digitado foi ${a}R$ e o seu desconto recebido e de ${desconto}R$.
        `+"<br/>";

})

