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
    e.preventDefault();
    
    // Username dengan titik
    const username = "kilap.go"; 
    
    // Link khusus aplikasi (Deep Link)
    const appUrl = "instagram://user?username=" + username;
    
    // Link web standar sebagai cadangan
    const webUrl = "https://www.instagram.com/" + username + "/";

    // Simpan waktu saat ini
    const startTime = Date.now();

    // 1. Coba buka aplikasi Instagram
    window.location.href = appUrl;

    // 2. Cek apakah user masih di halaman yang sama setelah 500ms
    // Jika masih di sini, berarti aplikasi gagal dibuka, lempar ke Web.
    setTimeout(function() {
        if (Date.now() - startTime < 1500) {
            window.location.href = webUrl;
        }
    }, 1000);
});