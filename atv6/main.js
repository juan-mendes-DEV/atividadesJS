var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
        n1=Number(n1);
        var dobro = n1 * 2 ;
        var tercaP = (n1 / 3).toFixed(2);
        res.innerHTML =`o numero digitado foi ${n1} e o dobro é ${dobro} e a terça parte é ${tercaP}.`+"<br/>";

})

