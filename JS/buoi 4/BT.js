//bài 1. Sort number

function sortNumber() {

    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;

    if (num1 === num2 || num2 === num3 || num1 === num3) {
        alert("num1, num2, and num3 must be different");
    };

    var num = [num1, num2, num3];

    num.sort(function (a, b) {
        return a - b;
    });

    var sortNumbers = num.join(", ");
    document.getElementById("resultSort").innerHTML = "Result:" + sortNumbers;

}

// bài 2

function greetingsFamily() {

    var member = document.getElementById("member").value.toLowerCase();
    var greeting = "";
    switch (member) {
        case "d":
            greeting = "hello daddy!"
            break;
        case "m":
            greeting = "hello momny!"
            break;
        case "b":
            greeting = "hello bro!"
            break;
        case "s":
            greeting = "hello sister!"
            break;
        default:
            greeting = "who are you!?"
            break;
    }
    document.getElementById("resultGreetings").innerHTML = greeting;
}

//bài 3. Even Odd number

function evenOddNumber() {
    var numa = +document.getElementById("numa").value;
    var numb = +document.getElementById("numb").value;
    var numc = +document.getElementById("numc").value;

    if (isNaN(numa) || isNaN(numb) || isNaN(numc)) {
        alert("Please input valid numbers");
        return;
    }

    if (numa === "" || numb === "" || numc === "") {
        alert("Please enter all three numbers");
        return;
    }

    var resultCheck = "";

    if (numa % 2 === 0) {
        resultCheck += numa + " is even number<br>";
    } else {
        resultCheck += numa + " is odd number<br>";
    }

    if (numb % 2 === 0) {
        resultCheck += numb + " is even number<br>";
    } else {
        resultCheck += numb + " is odd number<br>";
    }

    if (numc % 2 === 0) {
        resultCheck += numc + " is even number<br>";
    } else {
        resultCheck += numc + " is odd number<br>";
    }

    document.getElementById("resultCheck").innerHTML = resultCheck;
}

//bài 4 Check Whether a Triangle

function checkWhetherATrianle() {
    var length1 = +document.getElementById("length1").value;
    var length2 = +document.getElementById("length2").value;
    var length3 = +document.getElementById("length3").value;

    if (isNaN(length1) || isNaN(length2) || isNaN(length3)) {
        alert("Please input valid numbers");
        return;
    }

    if (length1 === "" || length2 === "" || length3 === "") {
        alert("Please enter all three length of triangle");
        return;
    }

    var resultCheck = "";
    if (length1 == length2  || length1 == length3 || length2 == length3){
        resultCheck = "Isosceles Triangle";
    }

    else if (length1 == length2  && length1 == length3){
        resultCheck = "Equilateral Triangle"
    }

    else if (Math.pow(length1,2)+Math.pow(length2,2) == Math.pow(length3,2)||
    Math.pow(length1,2)+Math.pow(length3,2) == Math.pow(length2,2) 
    ||Math.pow(length2,2)+Math.pow(length3,2) == Math.pow(length1,2)){
        resultCheck = "Right Triangle"
    }
    else if (length1 < length2 + length3 || length2 < length1 + length3 || length3 < length1 + length2){
        resultCheck = "This is not Triangle"
    }
    else {
        resultCheck = "Another";
    }
    document.getElementById("resultCheckLength").innerHTML = resultCheck;
}
