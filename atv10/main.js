var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var a = document.querySelector(".n1").value;
    var b = document.querySelector(".n2").value;
    var c = document.querySelector(".n3").value;

        a=Number(a);
        b=Number(b);
        c=Number(c);
        
        var delta = (b**2)-(4*a*c)
        var raizQuadrada = Math.sqrt(delta);
        var x1 = ((-b + raizQuadrada) / (2 * a)).toFixed(2);
        var x2 = ((-b - raizQuadrada) / (2 * a)).toFixed(2);
        var solucao = `S={${x1} e ${x2}}`;
        
        
        res.innerHTML =`O valor de delta é ${delta}
        e o valor da primeira resposta com "+" é ${x1},
        e o ultimo valor com "-" é ${x2} portanto a solução é
        ${solucao}
        
        `+"<br/>";

})

