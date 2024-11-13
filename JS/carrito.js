let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
const deliveryCost = 15000;
const maxProducts = 20;
const budgetLimit = JSON.parse(localStorage.getItem("budgetLimit")) || 100000; // Ejemplo de presupuesto límite

function loadCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  let totalCost = 0;
  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    const itemTotal = item.price * item.quantity;
    totalCost += itemTotal;

    row.innerHTML = `
      <td><img src="${item.image}" alt="${item.name}" style="width: 50px;"></td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${formatToCOP(item.price)}</td>
      <td>${formatToCOP(itemTotal)}</td>
      <td><button onclick="removeItem(${index})">Eliminar</button></td>
    `;
    cartItemsContainer.appendChild(row);
  });

  document.getElementById("totalCost").textContent = formatToCOP(totalCost);
  document.getElementById("finalCost").textContent = formatToCOP(totalCost + deliveryCost);
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cart));
  loadCartItems();
}

function formatToCOP(number) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(number);
}

document.addEventListener("DOMContentLoaded", loadCartItems);

document.getElementById("cancelPurchase").addEventListener("click", () => {
  window.location.href = "../HTML/Requerimientos.html";
});

document.getElementById("continueShopping").addEventListener("click", () => {
  window.location.href = "../HTML/listaProductos.html";
});

document.getElementById("toggleSecurityCode").addEventListener("click", () => {
  const securityCode = document.getElementById("securityCode");
  securityCode.type = securityCode.type === "password" ? "text" : "password";
});

document.getElementById("clearFields").addEventListener("click", () => {
  document.getElementById("paymentForm").reset();
});

document.getElementById("confirmPurchase").addEventListener("click", () => {
  if (cart.length > maxProducts) {
    alert("No puedes superar los 20 productos en el carrito.");
    return;
  }

  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (totalCost > budgetLimit) {
    alert("No puedes superar el presupuesto establecido.");
    return;
  }

  const confirmButton = document.getElementById("confirmPurchase");
  confirmButton.disabled = true;

  new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 2000;
    setTimeout(() => {
      const isValid = validatePayment();
      isValid ? resolve("Pago realizado con éxito.") : reject("Error en la validación de la compra.");
    }, delay);
  })
  .then((message) => {
    alert(message);
    
    // Eliminar los datos del localStorage relacionados con el carrito y el presupuesto
    localStorage.removeItem("cartItems");
    localStorage.removeItem("budgetLimit");

    // Redirigir al usuario a la página de confirmación o a otra página
    window.location.href = "../HTML/Requerimientos.html";
  })
  .catch((error) => {
    alert(error);
    confirmButton.disabled = false;
  });
});

function validatePayment() {
  const cardNumber = document.getElementById("cardNumber").value;
  const expiryDate = document.getElementById("expiryDate").value;
  const securityCode = document.getElementById("securityCode").value;
  const totalProducts = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    cardNumber.length === 16 &&
    expiryDate.length === 5 &&
    securityCode.length === 3 &&
    totalProducts <= maxProducts
  );
}

loadCartItems();
