document.getElementById("btn-ex1").addEventListener("click", function(e)

    {
        let benchmark = parseFloat(document.getElementById("benchmark").value);

        let dropArea = +document.getElementById("ex1-dropdown").value;

        let objectDropdown = +document.getElementById("object-dropdown").value;

        let subject1 = +document.getElementById("subject-1").value;

        let subject2 = +document.getElementById("subject-2").value;

        let subject3 = +document.getElementById("subject-3").value;
        
        let lbl1 = document.getElementById("lbl-ex1");

        let last_benchmark = subject1 + subject2 + subject3 + dropArea + objectDropdown;
        if (subject1 === 0 || subject2 === 0 || subject3 === 0 || last_benchmark < benchmark) {
            document.getElementById("lbl-ex1").innerHTML = " Bạn đã rớt điểm của bạn là  " + last_benchmark;
        } else {
            document.getElementById("lbl-ex1").innerHTML = " Bạn đã đậu điểm của bạn là  " +  last_benchmark;
        }
    }
);