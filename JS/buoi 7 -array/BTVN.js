
var arrayNumber = [];
function addNumber(){
    var inputValue = document.querySelector("#number").value;

    if (inputValue.trim() === "") {
        alert("Vui lòng nhập vào 1 số");
        return; 
    }

    var number = +inputValue;

    if (!isNaN(number)){
        arrayNumber.push(number);
        displayArray();
    }else{
        alert("Vui lòng nhập vào 1 số ");
        displayArray();
    }
}

function displayArray(){
    document.querySelector(".resultAddNumber").innerHTML = arrayNumber;
}

//câu 1.
function sum(){

    var sum = 0 ;

    for (var i = 0; i<arrayNumber.length; i++){
        if(arrayNumber[i]>0){
            sum += arrayNumber[i];
    
        }
    
    }
    document.querySelector(".resultSum").innerHTML = sum;
}

//câu 2.
function countPositiveNumber(){
    var positiveNumber = 0;
    var content = "";
    for(var i = 0; i<arrayNumber.length; i++){
        if (arrayNumber[i]>0){
            positiveNumber++;
        }
    }
    if (positiveNumber>0){
        content = "number of positive number " + positiveNumber;
    }else{
        content = "number of positive number " + positiveNumber;
    }

    document.querySelector(".resultCountPositiveNumber").innerHTML = content;
    
}

// câu 3
function findMinNum(){
    var minNum = arrayNumber[0];
    var content = "";

    for(var i = 0; i <arrayNumber.length; i++){
        if (minNum > arrayNumber[i]){
            minNum = arrayNumber[i]
            content = "Min number is " + minNum;
        }
    }
    document.querySelector(".resultFindMinNum").innerHTML = content;
}

// câu 4
function findPositiveMinNum() {
    var positiveMinNum = null;
    var content = false;

    for (var i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] === 0) {
            continue;
        }
        if (arrayNumber[i] > 0) {
            /*cho thêm điều kiện null vì nếu mảng đó chỉ toàn là số âm
        -> điều kiện kiểm tra vẫn đúng tuy nhiên khi xét
        */
            if (positiveMinNum ===null || arrayNumber[i] < positiveMinNum) {
                positiveMinNum = arrayNumber[i];
                content = true;
            }
        }
    }

    if (content) {
        content = "Min positive number: " + positiveMinNum;
    }else{
        content = "No positive numbers found";
    }

    document.querySelector(".resultFindPositiveMinNum").innerHTML = content;
}

//câu 5
function findLastEvenNumber(){
    var lastEvenNumber = null;
    var content = "";
    var returnNum = -1;

    for (var i = 0; i<arrayNumber.length; i++){
        if (arrayNumber[i] >0 && arrayNumber[i] %2 === 0){
            lastEvenNumber = arrayNumber[i];
        }
    } if (lastEvenNumber !==null){
        content = "Last Even Number: " + lastEvenNumber;
    }else{
        content = "Not Even Number and return to: " + returnNum;
    }
    document.querySelector(".resultFindLastEvenNum").innerHTML = content;
}

//câu 6
function swapNumbers(){
    var position1 = +document.querySelector("#position1").value;
    var position2 = +document.querySelector("#position2").value;
    var content = "";

    if (position1 < arrayNumber.length && position2 < arrayNumber.length){
        var temp  = arrayNumber[position1];
        arrayNumber[position1] = arrayNumber[position2];
        arrayNumber[position2] = temp;
        content = "after swapping " + arrayNumber.join(","); 
        displayArray();
    }
    else{
        alert ("position is not correct! ");
    }
points.sort(function(a, b){return a - b});

    document.querySelector(".resultSwapNumbers").innerHTML = content;
}

//câu 7
function sortNumber() {
    if (arrayNumber.length === 0) {
        alert("Please input numbers before sorting.");
        return;
    }

    var content = "Result of sorting numbers: " + arrayNumber.sort(function(a, b){return a - b});
    document.querySelector(".resultSortNumber").innerHTML = content;
}

//câu 8
function checkPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        if (number === 2 || number === 3) {
            return true;
        } else {
            return false;
        }
    }
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function findTheFirstPrimeNumber() {
    var theFirstPrimeNumber = null;

    for (var i = 0; i < arrayNumber.length; i++) {
        if (checkPrimeNumber(arrayNumber[i])) {
            theFirstPrimeNumber = arrayNumber[i];
            break;
        }
    }

    var content = "";

    if (theFirstPrimeNumber !== null) {
        content = "The first prime number is " + theFirstPrimeNumber;
    } else {
        content = "No prime number found in the array.";
    }

    document.querySelector(".resultFindTheFirstPrimeNumber").innerHTML = content;
}


//câu 9
// Câu 9: Đếm số lượng số nguyên trong mảng số thực
function countIntegersInArray(realNumbers) {
    var integerCount = 0;

    for (var i = 0; i < realNumbers.length; i++) {
        if (isInteger(realNumbers[i])) {
            integerCount++;
        }
    }

    return integerCount;
}

// Câu 9: Đếm số lượng số nguyên trong mảng số thực
function countIntegersInArray(realNumbers) {
    var integerCount = 0;

    for (var i = 0; i < realNumbers.length; i++) {
        if (isInteger(realNumbers[i])) {
            integerCount++;
        }
    }

    return integerCount;
}

// Hàm kiểm tra xem một số có phải là số nguyên hay không
function isInteger(number) {
    return typeof number === 'number' && isFinite(number) && Math.floor(number) === number;
}

// Mảng số thực
var realNumbers = [];

function addRealNumber() {
    var inputValue = document.querySelector("#realNumber").value;

    if (inputValue.trim() === "") {
        alert("Vui lòng nhập vào một số thực");
        return; 
    }

    var number = parseFloat(inputValue);

    if (!isNaN(number)){
        realNumbers.push(number);
        displayRealNumbers();
    } else {
        alert("Vui lòng nhập vào một số thực hợp lệ");
        displayRealNumbers();
    }
}

function displayRealNumbers() {
    document.querySelector(".resultAddRealNumber").innerHTML = realNumbers.join(", ");
}

function countAndDisplayIntegers() {
    var integerCount = countIntegersInArray(realNumbers);

    var content = "Số lượng số nguyên trong mảng số thực là: " + integerCount;
    document.querySelector(".resultCountIntegers").innerHTML = content;
}

// Câu 10: So sánh số lượng số dương và số lượng số âm
function comparePositiveAndNegativeNumbers(realNumbers) {
    var positiveCount = 0;
    var negativeCount = 0;

    for (var i = 0; i < realNumbers.length; i++) {
        if (realNumbers[i] > 0) {
            positiveCount++;
        } else if (realNumbers[i] < 0) {
            negativeCount++;
        }
    }

    var content = "Số lượng số dương: " + positiveCount + "<br>Số lượng số âm: " + negativeCount;

    if (positiveCount > negativeCount) {
        content += "<br>Số dương nhiều hơn số âm.";
    } else if (positiveCount < negativeCount) {
        content += "<br>Số âm nhiều hơn số dương.";
    } else {
        content += "<br>Số dương và số âm bằng nhau.";
    }

    document.querySelector(".resultCompareNumbers").innerHTML = content;
}

