document.getElementById("btn-ex2").addEventListener("click", function(e)
{
    let user_name = document.getElementById("ex2_name").value;
    let kw = +document.getElementById("ex2_kw").value;
    let total = 0;
if (kw > 0) {
    if (kw <= 50)
    {
        total = kw * 500;
        const formatTotal = new Intl.NumberFormat('vn-VN').format(total);
        document.getElementById("lbl-ex2").innerHTML = user_name +  " - số tiền điện :  " +  formatTotal;
    }
    else if (kw <= 100)
    {
        total = 50 * 500 + (kw - 50 ) * 650;
        const formatTotal = new Intl.NumberFormat('vn-VN').format(total);
        document.getElementById("lbl-ex2").innerHTML = user_name +  " - số tiền điện :  " +  formatTotal;
    }
    else if (kw <= 150)
    {
        total = 50 * 500 + 50 * 650 +(kw - 100) * 850;
        const formatTotal = new Intl.NumberFormat('vn-VN').format(total);
        document.getElementById("lbl-ex2").innerHTML = user_name +  " - số tiền điện :  " +  formatTotal;
    }
    else if (kw <= 200)
    {
        total = 50 *500 + 50 * 650 + 50 * 850 +(kw - 150) * 1100;
        const formatTotal = new Intl.NumberFormat('vn-VN').format(total);
        document.getElementById("lbl-ex2").innerHTML = user_name +  " - số tiền điện :  " +  formatTotal;
    }
    else
    {
       total= kw * 1300;
       const formatTotal = new Intl.NumberFormat('vn-VN').format(total);
        document.getElementById("lbl-ex2").innerHTML = user_name +  " - số tiền điện :  " +  formatTotal;
    }
}
});