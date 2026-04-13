function showServices(){
document.getElementById("services").classList.remove("hidden");
}

function scrollToBooking(){
document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

function openPage(type){
window.location.href = type + ".html";
}

function rezervasyonAl(){
alert("Rezervasyon alındı!");
}
