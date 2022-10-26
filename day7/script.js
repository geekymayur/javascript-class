var orders = [
    {
        productName: "samsung a52 128 GB",
        image: "https://rukminim1.flixcart.com/image/416/416/kt0enww0/mobile/4/1/w/galaxy-a52s-5g-sm-a528blvgins-samsung-original-imag6fmjtkngdffa.jpeg?q=70",
        color: "black",
        price: 30000,
        orderDate: "10/05/2022",
        status: "delivered"
    },
    {
        productName: "boat headphone 255pro+",
        image: "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/0/z/e/-original-image9egyqndhqhb.jpeg?q=70",
        color: "red",
        price: 1500,
        orderDate: "15/06/2022",
        status: "returned"
    },

    {
        productName: "boat smart watch",
        image: "https://rukminim1.flixcart.com/image/416/416/xif0q/smartwatch/d/u/f/-original-imaghbgakwcqed9h.jpeg?q=70",
        color: "red",
        price: 2999,
        orderDate: "20/06/2022",
        status: "delivered"
    },
    {
        productName: "H&M T Shirt",
        image: "https://rukminim1.flixcart.com/image/832/832/kdoup3k0-0/t-shirt/o/d/y/xl-bcn012h-whitenavyblue-black-collection-original-imafujnj5spzqsqm.jpeg?q=70",
        color: "white",
        price: 1999,
        orderDate: "01/09/2022",
        status: "delivered"
    },
    {
        productName: "H&M jeans",
        image: "https://rukminim1.flixcart.com/image/832/832/xif0q/jean/c/x/l/38-epsrustsprcrs-lblue-urbano-fashion-original-imaftzru2pwn2hyd-bb.jpeg?q=70",
        color: "grey",
        price: 3500,
        orderDate: "05/09/2022",
        status: "order confirmed"
    },
    {
        productName: "mobile cover",
        image: "https://rukminim1.flixcart.com/image/416/416/l4x2rgw0/cases-covers/back-cover/u/s/i/f13-vntg-brwn-goldkart-original-imagfpnvgzf4vfew.jpeg?q=70",
        color: "red",
        price: 199,
        orderDate: "05/09/2022",
        status: "order confirmed"
    },
    {
        productName: "keyboard USB",
        image: "https://rukminim1.flixcart.com/image/416/416/ksxjs7k0/keyboard/desktop-keyboard/i/n/d/zeb-k20-zebronics-original-imag6dugjbazygpz.jpeg?q=70",
        color: "black",
        price: 850,
        orderDate: "05/09/2022",
        status: "order confirmed"
    },
];

// n = 
// check length =  name.length = ?

// console.log("Total Orders: " + orders.length)

// length - 1 = result = index of last array;

// last order
// var dfdf = orders.length - 1;
// var lOrd = orders[dfdf];

// print all details
// console.log("=Your Latest Order Details =")
// console.log("Name : " + lOrd.productName);
// console.log("Price : " + " Rs." + lOrd.price);
// console.log("Status : " + lOrd.status);





function checkLastOrder() {

    // check last oder
    var lastOrder = orders[orders.length - 1];
    document.getElementById('pname').innerHTML = lastOrder.productName;
    document.getElementById('pcolor').innerHTML = "Color : "+lastOrder.color;
    document.getElementById('pprice').innerHTML = "Price : "+" Rs."+lastOrder.price;
    document.getElementById('pstatus').innerHTML = "Status : "+lastOrder.status;
    document.getElementById('pimg').src = lastOrder.image;
}



function getproduct() {
    var indexnum = document.getElementById('indexnum').value;
    // check last oder
    var lastOrder = orders[indexnum];
    document.getElementById('pname').innerHTML =  lastOrder.productName;
    document.getElementById('pcolor').innerHTML = "Color : " + lastOrder.color;
    document.getElementById('pprice').innerHTML = "Price : " + " Rs." + lastOrder.price;
    document.getElementById('pstatus').innerHTML = "Status : " + lastOrder.status;
    document.getElementById('pimg').src = lastOrder.image;
}







