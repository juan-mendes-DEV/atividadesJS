var btn = document.getElementById("btn")


btn.addEventListener("click", function(){
    var res = document.querySelector(".res");
    var n1 = document.querySelector(".n1").value;
        n1=Number(n1);
        var dolares = 5.03;
        var dolaresR = n1*dolares;
        res.innerHTML =`O valor digitado foi 
        ${n1} em Dólares da ${dolaresR}`+"<br/>";

})

