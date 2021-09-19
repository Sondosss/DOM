var imgsList = Array.from(document.getElementsByClassName("img-item"));
var lightboxContainer = document.querySelector(".lightbox-container");
var lightboxItem = document.querySelector(".lightbox-item");
var currentIndex = 0;
var nextBtn = document.getElementById("next")
var prevBtn = document.getElementById("prev");
var closeBtn = document.getElementById("close");

for (i = 0; i < imgsList.length; i++) {

    imgsList[i].addEventListener("click", function(e) {
        currentIndex = imgsList.indexOf(e.target);
        var imgSrc = e.target.getAttribute("src");
        lightboxContainer.classList.replace("d-none", "d-flex");
        lightboxItem.style.backgroundImage = `url(${imgSrc})`
    })
}

function nextSlide() {
    currentIndex++;
    if (currentIndex == imgsList.length) {

        currentIndex = 0;
    }
    var imgSrc = imgsList[currentIndex].getAttribute("src");

    lightboxItem.style.backgroundImage = `url(${imgSrc})`
}

function prevSlide() {

    currentIndex--;
    if (currentIndex == -1) {

        currentIndex = imgsList.length - 1;
    }

    var imgSrc = imgsList[currentIndex].getAttribute("src");

    lightboxItem.style.backgroundImage = `url(${imgSrc})`
}

function closeSlide() {
    lightboxContainer.classList.replace("d-flex", "d-none");

}
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
closeBtn.addEventListener("click", closeSlide);


document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
        nextSlide();
    } else if (e.key == "ArrowLeft") {
        prevSlide();
    } else if (e.key == "Escape") {
        closeSlide();
    }
})