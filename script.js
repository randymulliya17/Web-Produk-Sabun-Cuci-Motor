//BACK TO TOP
const backToTopBtn = document.getElementById('backToTop')

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block"
    } else {
        backToTopBtn.style.display = "none"
    }
})

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})

//POP UP PRODUK
const cards = document.querySelectorAll(".card")
const produkModal = document.getElementById("produkModal")
const closeBtn = document.querySelector(".close")

const modalImg = document.getElementById("modalImg")
const modalTitle = document.getElementById("modalTitle")
const modalPrice = document.getElementById("modalPrice")
const modalDesc = document.getElementById("modalDesc")
const modalWa = document.getElementById("modalWa")

//Klik Card
cards.forEach(card => {
    card.addEventListener("click", () => {
        produkModal.style.display = "flex"

        modalImg.src = card.dataset.img
        modalTitle.textContent = card.dataset.title
        modalPrice.textContent = card.dataset.price
        modalDesc.textContent = card.dataset.desc

        modalWa.href = 
        "https://wa.me/6285772235976?text=" +
      encodeURIComponent(card.dataset.wa)
    })
})

//TUTUP MODAL
closeBtn.addEventListener("click", () => {
    produkModal.style.display = "none"
})

//Klik Area Gelap -> tutup
produkModal.addEventListener("click", e => {
   if (e.target === produkModal) {
       produkModal.style.display = "none"
    }
})

document.getElementById('ig-link').addEventListener('click', function(e) {
    const username = "kilap.go";
    const webUrl = "https://www.instagram.com/" + username + "/";
    
    // Protokol khusus untuk mencoba menembus browser WhatsApp
    const appUrl = "instagram://user?username=" + username;
    const intentUrl = "intent://instagram.com/_u/" + username + "/#Intent;package=com.instagram.android;scheme=https;end";

    // Cek apakah pengguna pakai Android
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAndroid) {
        e.preventDefault();
        window.location.href = intentUrl;
    } else {
        // Untuk iOS/Desktop, coba buka skema app dulu
        window.location.href = appUrl;
    }

    // Fallback: Jika aplikasi tidak terbuka dalam 1 detik, buka versi web
    setTimeout(function() {
        window.location.href = webUrl;
    }, 1000);
});