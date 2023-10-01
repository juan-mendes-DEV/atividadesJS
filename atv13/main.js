var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n1").value;

        n1=Number(n1);
        n2=Number(n2);

        var diaP = n1 * 90;
        var kmR = n2 * 0.20;
        
        res.innerHTML =`  a quantidade de quilometros rodados foi de ${n1}
        , e a quantidade de dias alugado foi de ${n2}, totalizando num total de 
        ${diaP}R$ pelos dias alugados e ${kmR}R$ pelos quilometros rodados
        `+"<br/>";

})

