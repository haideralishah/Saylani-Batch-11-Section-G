const slideImages = [
  "https://burgerlab.com.pk/wp-content/uploads/2024/05/app-banner-2.jpg?c062ef&c062ef",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6q8_0SwnNkM0c0vOT_twL1yzrcvlGuToSw&s",
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
];

function displaySlider() {
  let slidesContainer = document.querySelectorAll(".slides")[0];

  for (let i = 0; i < slideImages.length; i++) {
    let img = `<img src="${slideImages[i]}" alt="Slide ${i + 1}">`;
    slidesContainer.innerHTML += img;
  }
}

displaySlider();

const products = [
  {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
    productName: "THE Doppler",
    price: "$10.00",
  },
  {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/quadra.png?c062ef&c062ef",
    productName: "Pentra RELOADED",
    price: "$20.00",
  },
  {
    image:
      "https://burgerlab.com.pk/wp-content/uploads/2022/01/all-american-4.png?c062ef&c062ef",
    productName: "ALL PAKISTANI DOUBLE CHEESE",
    price: "$50.00",
  },
  {
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Big Bang",
    price: "$40.00",
  },
];

let cart = [
  {
    image: "https://burgerlab.com.pk/wp-content/uploads/2022/01/doppler.png?c062ef&c062ef",
    productName: "THE Doppler",
    price: "$10.00",
    qty: 3,
    totalPrice: this.price * this.qty,
  },
];

function createProductCard() {
  for (let i = 0; i < products.length; i++) {
    let productListContainer = document.querySelectorAll(".product-list")[0];

    let product = products[i];
    let productCard = `
        <div class="product-item">
          <img
            src="${product.image}"
            alt="${product.productName} image"
          />
          <h3>${product.productName}</h3>
          <p>${product.price}</p>
          <p>Add to Cart</p>
        </div>
    `;
    productListContainer.innerHTML += productCard;
  }
}

createProductCard();
