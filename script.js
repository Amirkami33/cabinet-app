function calculate() {

let price = Number(document.getElementById("price").value);
let lower = Number(document.getElementById("lower").value);
let upper = Number(document.getElementById("upper").value);
let height = Number(document.getElementById("height").value);
let unit = document.getElementById("unit").value;


// سهم کابینت پایین (۶۰ درصد)
let lowerMeter = price * 0.6;


// سهم کابینت بالا (۴۰ درصد)
let upperMeter = price * 0.4;


// محاسبه قیمت پایین
let lowerTotal = lower * lowerMeter;


// محاسبه قیمت بالا
let upperTotal = upper * upperMeter;


// افزایش ارتفاع فقط برای کابینت بالا
if (height > 90) {

    let extraPercent = ((height - 90) / 10) * 10;

    upperTotal = upperTotal + (upperTotal * extraPercent / 100);

}


// قیمت نهایی
let total = lowerTotal + upperTotal;


// نمایش نتیجه
document.getElementById("result").innerHTML = `

<h3>نتیجه محاسبه:</h3>

<p>کابینت پایین: ${lowerTotal.toLocaleString()} ${unit}</p>

<p>کابینت بالا: ${upperTotal.toLocaleString()} ${unit}</p>

<hr>

<h2>جمع کل: ${total.toLocaleString()} ${unit}</h2>

`;

}
