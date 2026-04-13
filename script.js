function rezervasyonAl(){
const name = document.getElementById('name').value;
const service = document.getElementById('service').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;

if(!name || !date || !time){
alert("Lütfen tüm alanları doldurun");
return;
}

fetch("https://script.google.com/macros/s/AKfycbzRwYwl9BiE4SLTQ1vT4yx6fh73duU8eEk_zC5zcPZxdfTRNthrp7DuFjjwtjFC5F5gug/exec", {
method: "POST",
body: JSON.stringify({
name: name,
service: service,
date: date,
time: time
})
})
.then(() => {
alert("Rezervasyon alındı!");
})
.catch(() => {
alert("Hata oluştu!");
});
}

function whatsappGonder(){
window.open("https://wa.me/905000000000", "_blank");
}
