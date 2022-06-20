const form = document.querySelector(".rating-form");
const card = document.querySelector(".card-guts");
const back = card.querySelector(".card-back");
const imagsrc = document.createElement("img");

imgsrc.src = "./images/no-internet.png";

form.addEventListener("submit", async event => {
    event.preventDefault();

    const buttons = [...form.querySelectorAll(".ratings input[type='radio']")];
    const rating = get_rating(buttons);
    const url = form.getAttribute("action");

    try {
        await fetch(url, { method: "POST", body: JSON.stringify({ rating }) });
        card.classList.add("flipped");
        show_thank_you_message(back, rating);
    }
    catch (error) {
        console.log(`Something went terribly wrong : ${error}`);
        show_error_message(back, card);
    }
    finally {
        form.reset();
    }
});

function get_rating(buttons) {
    return buttons.find(butt => butt.checked).getAttribute("aria-label");
}

function show_thank_you_message(card, rating) {
    const image = document.createElement("img");
    const ratingFeedback = document.createElement("p");
    const cardTitle = document.createElement("h2");
    const message = document.createElement("p");
    
    ratingFeedback.classList.add("rating-feedback");
    cardTitle.classList.add("card-title");
    message.classList.add("message");

    image.src = "./images/illustration-thank-you.svg";
    image.setAttribute("alt", "thank you");
    ratingFeedback.innerText = `You selected ${rating} out of 5`;
    cardTitle.innerText = "Thank you!";
    message.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

    card.innerHTML = '';

    card.append(image);
    card.append(ratingFeedback);
    card.append(cardTitle);
    card.append(message);
}

function show_error_message(card, guts) {
    const image = document.createElement("img");
    const cardTitle = document.createElement("h2");
    const message = document.createElement("p");
    const tryAgainButton = document.createElement("button");

    image.classList.add("no-internet-image");
    cardTitle.classList.add("card-title");
    message.classList.add("message");
    tryAgainButton.classList.add("try-again-button");
    tryAgainButton.classList.add("card-button");

    image.src = imgsrc.src;
    image.setAttribute("alt", "no internet");
    cardTitle.innerText = "Something went wrong...";
    message.innerText = "Looks like there's no internet connection";
    tryAgainButton.innerText = "Try again";

    card.innerHTML = '';
    guts.classList.add("flipped");

    card.append(image);
    card.append(cardTitle);
    card.append(message);
    card.append(tryAgainButton);

    tryAgainButton.addEventListener("click", () => guts.classList.remove("flipped"));
}