let currentProduct = null;

function renderProducts() {
  const container = document.getElementById("productList");

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <button onclick="openModal(${p.id})">Hızlı Gözat</button>
      </div>
    `;
  });
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  currentProduct = p;

  document.getElementById("mName").innerText = p.name;
  document.getElementById("mImg").src = p.img;

  updatePrice();

  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function updatePrice() {
  const gram = document.getElementById("gram").value;
  document.getElementById("mPrice").innerText = currentProduct.price * gram;
}

document.getElementById("gram").addEventListener("change", updatePrice);

document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();

  document.getElementById("productList").innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(val))
    .forEach(p => {
      document.getElementById("productList").innerHTML += `
        <div class="product">
          <img src="${p.img}">
          <h3>${p.name}</h3>
          <button onclick="openModal(${p.id})">Hızlı Gözat</button>
        </div>
      `;
    });
});

window.onload = () => {
  renderProducts();

  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 2000);
};
