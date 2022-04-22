let randomNumber = Math.ceil(Math.random()*3);
let bgInfo = document.querySelector("#bg-info");
let infoButton = document.querySelector("#information-button");
let infoDiv = document.querySelector("#information");


document.body.className = `img-${randomNumber}`;

bgInfo.textContent += bgDescrptions[randomNumber-1];

infoButton.addEventListener("click", () => {
    infoButton.classList.add("display-none");
    infoDiv.classList.remove("display-none");
    setTimeout(() => {
        infoButton.classList.remove("display-none");
        infoDiv.classList.add("display-none");
    }, 5000);
});