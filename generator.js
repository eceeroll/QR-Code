// selecting required elements

const button = document.querySelector(".form button");
const input = document.getElementById("user-input");
const container = document.querySelector(".container");
const qrImage = document.querySelector(".qr-code img");
const qrLink = document.getElementById("qr-link");

button.addEventListener("click", () => {
    let qrValue = input.value;
    if (!qrValue) return;  
    button.innerText = "Generating QR Code..."
    const API_URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`

    qrImage.src = API_URL;
    qrLink.href = qrValue;
    qrImage.addEventListener("load", () => {
        container.classList.add("active");
        button.innerText = "Generate QR Code";
    })
})
