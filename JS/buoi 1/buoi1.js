console.log("hello world");
// debug xong phải xóa console.log đi

// khai báo biến
var numPerson = 2;

var age ="10";
// typeof: kiểm tra kiểu dữ liệu

console.log(typeof age);

// vì trong js chỉ có + chuỗi nên

var plus = numPerson + age;

console.log("plus =" + plus );
// ở trước là num + chuỗi -> 210

// muốn ép kiểu từ chuỗi -> số ta nhân cho 1 ví dụ

var plus2 = numPerson + age*1;
console.log("plus2= " + plus2);

// hoặc dùng partin

var plus3 = numPerson + parseInt(age);
console.log("plus3= " + plus3);

var a = 13;
var b = 2;
var result = a%b; //chia lấy phần dư

console.log("result = " + result);

// tính chiều dài cạnh huyền tam giác vuông

var canhGocVuong1 = 3;
var canhGocVuong2 = 4;
var canhHuyen = Math.sqrt(Math.pow(canhGocVuong1,2)+Math.pow(canhGocVuong2,2));
console.log("cạnh huyền = " + canhHuyen);

var num1 = 4;

var num2 = 7;


var num3 = num1++ + --num2;
console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);


var a = 10;
a += 1;
console.log(a);


