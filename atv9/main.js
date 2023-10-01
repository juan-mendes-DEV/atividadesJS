var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
    var n2 = document.querySelector(".n2").value;
        n1=Number(n1);
        n2=Number(n2);
    var area = (n1*n2).toFixed(2);
    var tinta = area/2;
        res.innerHTML =`a largura é ${n1}, e a
        altura é ${n2}, a area dessa parede é ${area},
        e a quantidade de tinta em litros a ser usada é ${tinta}`+"<br/>";

})

