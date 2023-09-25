function calculate() {
    var number = +document.getElementById("number").value;
    var countNum = 0;
    var content = "";

    while (number > 1) {
        countNum++;
        number = number / 2;

        // Append content instead of overwriting
        content += `
        <div> count: ${countNum} - number : ${number}</div>`;
    }

    document.getElementById("result").innerHTML = content;
}


function calculateNum(){
    //lấy value thông qua id được nhập vào
    var numberCount = +document.getElementById("numberCount").value;

    var i = 0;
    var sum = 0;
    while (i< numberCount){
        i++;
        sum+=i;
        
    }
    // do{
    //     i ++;
    //     sum += i;
    // }while(i < numberCount);
    document.getElementById("resultCount").innerHTML = "tổng các số " + sum;
}


function printSymbol(){
   var numberSymbol = +document.getElementById("numberSymbol").value;
   
   var symbol = "";

   for(var i = 0; i<numberSymbol;i++){
    symbol += "*";
   }
   document.getElementById("printSymbol").innerHTML = "tổng số * là " + symbol;
}