let cart = [];

function addToCart() {
  const gram = document.getElementById("gram").value;
  const type = document.getElementById("type").value;

  const price = currentProduct.price * gram;

  cart.push({
    name: currentProduct.name,
    price: price,
    type: type
  });

  renderCart();
}

function renderCart() {
  const list = document.getElementById("cartItems");
  list.innerHTML = "";

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price;
    list.innerHTML += `<li>${item.name} - ${item.price}₺</li>`;
  });

  document.getElementById("total").innerText = total;
}
