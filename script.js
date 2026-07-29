function calculate() {

let price = Number(document.getElementById("price").value);
let lower = Number(document.getElementById("lower").value);
let upper = Number(document.getElementById("upper").value);
let height = Number(document.getElementById("height").value);
let tall = Number(document.getElementById("tall").value);


// قیمت کابینت پایین (۶۰ درصد)
let lowerPrice = lower * (price * 0.6);


// قیمت کابینت بالا (۴۰ درصد)
let upperPrice = upper * (price * 0.4);


// افزایش ارتفاع باکس بالا
if (height > 90) {
    let extra = (height - 90) / 10;
    upperPrice = upperPrice + (upperPrice * extra * 0.1);
}


// جمع کل
let total = lowerPrice + upperPrice;


// نمایش نتیجه
document.getElementById("result").innerHTML =
"قیمت تقریبی: " + total.toLocaleString() + " تومان";

}
