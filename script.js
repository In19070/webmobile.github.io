
// Elemen DOM
const installBanner = document.getElementById("installBanner");
const installBtn = document.getElementById("installBtn");

let deferredPrompt = null;

// Event untuk menangani `beforeinstallprompt`
window.addEventListener("beforeinstallprompt", (e) => {
  // Mencegah prompt default agar bisa dipicu manual
  e.preventDefault();
  deferredPrompt = e;
  // Tampilkan banner instalasi
  installBanner.style.display = "flex";
});

// Event klik tombol "Install Sekarang" pada banner
installBtn.addEventListener("click", () => {
  if (deferredPrompt) {
    // Tampilkan prompt instalasi default browser (seperti gambar)
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("Pengguna menerima instalasi PWA.");
      } else {
        console.log("Pengguna menolak instalasi PWA.");
      }
      deferredPrompt = null;
    });
  }
});

// Fungsi navigasi halaman jika ada
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  const activePage = document.getElementById(`${pageId}-page`);
  if (activePage) activePage.classList.add("active");
}
