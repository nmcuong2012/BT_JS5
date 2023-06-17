document.getElementById("btn-ex3").addEventListener("click", function(e)
{ 
    // Tổng thu nhập
    const salary = +document.getElementById('ex3-salary').value;
    // const formattedSalary = salary.toExponential();
    let name = document.getElementById('ex3_name').value;
    // Khấu trừ
    const deduction = 4000000;
    // console.log(formattedDedution)

    // Số người phụ thuộc
    const peoples = +document.getElementById('ex3-people').value;
    const alimony = peoples * 1600000;
    // console.log(formattedAlimony)
    const lastSalary = salary - deduction - alimony;
    const formattedSalary = lastSalary.toExponential();

    let totalTax;
    if (formattedSalary < 6e+6)
    {
        alert('Số tiền thu nhập không hợp lệ!')
    }

    if (formattedSalary > 60e+5)
    {
        if (formattedSalary <= 60e+6)
        {
            totalTax = formattedSalary * 0.05;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML = name + ' tổng thuế thu nhập cá nhân :' + formatTax;
        }
        else if (formattedSalary > 60e+6 && formattedSalary <= 120e+6) 
        {
            totalTax = formattedSalary * 0.1;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML = name + ' tổng thuế thu nhập cá nhân :' + formatTax;

        }
        else if (formattedSalary > 120e+6 && formattedSalary <= 210e+6)
        {
            totalTax = formattedSalary * 0.15;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML =name + ' tổng thuế thu nhập cá nhân : ' + formatTax;


        }
        else if (formattedSalary > 210e+6 && formattedSalary <= 384e+6)
        {
            totalTax = formattedSalary * 0.2;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML = name + ' tổng thuế thu nhập cá nhân : ' + formatTax;
        }
        else if(formattedSalary > 384e+6 && formattedSalary <= 624e+6)
        {
            totalTax = formattedSalary * 0.25;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML = name + ' tổng thuế thu nhập cá nhân : ' + formatTax;
 
        }
        else if(formattedSalary > 624e+6 && formattedSalary <= 960e+6)
        {
            totalTax = formattedSalary * 0.3;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML = name + ' tổng thuế thu nhập cá nhân : ' + formatTax;

        }
        else
        {
            totalTax = formattedSalary * 0.35;
            const formatTax = new Intl.NumberFormat('vn-VN').format(totalTax);
            document.getElementById('lbl-ex3').innerHTML = name + ' tổng thuế thu nhập cá nhân : ' + formatTax;
        }
    }
    
});