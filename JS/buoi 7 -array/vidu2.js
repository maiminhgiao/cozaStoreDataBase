var arrayNumber = []; 
function addNumber() {
    var numberAdd = +document.querySelector(".numberAdd").value;

    arrayNumber.push(numberAdd); // Thêm số vào mảng

    displayArray(); // Hiển thị mảng
}

function displayArray() {
    /*
    chỉ cần khai báo cái này nằm ngoài hàm trên là dc
    lí do: vì khi để trong nó chỉ tạo ra 1 array rỗng thôi
    */

    document.querySelector(".resultAddNumber").innerHTML = arrayNumber;

    
}
