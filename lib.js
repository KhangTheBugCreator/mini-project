const products = [
  {
    id: 1,
    name: "Phở",
    price: 40000,
  },

  {
    id: 2,
    name: "Bánh Mì",
    price: 20000,
  },

  {
    id: 3,
    name: "Bún Nước Lèo",
    price: 25000,
  },
];

const productList = document.getElementById("productList");
const cartList = document.getElementById("cartList");
const totalPrice = document.getElementById("totalPrice");

//render product

function renderProduct() {
  productList.innerHTML = "";
  for (const product of products) {
    productList.innerHTML += `
      <div class="product">
        <h3>${product.name}</h3>
        <p>Price: ${product.price} VND</p>
        <button onclick="addToCart(${product.id})">Add To Cart</button>
      </div>
    `;
  }
}

// add Item to  Cart
let cart = [];
function addToCart(id) {
  const product = products.find((item) => item.id === id); //find array
  const cartItem = cart.find((item) => item.id === id);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }
  renderCart();
}
//render Cart

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
    cartList.innerHTML += `
      <div class="cart-item">
        <h3>
          ${item.name}
        </h3>
        <p>Price: ${item.price} VND</p>
        <p>Quantity: ${item.quantity}</p>
        <button onclick="decreaseQuantity(${item.id})">-</button>
        <button onclick="increaseQuantity(${item.id})">+</button>
        <button onclick="removeItem(${item.id})">Delete</button>
      </div>
    
    
    `;
  }
  totalPrice.innerHTML = total;
}

// Increase quantity
function increaseQuantity(id) {
  for (const item of cart) {
    if (item.id === id) {
      item.quantity++;
    }
  }

  renderCart();
}
// Decrease quantity
function decreaseQuantity(id) {
  for (const item of cart) {
    if (item.id === id) {
      item.quantity--;

      if (item.quantity <= 0) {
        removeItem(id);
        return;
      }
    }
  }

  renderCart();
}
// Remove item
function removeItem(id) {
  cart = cart.filter((item) => item.id !== id);

  renderCart();
}
