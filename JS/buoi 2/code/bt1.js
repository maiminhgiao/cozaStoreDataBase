function tinhTienTip() {
    var money = +document.getElementById("money").value;
    // ép kiểu về số thì + trước document

    console.log("money" , money);
    
    var percent = +document.getElementById("percent").value;
    console.log("percent" , percent);

    var person = +document.getElementById("person").value;
    console.log("person" , person);

    var result = money*percent/person;
    console.log ("result " , result );

    var showResult = document.getElementById("result");
    showResult.innerHTML =
    ` <p>TIP AMOUNT</p>    
      <p>${result}</p>
      <p>mỗi người</p>  ` ;
}


