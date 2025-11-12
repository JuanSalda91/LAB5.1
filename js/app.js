const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');
 
let totalPrice = 0;
 
// Function to update the total price
function updateTotalPrice(amount) {
  totalPrice += amount;
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}
 
// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}

// ----- Function to add product to the cart ----- //
function addProduct() {
    const name = productNameInput.value.trim();
    const price = parseFloat(productPriceInput.value);

    // ----- condition to ensure product name and price ------ //
    if(!name) {
        alert('Please enter product name');
        return;
    }
    if(isNaN(price) || price <= 0) {
        alert('Please enter product price');
        return;
    }

    // ----- create list of products ----- //
    const li = document.createElement('li');
    li.textContent = `${name} - $${price.toFixed(2)}`; // --- first $ sign will appear as the currency symbol without affecting the code --- //
    li.dataset.price = price;

    // ----- append to cart ----- //
    cart.appendChild(li);

    // ----- update total price of the cart ----- //
    totalPrice += price;
    totalPriceSpan.textContent = totalPrice.toFixed(2);

    // ----- celar input fields ----- //
    productNameInput.value = '';
    productPriceInput.value = '';
};

// ----- event listener to add products to the cart ----- //
addProductButton.addEventListener('click', addProduct);
