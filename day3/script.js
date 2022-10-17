// add function
function addnum() {
// var , let , const
    var num1 = document.getElementById('addNum1').value;
    let num2 = Number( document.getElementById('addNum2').value);
    const result = Number(num1) + num2;
    // to convert any string to number = Number()
    document.getElementById('add_result').innerHTML = "Result =" + result;
}



function multiplynum() {
    var num1 = document.getElementById('multiplyNum1').value;
    let num2 = document.getElementById('multiplyNum2').value;
    var x = Number(num1);
    var y = Number(num2);
    const result = x * y;
    // to convert any string to number = Number()
    document.getElementById('multiply_result').innerHTML = "Result =" + result;

}