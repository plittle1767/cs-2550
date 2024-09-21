const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const img = document.getElementById("image");
const closeBtn = document.getElementById("close");

img.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
