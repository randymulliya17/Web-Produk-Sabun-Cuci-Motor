//BACK TO TOP
const backToTopBtn = document.getElementById('backToTop')
const igLink = document.querySelector('.icon.ig')

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

igLink.addEventListener('click', function(e) {
    const username = "kilap.go"
    const appUrl = "instagram://user?username=" + username
    const webUrl = "https://www.instagram.com/" + username + "/"

    // Coba tembak ke aplikasi langsung
    window.location.href = appUrl

    // Jika aplikasi tidak ada, buka versi web setelah 1 detik
    setTimeout(() => {
        window.location.href = webUrl
    }, 1000)

    e.preventDefault()
});