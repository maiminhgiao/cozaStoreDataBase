var sinhVien ={
    maSV: "",
    tenSV:"",
    loaiSV:"",
    diemToan:0,
    diemVan:0,

    //method

    tinhDTB: function() {
        var dTB = 0;
        dTB = (this.diemToan + this.diemVan)/2;
        return dTB;

    },
    xepLoai: function() {
        var loaiSV = "";
        var dTB = this.tinhDTB();

        if( 9<=dTB && dTB<=10 ){
            loaiSV = "xuất sắc";
        }
        else if (8<=dTB && dTB<9) {
            loaiSV = "loại giỏi"
        }
        else if (7 <= dTB && dTB <8){
            loaiSV = "loại khá"
        }
        else if (5 < dTB && dTB <7){
            loaiSV = "loại TB"
        }else{
            loaiSV = "yếu"
        }
        return loaiSV;
    },
};
  
    console.log(sinhVien);

    function hienThiThongTin(){
        //xác định input
        sinhVien.maSV = document.querySelector("#txtMaSV").value;
        sinhVien.tenSV = document.querySelector("#txtTenSV").value;
        sinhVien.loaiSV = document.querySelector("#loaiSV").value;
        sinhVien.diemToan=+document.querySelector("#txtDiemToan").value;
        sinhVien.diemVan = +document.querySelector("#txtDiemVan").value;

     

        //gán giá trị từ form lên giao diện

        document.querySelector("#spanMaSV").innerHTML = sinhVien.maSV;
        document.querySelector("#spanTenSV").innerHTML = sinhVien.tenSV;
        document.querySelector("#spanLoaiSV").innerHTML = sinhVien.loaiSV;
        document.querySelector("#spanDTB").innerHTML = sinhVien.tinhDTB();
        document.querySelector("#spanXepLoai").innerHTML = sinhVien.xepLoai();

    }