function cachDoc() {
    var nhapSo = +document.getElementById("nhapSo").value;

    var cachDoc = "";

    if (nhapSo == 4) {
        cachDoc = "bốn";
    }
    else if (nhapSo == 3) {
        cachDoc = "ba";
    }
    else if (nhapSo == 2) {
        cachDoc = "hai";
    }
    else if (nhapSo == 1) {
        cachDoc = "một";
    }
    else{
        cachDoc = "chưa học tới số này";
    }

    document.getElementById("cachDocResult").innerHTML = cachDoc;
}
