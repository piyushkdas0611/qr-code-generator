const input = document.getElementById("text");
const generateBtn = document.getElementById("btn");

// Add an event listener to the button to generate the QR code
generateBtn.addEventListener("click", () => {
  // Get a reference to the QR code element
  const qrCodeElement = document.getElementById("qr-code");
  qrCodeElement.style.display = "grid";
  // Create a new QRCode instance
  const qrCode = new QRCode(qrCodeElement, {
    text: input.value,
    width: 180,
    height: 180,
    colorDark: "#A060D8",
    colorLight: "#E3E5FC",
    correctLevel: QRCode.CorrectLevel.H,
  });
});
