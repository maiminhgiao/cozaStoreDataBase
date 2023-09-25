var test = document.getElementById("test");

console.log("test ", test);

//thay đổi nội dung trong cặp thẻ html
test.innerHTML = "chưa ăn nè!";

//cách 2
test.innerText = "rồi nè!";

var name = document.getElementById("name").value;
console.log("name", name);


var answer = document.getElementById("answer");
answer.innerHTML = "bài gì mà học";

answer.style.fontSize = "50px";
answer.style.color = "red";


// vd1
var den = document.getElementById("den");

function batDen() {

    den.src = "/JS/buoi 2/pic/pic_bulbon.gif";
}

function tatDen() {
    den.src = "/JS/buoi 2/pic/pic_bulboff.gif";
}


/////--------------------------/////
// vd2



document.getElementById("login").addEventListener("click", function () {

    var user = document.getElementById("user").value;

    var password = document.getElementById("password").value;
    console.log("ok");

    var result = document.getElementById("result");

    //cách 1
    //result.innerHTML = "user: " + user + "password: " + password;
    // inlineText nó sẽ in ra tất cả kể cả thẻ p
    //cách 2

    result.innerHTML = 
    `
        <p> user: ${user} </p>
        <p> password: ${password} </p>
    `;
    
})