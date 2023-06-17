//Them chon khi khach hang la doanh nghiep

function showExtraInput() {
    let option = +document.getElementById('ex4-drop').value;
    let extraInput = document.getElementById('ex4-connect');
    if (option === 2 ) {
      extraInput.style.display = "block";
    } else {
      extraInput.style.display = "none";
    }
  }

function cacuConnect(){
    let dropdown = +document.getElementById('ex4-drop').value;
    let channel = +document.getElementById('ex4-channel').value;
    let userId = document.getElementById('ex4-id').value;
    let connect = +document.getElementById('ex4-connect').value;

    let billFee = 4.5;
    let servicesFee = 20.5;
    let billGroup = 15;
    let servicesGroup = 75;
    let toTal;
    if(dropdown === 0)
    {
        alert('Vui lòng chọn loại khách hàng')
    }
    if(dropdown === 1)
    {
        toTal = billFee + servicesFee + channel * 7.5;
        var formattedTotal = toTal.toLocaleString("en-US", { style: "currency", currency: "USD" });
            document.getElementById('lbl-ex4').innerHTML = 'Mã khách hàng : ' + userId  +' , tiền cáp : ' +formattedTotal; 
    }
    else if(dropdown === 2)
    {
        if(connect <= 10)
        {
            toTal = billGroup + servicesGroup + channel * 50;
            const formattedTotal = toTal.toLocaleString("en-US", { style: "currency", currency: "USD" });
            document.getElementById('lbl-ex4').innerHTML = 'Mã khách hàng : ' + userId  +' , tiền cáp : ' +formattedTotal;
        }
        else
        {
            toTal = billGroup + servicesGroup + channel * 50 + (connect -10) * 5;
            const formattedTotal
             = toTal.toLocaleString("en-US", { style: "currency", currency: "USD" });
            document.getElementById('lbl-ex4').innerHTML = 'Mã khách hàng : ' + userId  +' , tiền cáp : ' +formattedTotal;
        }
    }
    
}