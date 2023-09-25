// document.getElementById("tinh").onclick = function() {
//     var moneyBalance = +document.getElementById("moneyBalance").value;
//     var payment = +document.getElementById("payment").value;

//     if (moneyBalance < payment) {
//         var result = payment - moneyBalance;
//         penalty = (result * 1.5) / 100;
//     }

//     document.getElementById("result").innerHTML = penalty;
// };


document.getElementById("tinh").onclick = function(){

    var moneyBalance = +document.getElementById("moneyBalance").value;

    var payment = +document.getElementById("payment").value;

    var result = payment - moneyBalance;

    if (result>0){
        var penalty = result*0.015;
        document.getElementById("result").innerHTML = penalty;
    
    }
    else{
        document.getElementById("result").innerHTML = "dư";
    
    }



}