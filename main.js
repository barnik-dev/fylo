const arrowIcon = document.querySelector(".ico");
const link = document.querySelector(".right-col a");
const underline = document.querySelector(".right-col a .underline");

const emailInput = document.querySelector(".join input[type='email']");
const errorMsg = document.querySelector(".join .error");


link.addEventListener("mouseover", () => {
    underline.style.backgroundColor = "white";
    arrowIcon.style.filter = "brightness(0) invert(1)";
})

link.addEventListener("mouseout", () => {
    underline.style.backgroundColor = "var(--cyan)";
    arrowIcon.style.filter = "none";
})

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    errorMsg.style.display = "block";
})