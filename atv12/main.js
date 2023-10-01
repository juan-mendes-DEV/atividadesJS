var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var a = document.querySelector(".n1").value;

        a=Number(a);
        aumento=Number(aumento);
        var aumento = (a * (15/100))+a;
        
        res.innerHTML =`O seu salario é ${a}R$ e o acréscimo de 15% foi adicionado no seu salario totalizando um total de ${aumento}R$.
        `+"<br/>";

})

