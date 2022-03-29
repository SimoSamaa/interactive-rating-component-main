let li = document.querySelectorAll("li");
let submit = document.querySelector("button");
let toggle = document.querySelector(".toggle");
let span = document.querySelector(".select span");

let value;

li.forEach((btns) => {
    btns.addEventListener("click", (e) => {
        li.forEach((btns) => btns.classList.remove("add-clr"))
        e.target.classList.add("add-clr");
        value = e.target.textContent;
    })
});

submit.addEventListener("click", (eve) => {
    toggle.style.cssText = "opacity:1; visibility: visible;";

    if (span.textContent = value) {
        eve.preventDefault()
    } else alert("Please Click in The buttons Numbers")
});
