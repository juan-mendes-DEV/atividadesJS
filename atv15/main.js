var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;//anos
    var n2 = document.querySelector(".n2").value;//cigarros

        n1=Number(n1);
        n2=Number(n2);
        minP=Number(minP);
        hora=Number(hora);
        horaD=Number(horaD);
        ano=Number(ano);

        var minP = 10;
        var hora = 60;
        var horaD = 24;
        var ano = 365;
        
        var totalM = n2 * minP; 
        var totalD = (n1 * ano);
        var vezesM = (((totalD * totalM)/hora)/horaD).toFixed(2);
        

        res.innerHTML =`voce fuma cerca de ${n2} cigarros por dia
        a cerca de ${n1} anos e voce ja perdeu cerca de ${vezesM} dias 
        da sua vida `+"<br/>";

})

