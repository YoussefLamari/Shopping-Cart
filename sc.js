/* https://pajasevi.github.io/CSSnowflakes/ */
document.addEventListener("DOMContentLoaded", function(){
const cart = document.querySelector("#cart");
const likeButtons = cart.querySelectorAll(".like-button");
const deleteButtons = cart.querySelectorAll(".delete-button");
const totalPrice = cart.querySelector(".total-price");
let total = 0;

// Add functionality to the plus and minus buttons
const plusButtons = cart.querySelectorAll(".plus-button");
plusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
    updateTotal();
  });
});

const minusButtons = cart.querySelectorAll(".minus-button");
minusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const input = button.nextElementSibling;
    if (input.value > 1) {
      input.value = parseInt(input.value) - 1;
      updateTotal();
    }
  });
});

// Add functionality to the like buttons
likeButtons.forEach(button => {
    button.addEventListener("click", function() {
      if (this.classList.contains("liked")) {
        this.classList.remove("liked");
      } else {
        this.classList.add("liked");
      }
    });
  });
  

// Add functionality to the delete buttons
deleteButtons.forEach(button => {
  button.addEventListener("click", () => {
    const cartItem = button.parentElement;
    cartItem.remove();
    updateTotal();
  });
});

// Update the total price of the cart
function updateTotal() {
  total = 0;
  const qtyInputs = cart.querySelectorAll(".qty-input");
  const prices = cart.querySelectorAll(".price");
  qtyInputs.forEach((input, index) => {
    total += input.value * parseFloat(prices[index].textContent.slice(1));
  });
  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

updateTotal();
});