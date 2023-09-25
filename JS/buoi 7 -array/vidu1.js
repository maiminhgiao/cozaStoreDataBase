//CRUD  = create - read - update - delete

var array = ["Giao", "Minh", "Mai"];

console.log(array[1]);

//Update
array[1] = "Mai";
console.log(array[1]);

//thêm phần tử vào mảng
array.push("Le");
console.log(array);

//lấy phần tử cuối cùng trong mảng
console.log("arraypop " + array.pop());

//lấy phần tử đầu trong mảng .shift

//kết quả của unshift sẽ ra 1 số, in ra mới ra dc số phần tử

var arrUnshift = array.unshift("nguyen van a");
console.log("arrUnshift ", arrUnshift);
console.log("arrayNew ", array);


var indexOfName = array.indexOf("Mai");
console.log("indexOfName", indexOfName);
console.log("indexOf", array.indexOf("Mai", 2));

///---------------------------------------------///


var arrayNumber = [1, 2, 41, 21, 50, 92];
document.querySelector(".arrayList").innerHTML = arrayNumber;

function addNum() {

    var number = document.querySelector(".number").value;
    arrayNumber.push(number);

    document.querySelector(".arrayList").innerHTML = arrayNumber;
}

function numberCheckDelete(){

    var numberCheckDelete = +document.querySelector(".numberCheckDelete").value;
    
    var found = -1
    for(var i = 0; i<arrayNumber.length; i++){
        if(arrayNumber[i] == numberCheckDelete){
            arrayNumber.splice(i, 1);
            found = i;
            break;
        }
    }
    if (found !== -1) {
        arrayNumber.splice(found, 1);
        alert("Number " + numberCheckDelete + " was successfully removed");
    } else {
        alert("Not found " + numberCheckDelete + " in the array");
    }
    document.querySelector(".arrayList").innerHTML = arrayNumber;

}


function findMinMax(){

    var numberCheck = +document.querySelector(".findMinMax").value;
   var max;
    var notify; 

    // for(var i =0 ; i<arrayNumber.length; i++){
    //     if (numberCheck >= arrayNumber[i]){
    //         max = numberCheck;
    //         notify = numberCheck + " is the max number";
    //     break;
    //     }
    // }
    if (numberCheck > Math.max(...arrayNumber)){
        max = numberCheck;
        notify = numberCheck + " is the max number";
    }
    else {
            notify = numberCheck + " is not max number";
    }
    document.querySelector(".resultCheck").innerHTML = notify;


}







