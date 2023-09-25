// function tinhTienUber(){
//     var loaiXe = document.querySelector('input[name="selector"]:checked').value;
//     console.log("loai xe ", loaiXe);

//     var soKm = +document.getElementById("txt-km").value;
//     console.log("soKm ", soKm);

//     var thoiGianCho = +document.getElementById("thoiGianCho").value;
//     console.log("thoi gian cho ", thoiGianCho);

//     var tongTien;
//     var tienThoiGianCho;

//     if (loaiXe === "uberCar"){
//         var tienKmBanDau = 8000; //dưới 1km
//         var tieKmLucSau = 7500; //từ 1km < soKm  < 19km
//         var tienKmLucCuoi = 7000; //từ 19km trở lên

//         if (0 < soKm && soKm < 1){
//             tongTien = tienKmBanDau;
//         }
//         if (1 <= soKm && soKm < 19){
//             tongTien = tienKmBanDau + (soKm - 1) * tieKmLucSau;
//         }
//         if (soKm >= 19){
//             tongTien = tienKmBanDau + (soKm - 1) * tieKmLucSau + (soKm - 19) * tienKmLucCuoi;
//         }
//     }

//     if (thoiGianCho < 3){
//         tienThoiGianCho = 0;
//     } else {
//         tienThoiGianCho = Math.floor((thoiGianCho - 3) / 3) * 2000;
//     }
    
//     tongTien += tienThoiGianCho;

//     console.log ("tong tien ", tongTien);
// }


//tách hàm

// cách tách hàm

var thongTinLoaiXe = {
    uberCar: {
        tienKmBanDau: 8000,
        tieKmLucSau: 7500,
        tienKmLucCuoi: 7000,
        tienThoiGianCho: 2000,
    },
    uberSUV: {
        tienKmBanDau: 9000,
        tieKmLucSau: 8500,
        tienKmLucCuoi: 8000,
        tienThoiGianCho: 3000,
    },
    uberBlack: {
        tienKmBanDau: 10000,
        tieKmLucSau: 9500,
        tienKmLucCuoi: 9000,
        tienThoiGianCho: 3500,
    }
};

function tinhTienUber() {
    var loaiXe = document.querySelector('input[name="selector"]:checked').value;
    var soKm = +document.getElementById("txt-km").value;
    var thoiGianCho = +document.getElementById("thoiGianCho").value;

    var thongTinXe = thongTinLoaiXe[loaiXe];

    var tienKmBanDau = thongTinXe.tienKmBanDau;
    var tieKmLucSau = thongTinXe.tieKmLucSau;
    var tienKmLucCuoi = thongTinXe.tienKmLucCuoi;

    var tongTien = 0;
    var tienThoiGianCho = 0;

    if (0 < soKm && soKm < 1) {
        tongTien = tienKmBanDau;
    } else if (1 <= soKm && soKm < 19) {
        tongTien = tienKmBanDau + (soKm - 1) * tieKmLucSau;
    } else {
        tongTien = tienKmBanDau + (soKm - 1) * tieKmLucSau + (soKm - 19) * tienKmLucCuoi;
    }

    if (thoiGianCho > 3) {
        tienThoiGianCho = Math.floor((thoiGianCho - 3) / 3) * thongTinXe.tienThoiGianCho;
    }

    tongTien += tienThoiGianCho;

    console.log(tongTien)
    document.getElementById("divThanhTien").style.display = "block";
    document.getElementById("xuatTien").innerHTML = tongTien;


    //sau khi tính tiền xong phải gán thuộc tính cho table

    document.getElementById("txt-loaiXe").innerHTML=loaiXe;
    document.getElementById("txt-soKm").innerHTML=soKm;
    document.getElementById("txt-gia").innerHTML=tienKmBanDau;

    document.getElementById("txt-tongTien").innerHTML = tongTien;
    
}

// //In hóa đơn
  
document.getElementById("inHoaDon").onclick = function(){
  
    //bước 1: là gọi ra hàm tính tiền để lấy giá trị
    tinhTienUber()
    // /*bước 2: vì ko có id nên sẽ dùng querySelector thông qua class để chọn
    // nhưng table phải được nằm ngang hàng với đoạn che đi để in ra chỉ còn table.
    // */
    document.querySelector(".closeForPrintTable").style.display = "none";

    // //bước 3: hiển thị hóa đơn cần in
    document.querySelector(".hoaDon").style.display = "block";
    // document.querySelector(".tableHoaDon").style.display = "block";
    //bước 4: dùng window.print để in
    window.print();
}





