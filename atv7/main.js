var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
        n1=Number(n1);
        var km = (n1 / 1000) ;
        var hm = (n1 / 100) ;
        var dam = (n1 / 10) ;
        var dm = (n1 * 10) ;
        var cm = (n1 * 100) ;
        var mm = (n1 * 1000) ;
        res.innerHTML =`O numero digitado em metros foi 
        ${n1} em quilômetros é ${km}, em hectômetros, ${hm}, 
        em decâmetros é ${dam}, em decímetros é ${dm}, 
        em centímetros é ${cm}, em milímetros é ${mm}`+"<br/>";

})

