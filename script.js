const btnNav = document.querySelector('.btn-nav');
// nama class nya harus sama dengan di html
btnNav.addEventListener('click', function(e) {
e.preventDefault();
alert('Selamat datang di TaskFlow!');
});

const heading = document.getElementById('hero-heading');
// id di html nya gaada
heading.innerText = 'TaskFlow – Solusi Tim Modern';


const cards = document.querySelectorAll('.feature-card');
// gapake s
let total = 0;
for (let i = 0; i < cards.length; i++) {
    // i nya jangan <= agar tidak 4 hasilnya
total++;
}


console.log('Jumlah fitur: ' + total);


const tombol = document.querySelector('.btn-primary')

tombol.addEventListener('click', function(e){
    e.preventDefault();
    tombol.innerText = 'Mendaftar...'
    tombol.style.backgroundColor = '#94a3b8'
    setTimeout(function(){
        console.log('sudahan lodingnya')
        tombol.innerText = 'Coba Gratis 14 Hari'
        tombol.style.backgroundColor = ''
    },2000);
})




const cardactive = document.querySelectorAll('.feature-card')

cardactive.forEach((card) => {
    card.addEventListener('click',function(){
        cardactive.forEach((item) => {
            item.classList.remove('active')
        })
        this.classList.add('active')
    })
})


const error = document.getElementById('review-btn')
const inputr = document.getElementById('review-input')
const msg = document.getElementById('review-msg')

error.addEventListener('click',function(){
    if (inputr.value == '') {
        msg.textContent = 'Ulasan tidak boleh kosong'
        msg.style.color = '#ef4444'
    }else if (inputr.value.length <= 10) {
        msg.textContent = 'Ulasan terlalu singkat. Minimal 10 karakter.'
        msg.style.color = '#f97316'
    }else{
        msg.textContent = 'Ulasan berhasil dikirim'
        msg.style.color = '#22c55e'
        inputr.value = ""
    }
})



