window.setTimeout("waktu()", 1000);

function waktu() {
    var waktu = new Date();
    setTimeout("waktu()", 1000);
    document.getElementById("jam").innerHTML = waktu.getHours();
    document.getElementById("menit").innerHTML = waktu.getMinutes();
    document.getElementById("detik").innerHTML = waktu.getSeconds();
}
const d = new Date();
const n = d.getFullYear();
const footer = document.querySelector("footer > p");
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxqAyUNmJx_ZCCt2-T6JrkKKPu5L7FsB15y2T32fmjrVSa0_r1CCzdofFM_gfyAyAQ/exec';
const form = document.forms['submit-to-google-sheet'];
const btnsubmit = document.getElementById('submit');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    }).then(response => {
        console.log('Success!', response);
        form.reset();
        alert('Pesan Anda Berhail Terkirim !')
    }).catch(error => console.error('Error!', error.message))
});