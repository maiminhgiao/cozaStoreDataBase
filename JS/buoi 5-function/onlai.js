

// document.getElementById("createElement").onclick= function(){
//     var element = document.createElement("div");
//     //bước 1:  cách tạo ra  1 thẻ div

//     //bước 2: tạo nội dung cho thẻ mới được tạo
//     element.innerHTML= "new created tag";

//     //bước 3: tạo kích thước, màu sắc
//     element.style.fontSize = "30px";
//     element.style.color = "blue";
//     /*
//     bước 3: in thẻ đó vào nơi mình muốn
//     appendChild Dùng để thêm (bổ sung) vào vị trí cuối cùng 
//     của đối tượng một thẻ HTML nào đó.
//     */

//     document.getElementById("printDiv").appendChild(element);
// }

//tạo 1 hàm khác có tính tái sử dụng

function createElementHTML(elementName,content, fontSize, color, idAppend){
    var element = document.createElement(elementName);
    element.innerHTML = content;
    element.style.fontSize = fontSize;
    element.style.color = color;
    document.getElementById(idAppend).appendChild(element);
}

document.getElementById("createElement").onclick = 
function (){
    createElementHTML("div", "đây là thẻ mới tạo", "30px", "green", "printDiv");}