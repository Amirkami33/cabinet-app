function calculate(){

let price = Number(document.getElementById("price").value);
let lower = Number(document.getElementById("lower").value);
let upper = Number(document.getElementById("upper").value);
let height = Number(document.getElementById("height").value);
let unit = document.getElementById("unit").value;


if(!price || !lower || !upper){
    document.getElementById("result").innerHTML =
    "لطفا همه اطلاعات را وارد کنید";
    return;
}


// سهم هر بخش از قیمت یک متر
let lowerMeter = price * 0.6;
let upperMeter = price * 0.4;


// قیمت پایین
let lowerTotal = lower * lowerMeter;


// قیمت بالا
let upperTotal = upper * upperMeter;


// افزایش ارتفاع فقط برای کابینت بالا
if(height > 90){

    let extraSteps = (height - 90) / 10;

    upperTotal = upperTotal + (upperTotal * extraSteps * 0.1);

}


let total = lowerTotal + upperTotal;


document.getElementById("result").innerHTML = `

<h3>نتیجه:</h3>

<p>کابینت پایین: ${lowerTotal.toLocaleString()} ${unit}</p>

<p>کابینت بالا: ${upperTotal.toLocaleString()} ${unit}</p>

<hr>

<h2>جمع کل: ${total.toLocaleString()} ${unit}</h2>

`;

}
