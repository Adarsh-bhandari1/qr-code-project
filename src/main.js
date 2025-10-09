import QRCode from "qrcode";
document.querySelector(".btn").addEventListener("click", function () {
  const inputField = document.getElementById("inputField");
  const url = inputField.value;
  generateQR(url);
});

async function generateQR(url) {
  try {
    const qrcode = await QRCode.toDataURL(url);
    document.querySelector(
      ".qr-display"
    ).innerHTML = `<img src="${qrcode}" alt= "QR code">`;
  } catch (error) {
    console.log(error);
  }
}

document
  .getElementById("inputField")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.querySelector(".btn").click();
    }
  });
