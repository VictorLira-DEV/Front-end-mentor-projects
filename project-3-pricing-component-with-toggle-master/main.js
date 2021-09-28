"use strict";
const toggle = document.querySelector(".toggle-button");
const basicPrice = document.querySelector("#basic-price");
const professionalPrice = document.querySelector("#professional-price");
const masterPrice = document.querySelector("#master-price");

const changeThePrice = function(){
    if (toggle.classList.contains("montly")) {
        basicPrice.textContent = "19.99";
        professionalPrice.textContent = "24.99";
        masterPrice.textContent = "39.99";

    } else {
        basicPrice.textContent = "199.99";
        professionalPrice.textContent = "249.99";
        masterPrice.textContent = "399.99";
    }
}

changeThePrice()

toggle.addEventListener("click", () => {
    toggle.classList.toggle("montly");
    changeThePrice();
});



