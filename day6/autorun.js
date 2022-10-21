var dosomework = function() {
    var currentdate = new Date();
    var time ="TIME : "+ currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    console.log(time);
  
};

// setInterval
//setTimeout
function autorun() {
    setInterval(dosomework, 1000);
}

autorun();

