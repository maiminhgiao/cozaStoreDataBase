// bài 1
function salaryPerDay(){

    var salary_per_day = +document.getElementById("salary_per_day").value;

    var work_day = +document.getElementById("work_day").value;

    var result = salary_per_day*work_day;

    var showResult = document.getElementById("result");

    showResult.innerHTML = 
    `<p style="color: red; font-weight: bold;">${result} $</p>`;  
}


//bài 2

function calAverage(){

    var num1 = +document.getElementById("num1").value;
    var num2 = +document.getElementById("num2").value;
    var num3 = +document.getElementById("num3").value;
    var num4 = +document.getElementById("num4").value;
    var num5 = +document.getElementById("num5").value;

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        alert("Giá trị nhập chỉ có thể là số");
        return;
    }
    var averageValue = (num1+num2+num3+num4+num5)/5;
    var showResult2 = document.getElementById("result2");

    showResult2.innerHTML = 
    `<p style="color: blue; font-weight: bold;">${averageValue} </p>`
}

// bài 3


function quyDoiTien(){
    var so_tien_can_quy_doi = +document.getElementById("so_tien_can_quy_doi").value;
    const tyGia = 23500;

    if (isNaN(so_tien_can_quy_doi)){
        alert("Chỉ được nhập số");
        return;
    }

    var quyDoi = so_tien_can_quy_doi * tyGia;
    var showQuyDoi = document.getElementById("ket_qua_quy_doi");

    showQuyDoi.value = quyDoi;
}


// bài 4

function tinhDienTich(){
    var chieu_dai = +document.getElementById("chieu_dai").value;
    var chieu_rong = +document.getElementById("chieu_rong").value;

    if (isNaN(chieu_dai) || isNaN(chieu_rong)){
        alert("Chỉ được nhập số");
        return;
    }

    var dienTich = chieu_dai*chieu_rong;

    var showDienTich = document.getElementById("ket_qua_dien_tich");

    showDienTich.value = dienTich;
}

function tinhChuVi() {
    var chieu_dai = +document.getElementById("chieu_dai").value;
    var chieu_rong = +document.getElementById("chieu_rong").value;

    if (isNaN(chieu_dai) || isNaN(chieu_rong)) {
        alert("Chỉ được nhập số");
        return;
    }

    var chuVi = (chieu_dai + chieu_rong)*2;

    var showChuVi = document.getElementById("ket_qua_chu_vi");

    showChuVi.value = chuVi;
}

// bài 5

function tinhTong() {
    var so_can_tinh = +document.getElementById("so_can_tinh").value;

    if (isNaN(so_can_tinh)) {
        alert("Chỉ được nhập số");
        return;
    }

    if (so_can_tinh <10) {
        alert("Vui lòng nhập số nguyên dương và phải >9");
        return;
    }

    var sum = 0;
    var numStr = so_can_tinh.toString(); // Chuyển số thành chuỗi
        
    for (var i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }

    var showTong = document.getElementById("ket_qua_tong");

    showTong.value = sum;
}


