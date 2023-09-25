//while loop

// function printNum() {
//     var number = +document.getElementById("number").value;
//     var content = "";

//     if (number % 2 == 0 && number < 100) {
//         while (number < 100) {
//             content += `${number} <br>`;
//             number += 2;
//         }
//     } else {
//         content = "Số không hợp lệ!";
//     }

//     document.getElementById("printNum").innerHTML = content;
// }

//for loop

function printNum(){
    var number = +document.getElementById("number").value;
    var content = "";

    if(number % 2 == 0 && number <100 ){
        for ( var i = number; i<100; i+=2 ){
            content += `${i}\n`;
        }
    }else{
        content = "số này là số lẻ mà";
    }
    document.getElementById("printNum").innerHTML = content;
}

