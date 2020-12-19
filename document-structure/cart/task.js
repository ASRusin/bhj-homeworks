const dec = [...document.getElementsByClassName("product__quantity-control_dec")];
const inc = [...document.getElementsByClassName("product__quantity-control_inc")];
const value = [...document.getElementsByClassName("product__quantity-value")];
const productAdd = [...document.getElementsByClassName("product__add")];
const cartProducts = document.querySelector(".cart__products");
const product = [...document.getElementsByClassName("product")];
const productImage = [...document.getElementsByClassName("product__image")];

for (let i = 0; i < dec.length; i++) {
  dec[i].addEventListener("click", () => {
    if (Number(value[i].textContent) > 1) {
      value[i].textContent = Number(value[i].textContent) - 1;
    }
  });
  inc[i].addEventListener("click", () => {
    value[i].textContent = Number(value[i].textContent) + 1;
  });
  productAdd[i].addEventListener("click", () => {
    const productCard = [...document.getElementsByClassName("cart__product")];
    if (productCard.filter((x) => x.dataset.id === product[i].dataset.id).length > 0) {
      for (let j = 0; j < productCard.length; j++) {
        if (productCard[j].dataset.id === product[i].dataset.id) {
          const productCount = productCard[j].querySelector(".cart__product-count");
          const newProductCount = productCount;
          newProductCount.textContent = Number(productCount.textContent) + Number(value[i].textContent);
          productCard[j].replaceChild(newProductCount, productCount);
        }
      }
    } else {
      cartProducts.innerHTML += `<div class="cart__product" data-id='${product[i].dataset.id}'>
        <img class="cart__product-image" src=${productImage[i].src} />
        <div class="cart__product-count">${value[i].textContent}</div>
      </div>`;
    }
  });
}
