function addtwonum() {

    // 1 method
    //alert("Javascript file is linked");
    // 2 method
    // console.log("Javascript file is linked 1")
    // single line domment
    /* multiline comment */

    // get 1st number
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    var num1converted = Number(num1);
    var num2converted = Number(num2);

    var result = num1converted + num2converted;

    // typeof() = to check datatype of value.
    console.log(typeof (num1))
    console.log(typeof (num2))
    console.log(result)

    // show result on display

    document.getElementById('result').innerHTML = result; //5+5 = 10







    /*
    8 = number = 8 ,"8"
    boolean  = true , false
    
    
    Number("56") = to convert string into number.
    
    
    
    //
    
    
    
    
    
    */











}