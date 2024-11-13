let currentIndex = 0;
const itemsPerPage = 15;
let allProducts = JSON.parse(localStorage.getItem("listaProductos")) || [];
let filteredProducts = [...allProducts];

function formatToCOP(number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(number);
}

function loadProducts() {
  const productSection = document.querySelector('.product-list');
  let itemsLoaded = 0;

  while (currentIndex < filteredProducts.length && itemsLoaded < itemsPerPage) {
    const product = filteredProducts[currentIndex];
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.Imagen}" alt="${product.Nombre}" class="product-image">
      <h2 class="product-name">${product.Nombre}</h2>
      <p class="product-price">${formatToCOP(product.Precio)}</p>
      <p class="product-category">Categoría: ${product.categoria}</p>
      <p class="product-stock">Disponibles: ${product.CantidadDisponible}</p>
      <button class="view-details" data-product-id="${currentIndex}">Ver Detalles</button>
    `;
    
    productSection.appendChild(productCard);
    currentIndex++;
    itemsLoaded++;
  }

  if (currentIndex >= filteredProducts.length) {
    const message = document.createElement('p');
    message.textContent = "No hay más productos disponibles.";
    message.classList.add('no-more-products');
    productSection.appendChild(message);
    
    document.querySelector('.product-list').removeEventListener('scroll', handleScroll);
  }
}

function handleScroll() {
  const productSection = document.querySelector('.product-list');
  if (productSection.scrollTop + productSection.clientHeight >= productSection.scrollHeight - 10) {
    loadProducts();
  }
}

function showProductDetails(productId) {
  const product = filteredProducts[productId];
  const detailsSection = document.querySelector('.product-details');

  detailsSection.querySelector('img').src = product.Imagen;
  detailsSection.querySelector('img').alt = product.Nombre;
  detailsSection.querySelector('h2').textContent = product.Nombre;
  detailsSection.querySelector('.product-price').textContent = `Precio: ${formatToCOP(product.Precio)}`;
  detailsSection.querySelector('.product-category').textContent = `Categoría: ${product.categoria}`;
  detailsSection.querySelector('.product-stock').textContent = `Disponibles: ${product.CantidadDisponible}`;
  detailsSection.querySelector('.product-description').textContent = `Descripción: ${product.Descripcion}`;

  detailsSection.style.display = 'block';
}


function applyFilters() {
  const categoryFilter = document.getElementById('filtroCategoria').value;
  const priceFilter = document.getElementById('filtroPrecio').value;

  if (categoryFilter === 'Todos' && priceFilter === 'Todos') {
    filteredProducts = [...allProducts];
  } else {
    filteredProducts = allProducts.filter(product => {
      let matchesCategory = categoryFilter === 'Todos' || product.categoria === categoryFilter;
      let matchesPrice = false;

      if (priceFilter === '0-2000') {
        matchesPrice = product.Precio >= 0 && product.Precio <= 2000;
      } else if (priceFilter === '2001-6000') {
        matchesPrice = product.Precio > 2000 && product.Precio <= 6000;
      } else if (priceFilter === '6001-15000') {
        matchesPrice = product.Precio > 6000 && product.Precio <= 15000;
      } else if (priceFilter === '15000+') {
        matchesPrice = product.Precio > 15000;
      } else {
        matchesPrice = true;
      }

      return matchesCategory && matchesPrice;
    });
  }

  currentIndex = 0;
  document.querySelector('.product-list').innerHTML = '';
  loadProducts();

  if (filteredProducts.length > itemsPerPage) {
    document.querySelector('.product-list').addEventListener('scroll', handleScroll);
  }
}

document.getElementById('aplicarFiltros').addEventListener('click', applyFilters);

loadProducts();

const productSection = document.querySelector('.product-list');
productSection.addEventListener('scroll', handleScroll);

document.querySelector('.product-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('view-details')) {
    const productId = e.target.getAttribute('data-product-id');
    showProductDetails(productId);
  }
});

document.getElementById('limpiarFiltros').addEventListener('click', () => {
  document.getElementById('filtroCategoria').value = 'Todos';
  document.getElementById('filtroPrecio').value = 'Todos';

  filteredProducts = [...allProducts];
  currentIndex = 0;
  document.querySelector('.product-list').innerHTML = '';

  loadProducts();

  document.querySelector('.product-list').addEventListener('scroll', handleScroll);
});

document.getElementById('cancelarCompra').addEventListener('click', () => {
  window.location.href = '../HTML/Requerimientos.html';
});

document.getElementById('irCarrito').addEventListener('click', () => {
  window.location.href = '../HTML/carrito.html';
});


let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

function addToCart(product) {
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cartItems", JSON.stringify(cart));

  alert(`${product.name} ha sido añadido al carrito.`);
}
document.getElementById("agregarAlCarrito").addEventListener("click", () => {
  const detailsSection = document.querySelector(".product-details");
  
  const product = {
    id: detailsSection.querySelector("h2").textContent,
    name: detailsSection.querySelector("h2").textContent,
    price: parseInt(detailsSection.querySelector(".product-price").textContent.replace(/[^\d]/g, "")),
    quantity: parseInt(document.getElementById("cantidad").value),
    image: detailsSection.querySelector("img").src
  };

  addToCart(product);
});








