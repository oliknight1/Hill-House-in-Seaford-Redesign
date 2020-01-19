let date = new Date();

const arrivalElement = document.getElementById("arrival");
const departElement = document.getElementById("depart");
const submitWrap = document.querySelector(".submitted-wrapper");

arrivalElement.addEventListener("keydown", preventType);
departElement.addEventListener("keydown", preventType);

function preventType(e) {
    if (e.keyCode >= 8) {
        e.preventDefault()
    }
}

const arrival = new Pikaday({
    field: arrivalElement,
    // Stops user from selecting an invalid date
    minDate: date

});
const depature = new Pikaday({
    field: departElement,
    minDate: date

});

// Form Submit

const form = document.querySelector("#form");
form.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault();
    document.querySelector(".contact-wrapper").style.display = "none";
    submitWrap.style.display = "flex";
    submitWrap.classList.add("submit-animate");
}