const soal = document.getElementById('soal');
const crop = document.getElementById('crop');
let jawaban = document.getElementById('jawaban');
let next = document.getElementById('next');

let claim = document.getElementById('claim');

soal.style.display = "none"
next.style.display = "none"
claim.style.display = "none"


function Enter1(){
    if(jawaban.value == 'kia' || jawaban.value == 'hizkia'){
        alert("bener goblok");
        soal.style.display = 'block';
        crop.style.display = 'none';
        next.style.display = 'inline-block';
        return;
    }
    else{
        alert('salah tod')
    }

}

function Next(){
    window.location.href = "quizz.html"
}



function Enter2() {

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

