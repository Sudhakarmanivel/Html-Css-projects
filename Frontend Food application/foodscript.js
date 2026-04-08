// Typing Effect (Dynamic)
const text = "Delicious Food Delivered Fast";
let index = 0;
const speed = 80;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

window.onload = typeEffect;


// Button Click Animation + Action
const orderBtn = document.querySelector(".btn-primary");
const menuBtn = document.querySelector(".btn-secondary");

orderBtn.addEventListener("click", () => {
  orderBtn.innerText = "Ordering...";
  setTimeout(() => {
    alert("Order placed successfully! 🎉");
    orderBtn.innerText = "Order Now →";
  }, 1000);
});

menuBtn.addEventListener("click", () => {
  alert("Opening Menu...");
});


// Navbar Active Link Highlight
const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


// Smooth Scroll
document.querySelectorAll("a[href='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


// Food Items
const foods = [
  {
    name: "Burger",
    price: "$8",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg"
  },
  {
    name: "Pizza",
    price: "$12",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
  },
  {
    name: "Sandwich",
    price: "$7",
    image: "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg"
  },
  {
    name: "Fried Chicken",
    price: "$9",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg"
  }
];

// Display Foods
const menuContainer = document.getElementById("menu-container");

foods.forEach(food => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    <div class="card-body">
      <h3>${food.name}</h3>
      <p class="price">${food.price}</p>
      <button onclick="orderFood('${food.name}')">Order</button>
    </div>
  `;

  menuContainer.appendChild(card);
});

// Order Function
function orderFood(foodName) {
  alert(foodName + " ordered successfully! 🍔");
}