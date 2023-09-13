function calcular(){
    var date1Input = document.getElementById("date1Input").value;
    var date2Input = document.getElementById("date2Input").value;
    var res = document.getElementById('result');

    if(date1Input.length == 0 || date2Input.length == 0){
        alert("Confira os dados inseridos!");
    }
    else{
        var date1 = new Date(date1Input);
        var date2 = new Date(date2Input);
        var diffInMilliseconds = Math.abs(date1.getTime() - date2.getTime());
        var diffInDays = diffInMilliseconds / (1000 * 3600 * 24);
        var diffInYears = diffInDays / 365;
        var diffInMonths = diffInYears * 12;
        var years = Math.floor(diffInYears);
        var months = Math.floor(diffInMonths % 12);
        var days = Math.floor(diffInDays % 365 % 30);
        res.innerHTML = years + " anos, " + months + " meses e " + days + " dias ";
    }
}