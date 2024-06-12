const slideImages = [
  "https://pixexid.com/api/download/image/a-burger-with-a-sense-of-wanderlust-backpacks-through-a-food-landscape-with-fry-9hbp0rfh.jpeg",
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
    id: "502c305a-997e-4534-97b8-f6f7862f3737",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "THE Doppler",
    price: "$10.00",
  },
  {
    id: "67aadbfe-a6d9-4d8d-a436-27c369cff5ff",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Pentra RELOADED",
    price: "$20.00",
  },
  {
    id: "54c3c17e-b3e9-469b-800a-b065d193a6d9",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "ALL PAKISTANI DOUBLE CHEESE",
    price: "$50.00",
  },
  {
    id: "e2085e01-f142-4475-8124-e24722cff1d6",
    image: "https://em-cdn.eatmubarak.pk/55018/dish_image/1693985158.jpg",
    productName: "Big Bang",
    price: "$40.00",
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
          <button onclick="addToCartinObj(${i})">Add to Cart</button>
        </div>
    `;
    productListContainer.innerHTML += productCard;
  }
}

createProductCard();

let cart = {};

function addToCartinObj(index) {
  const { id } = products[index];

  if (id in cart) {
    cart[id].qty = cart[id].qty + 1;
    cart[id].totalPrice = cart[id].qty * cart[id].price.slice(1);
  } else {
    cart[id] = { ...products[index] };
    cart[id].qty = 1;
    cart[id].totalPrice = cart[id].qty * cart[id].price.slice(1);
  }
  console.log(cart);
}







// let cart = [];
// function addToCartinArr(ind) {
//   const { id } = products[ind];

//   let matchFound = false;
//   let targetIndex;

//   cart.forEach((item, index) => {
//     if (item.id === id) {
//       matchFound = true;
//       targetIndex = index;
//     }
//   });

//   if (matchFound) {
//     const product = cart[targetIndex];

//     product.qty = product.qty + 1;
//     product.totalPrice = product.qty * product.price.slice(1);

//   } else {
//     let cloneProduct = { ...products[ind] };
//     cloneProduct.qty = 1;
//     cloneProduct.totalPrice = cloneProduct.qty * cloneProduct.price.slice(1);
//     cart.push(cloneProduct);
//   }

//   console.log(cart);
// }
