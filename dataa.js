const soal = document.getElementById('soal');
const crop = document.getElementById('crop');
let jawaban = document.getElementById('jawaban').value.toLowerCase();

let claim = document.getElementById('claim');

soal.style.display = "none"
claim.style.display = "none"

function Enter() {

    let jawaban = document.getElementById('jawaban').value.toLowerCase();

    if (jawaban.includes("kalera","adit kalera")) { 
        alert("Mantap Kalera");
        claim.style.display = "inline-block"
        soal.style.display = "block"
        crop.style.display = "none"
        return;

    }

    if (jawaban.includes("adit")) { 
        alert("Nama lain adit padang");

    } else {
        alert("Salah yam");
    }
}

document.getElementById("jawaban").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        Enter();
    }
});

function Claim() {
    window.location.href = "blank.html"
}