function rezervasyonAl(){
const name = document.getElementById('name').value;
const service = document.getElementById('service').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;

if(!name || !date || !time){
alert("Lütfen tüm alanları doldurun");
return;
}

alert(`Rezervasyon alındı!
${name} - ${service}
${date} ${time}`);
}

function whatsappGonder(){
const name = document.getElementById('name').value;
const service = document.getElementById('service').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;

const mesaj = `Merhaba, rezervasyon oluşturmak istiyorum:%0AAd: ${name}%0AHizmet: ${service}%0ATarih: ${date}%0ASaat: ${time}`;

window.open(`https://wa.me/905000000000?text=${mesaj}`, '_blank');
}
