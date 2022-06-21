const eyeOfGod = document.querySelector(".eye-of-god");
const fullImage = document.querySelector(".full-image");
const close = fullImage.querySelector(".close");
const img = fullImage.querySelector("img");

eyeOfGod.addEventListener("click", () => {
    fullImage.classList.remove("hidden");
    fullImage.classList.add("shown");
});

close.addEventListener("click", close_modal);

fullImage.addEventListener("click", event => {
    if (event.target != img)
        close_modal();
});

function close_modal() {
    fullImage.classList.remove("shown");
    fullImage.classList.add("hidden");
}