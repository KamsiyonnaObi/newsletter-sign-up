const emailInput = document.getElementById("emailInput");
const errorMessage = document.getElementById("errorMessage");
const subscribeButton = document.getElementById("subscribeButton");
const successMessage = document.getElementById("success-message");
const signUpForm = document.getElementById("sign-up");
const illustration = document.getElementById("illustration");
const illustrationDesktop = document.getElementById("illustration-desktop");
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// var to track if email was successfully submitted.
let isSubmitted = false;
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex";
  isEmailSubmitted();
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
//   isSubmitted = false; // Reset isSubmitted
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    isSubmitted = false; // Reset isSubmitted
  }
};

subscribeButton.addEventListener("click", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  modal.style.display = "flex";
  if (!isValidEmail(email)) {
    errorMessage.innerText = "Valid email required";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none"; // remove error message
    isSubmitted = true;
    isEmailSubmitted();
  }
});

function isValidEmail(email) {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// display success message if email is sucessfully submitted
function isEmailSubmitted() {
  if (isSubmitted) {
    successMessage.style.display = "flex";
    illustration.style.display = "none";
    illustrationDesktop.style.display = "none";
    signUpForm.style.display = "none";
  } else {
    signUpForm.style.display = "block";
    successMessage.style.display = "none";
  }
}
