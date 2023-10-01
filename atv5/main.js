var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
        n1=Number(n1);
        var ant = n1 - 1;
        var sucess = n1 + 1;
        res.innerHTML =`o numero digitado foi ${n1} e o antecessor do numero digitado foi ${ant} e o sucessor é ${sucess}.`+"<br/>";

})

