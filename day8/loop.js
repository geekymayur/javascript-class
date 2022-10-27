function checkvote() {
    var age = document.getElementById('getage').value;
    var result = document.getElementById('result');
    var result2 = document.getElementById('result2');


    if (age >= 18) { 
        result.innerHTML = "Yes, You can vote."
        result2.innerHTML = "";
    } else {
        result.innerHTML = "Sorry! , You can't vote."
        var waitingyear = 18 - Number(age);
        result2.innerHTML = "You need to wait just " +waitingyear + " years more";
    }
}



// comparison
var a = 10;
var b = 100;
var c = 20;

// AND && OPERATOR
// FALSE TRUE
// var x = (a < b) && (b > c) && (c < a);

// OR ||

// var x = a > b || c > b || 10 == 100;

// ! NOT OPEARATOR

//var x = !(55 == 20);

// ternary operator

var x = (5 < 500) ? "yes, it is true" : "false";


console.log(x);
