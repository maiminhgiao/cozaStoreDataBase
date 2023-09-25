//nơi khai báo biến hoặc hàm
function SinhVien(
//truyền tham số đầu vào
_maSV, 
_tenSV,
_email,
_matKhau,
_ngaySinh,
_khoaHoc,
_diemToan,
_diemLy,
_diemHoa)

{
    this.maSV = _maSV;
    this.tenSV = _tenSV;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngaySinh = _ngaySinh;
    this.khoaHoc = _khoaHoc;
    this.diemToan  = _diemToan;
    this.diemLy = _diemLy;
    this.diemHoa = _diemHoa;

    //method
    this.tinhDiemTB = function() {
        var diemTB = 0;
        average = ((this.diemToan + this.diemLy + this.diemHoa) /3).toFixed(1);
        return average;
    };
}