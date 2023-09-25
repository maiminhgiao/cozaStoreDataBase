function checkNamNhuan(nam) {
  return (nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0;
}

function checkDieuKien(nam, thang, ngay) {
  const ngayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (ngay < 1 || ngay > ngayTrongThang[thang - 1]) {
    return false;
  }

  if (thang < 1 || thang > 12) {
    return false;
  }

  if (checkNamNhuan(nam) && thang === 2) {
    return ngay <= 29;
  }

  return true;
}

function ngayKeTiep(nam, thang, ngay) {
  const ngayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (checkDieuKien(nam, thang, ngay)) {
    if (ngay < ngayTrongThang[thang - 1]) {
      return {
        nam,
        thang,
        ngay: ngay + 1,
      };
    } else {
      if (thang < 12) {
        return {
          nam,
          thang: thang + 1,
          ngay: 1,
        };
      } else {
        return {
          nam: nam + 1,
          thang: 1,
          ngay: 1,
        };
      }
    }
  }
}

function ngayHomTruoc(nam, thang, ngay) {
  const ngayTrongThang = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (checkDieuKien(nam, thang, ngay)) {
    if (ngay > 1) {
      return {
        nam,
        thang,
        ngay: ngay - 1,
      };
    } else {
      if (thang > 1) {
        return {
          nam,
          thang: thang - 1,
          ngay: ngayTrongThang[thang - 2],
        };
      } else {
        return {
          nam: nam - 1,
          thang: 12,
          ngay: 31,
        };
      }
    }
  }
}

function checkNgayThangNam() {
  var nam = parseInt(document.getElementById("nam").value);
  var thang = parseInt(document.getElementById("thang").value);
  var ngay = parseInt(document.getElementById("ngay").value);
  var result = document.getElementById("result");

  if (!checkDieuKien(nam, thang, ngay)) {
    result.innerHTML = "Ngày tháng không hợp lệ";
    return;
  }

  const nextDay = ngayKeTiep(nam, thang, ngay);
  const previousDate = ngayHomTruoc(nam, thang, ngay);

  result.innerHTML = `
  Ngày sau: ${nextDay.nam}-${nextDay.thang}-${nextDay.ngay} <br>
  Ngày trước: ${previousDate.nam}-${previousDate.thang}-${previousDate.ngay}
  `;
}
