
/*Cách ử dụng sự kiện click
    1. Gắn onclick vào trong thẻ html
    2. gọi sự kiện addEventListener
    3. dom tới thẻ muốn gọi và .onclick  = function */





// cách để xử lý button
document.getElementById("createElement").onclick = 
function (){

    var btn = document.createElement("button");
    btn.innerHTML = "thẻ này vừa mới được tạo";

   document.getElementById("result").appendChild(btn);
// createElement 
//Dùng để thêm (bổ sung) vào vị trí cuối cùng của đối tượng một thẻ HTML nào đó.
}

