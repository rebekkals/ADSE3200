const inputs = document.querySelectorAll("input[type='checkbox']");
const creditForm = document.getElementById("credit-card-form");
const addressForm = document.getElementById("address-form");
const shopForm = document.getElementById("shop-form");
const successMessage = document.querySelector(".success");
const donateAgain = document.getElementById("donate-again");

const chosen = new Set();

inputs.forEach((input) => {
  input.addEventListener("change", ({ target }) => {
    if (target.checked) {
      input.parentElement.classList.add("checked");
      chosen.add(input.id);
    } else {
      input.parentElement.classList.remove("checked");
      chosen.delete(input.id);
    }

    showForm();
  });
});

function showForm() {
  if (chosen.size) addressForm.style.display = "flex";
  else addressForm.style.display = "none";

  if (["book", "donate", "buy"].some((id) => chosen.has(id))) {
    creditForm.style.display = "grid";
  } else {
    creditForm.style.display = "none";
  }
}

showForm();

shopForm.addEventListener("submit", (e) => {
  e.preventDefault();

  shopForm.classList.add("hidden");
  successMessage.classList.add("shown");
});

donateAgain.addEventListener("click", () => {
  shopForm.classList.remove("hidden");
  successMessage.classList.remove("shown");
  chosen.clear();

  showForm();
  shopForm.reset();

  inputs.forEach((input) => {
    input.parentElement.classList.remove("checked");
  });
});
