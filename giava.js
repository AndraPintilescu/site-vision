const form = document.getElementById("form");

form.addEventListener("submit", function(event) {
  const nameInput = document.getElementById("nume");
  const prenumeInput = document.getElementById("prenume");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("telefon");
  const jocInput = document.getElementById("mesaj");

  if (nameInput.value.trim() === "") {
    alert("Te rugăm să completezi câmpul nume.");
    event.preventDefault();
  }
  else if (prenumeInput.value.trim() === "") {
    alert("Te rugăm să completezi câmpul prenume.");
    event.preventDefault();
  }
  else if (!isValidEmail(emailInput.value.trim())) {
    alert("Te rugăm să introduci o adresă de email validă.");
    event.preventDefault();
  }
  else if (!isValidPhoneNumber(phoneInput.value.trim())) {
    alert("Te rugăm să introduci un număr de telefon valid (10 cifre).");
    event.preventDefault();
  }
  else if (jocInput.value.trim() === "") {
    alert("Te rugăm să specifici ce joc vrei să joci.");
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
  const phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}