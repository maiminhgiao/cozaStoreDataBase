// //tạo 1 mảng vì để lưu trữ các sinhvien khác vào
// var students = [];



//vì hàm .querySelector giống nhau nên có thể tách hàm ra cho dễ

function getElement(selector) {
    return document.querySelector(selector);

}

function themSV() {

    // var maSV = document.querySelector("#txtMaSV").value;
    // var tenSV = document.querySelector("#txtTenSV").value;
    // var email = document.querySelector("#txtEmail").value;
    // var matKhau = document.querySelector("#txtPass").value;
    // var ngaySinh = document.querySelector ("#txtNgaySinh").value;
    // var khoaHoc = document.querySelector("#khSV").value;
    // var diemToan = +document.querySelector ("#txtDiemToan").value;
    // var diemLy = +document.querySelector("#txtDiemLy").value;
    // var diemHoa = +document.querySelector("#txtDiemHoa").value;

    //vì ở trên có gọi hàm rồi nên dưới gọi ra sử dụng thôi

    var maSV = getElement("#txtMaSV").value;
    var tenSV = getElement("#txtTenSV").value;
    var email = getElement("#txtEmail").value;
    var matKhau = getElement("#txtPass").value;
    var ngaySinh = getElement("#khSV").value;
    var khoaHoc = getElement("#txtEmail").value;
    var diemToan = +getElement("#txtDiemToan").value;
    var diemLy = +getElement("#txtDiemLy").value;
    var diemHoa = +getElement("#txtDiemHoa").value;

    var sinhVien = new SinhVien(
        maSV,
        tenSV,
        email,
        matKhau,
        ngaySinh,
        khoaHoc,
        diemToan,
        diemLy,
        diemHoa
    );

    //test in dc k   console.log("sv: " , sinhVien)

    students.push(sinhVien);
    //test in dc k   console.log(students);
    
    //tạo 1 chuỗi rỗng để khai báo và sau đó lấy giá trị

    var htmlString = "";

    for (var i = 0; i < students.length; i++) {

        var sinhVienData = students[i];
     //cách 1:   
        // htmlString ="<tr>";
        // htmlString += "<td>" + sinhVienData.maSV +"</td>";
        // htmlString += "<td>" + sinhVienData.tenSV +"</td>";
        // htmlString += "<td>" + sinhVienData.email +"</td>";
        // htmlString += "<td>" + sinhVienData.ngaySinh +"</td>";
        // htmlString += "<td>" + sinhVienData.khoaHoc +"</td>";
        // htmlString += "<td>" + sinhVienData.tinhDiemTB() +"</td>"
        // htmlString += "<td>" + "<button class = 'btn btn-warning'>Edit</button>"+  
        // "<button class = 'btn btn-danger'>Delete</button>"+"</td>";
   
        
    //cách 2: nên làm

    htmlString += `
    <tr>
    <td>${sinhVienData.maSV}</td>
    <td>${sinhVienData.tenSV}</td>
    <td>${sinhVienData.email}</td>
    <td>${sinhVienData.ngaySinh}</td>
    <td>${sinhVienData.khoaHoc}</td>
    <td>${sinhVienData.tinhDiemTB()}</td>
    <td>
    <button class = 'btn btn-warning'>Edit</button>
    <button class = 'btn btn-danger'>Delete</button>
    </td>

    
    
    
    
    
    </tr>`
   
   
   
   
   
   
   
    }
    getElement("#tbodySinhVien").innerHTML = htmlString; 
    console.log("htmlString ", htmlString)
}