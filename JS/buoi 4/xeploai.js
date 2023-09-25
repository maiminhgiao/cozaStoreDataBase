function xepLoai() {

    var hoVaTen = document.getElementById("hoVaTen").value;
    var diemToan = +document.getElementById("diemToan").value;
    var diemLy = +document.getElementById("diemLy").value;
    var diemHoa = +document.getElementById("diemHoa").value;

    var diemTB = (diemToan + diemLy + diemHoa) / 3;

    if (isNaN(diemToan) || isNaN(diemLy) || isNaN(diemHoa)) {
        alert("Vui lòng nhập đúng số điểm");
        return;
    }

    var xepLoai = "";
    if (diemTB >= 8.5) {
        xepLoai = "Xếp loại: Giỏi";
    } else if (6.5 <= diemTB && diemTB < 8.5) {
        xepLoai = "Xếp loại: Khá";
    } else if (5 <= diemTB && diemTB < 6.5) {
        xepLoai = "Xếp loại: Trung bình";
    } else {
        xepLoai = "Xếp loại: Yếu";
    }

    var thongTin = "Họ và tên: " + hoVaTen + "<br>"
    + "Điểm trung bình: " + diemTB.toFixed(1) + "<br>"
     + xepLoai;

    document.getElementById("ketQua").innerHTML = thongTin;

// muốn in ra nhiều dòng trong HTML thì nên dùng innerHTML

}
